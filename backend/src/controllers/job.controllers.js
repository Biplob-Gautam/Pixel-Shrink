import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";

import {
  createUploadJob,
  getUserJobs,
  getJobById,
  deleteJobById,
  getJobStatus as getJobStatusById,
} from "../services/job.services.js";

import {
  generateUploadUrl,
  generateDownloadUrl,
} from "../services/s3.services.js";

//need to add downloadJob -> needs s3 signed URL implementation first, deleteJob -> needs s3 and mongoDB deletion -- i guess done

// Returns user's processing history.
// Generates temporary S3 URLs so frontend can directly display
// thumbnails and download processed images.
const getJobs = asyncHandler(async (req, res) => {
  const jobs = await getUserJobs(req.user._id);

  const jobsWithUrls = await Promise.all(
    jobs.map(async (job) => {
      let thumbnailUrl = null;
      let processedUrl = null;

      if (job.thumbnail?.key) {
        thumbnailUrl = await generateDownloadUrl({
          key: job.thumbnail.key,
          bucket: process.env.AWS_PROCESSED_BUCKET,
        });
      }

      if (job.processedImage?.key) {
        processedUrl = await generateDownloadUrl({
          key: job.processedImage.key,
          bucket: process.env.AWS_PROCESSED_BUCKET,
        });
      }

      return {
        _id: job._id,
        status: job.status,
        originalImage: job.originalImage,
        thumbnailUrl,
        processedUrl,
        processingOptions: job.processingOptions,
        createdAt: job.createdAt,
      };
    }),
  );

  return res
    .status(200)
    .json(new ApiResponse(200, jobsWithUrls, "Jobs fetched successfully"));
});

// Returns single job details.
const getJob = asyncHandler(async (req, res) => {
  const { jobId } = req.params;

  const job = await getJobById(jobId);

  if (!job) throw new ApiError(404, "Job not found");

  // If job belongs to a user,
  // verify ownership.
  if (job.owner && job.owner.toString() !== req.user?._id?.toString()) {
    throw new ApiError(403, "You are not allowed to access this job");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, job, "Job fetched successfully"));
});

// Frontend polls this while Lambda processes image.
const getJobStatus = asyncHandler(async (req, res) => {
  const job = await getJobStatusById(req.params.jobId);

  if (!job) throw new ApiError(404, "Job not found");

  return res.status(200).json(new ApiResponse(200, job, "Job status fetched"));
});

// Generates S3 presigned upload URL.
// Frontend uploads directly to S3 using this URL.
const getUploadUrl = asyncHandler(async (req, res) => {
  const { fileName, contentType, processingOptions } = req.body;

  const owner = req.user?._id ?? null;

  const job = await createUploadJob({
    owner,
    contentType,
    processingOptions,
  });

  const key = `uploads/${job._id}-${fileName}`;
  job.originalImage.key = key;

  await job.save();

  const uploadUrl = await generateUploadUrl({
    key,
    contentType,
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { jobId: job._id, uploadUrl, key },
        "Upload URL generated",
      ),
    );
});

// Lambda calls this after processing completes.
const completeJob = asyncHandler(async (req, res) => {
  if (req.headers["x-lambda-secret"] !== process.env.LAMBDA_SECRET) {
    throw new ApiError(401, "Unauthorized");
  }

  const { processedKey, processedSize, thumbnailKey, thumbnailSize } = req.body;

  const job = await getJobById(req.params.jobId);

  if (!job) throw new ApiError(404, "Job not found");

  job.status = "COMPLETED";

  job.processedImage = {
    key: processedKey,
    size: processedSize,
  };

  job.thumbnail = {
    key: thumbnailKey,
    size: thumbnailSize,
  };

  job.processingCompletedAt = new Date();

  await job.save();

  return res
    .status(200)
    .json(new ApiResponse(200, job, "Job completed successfully"));
});

// Generates temporary download URL
// for processed image stored in S3.
const downloadJob = asyncHandler(async (req, res) => {
  const job = await getJobById(req.params.jobId);

  if (!job) throw new ApiError(404, "Job not found");
  if (!job.processedImage?.key)
    throw new ApiError(400, "Image not processed yet");

  const downloadUrl = await generateDownloadUrl({
    key: job.processedImage.key,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, { downloadUrl }, "Download URL generated"));
});

//used to delete job(s3 + mongo)
const deleteJob = asyncHandler(async (req, res) => {
  const job = await getJobById(req.params.jobId);

  if (!job) throw new ApiError(404, "Job not found");

  // Delete original image
  if (job.originalImage?.key) {
    await deleteS3Object({
      bucket: process.env.AWS_BUCKET_NAME,
      key: job.originalImage.key,
    });
  }

  // Delete processed image
  if (job.processedImage?.key) {
    await deleteS3Object({
      bucket: process.env.AWS_PROCESSED_BUCKET,
      key: job.processedImage.key,
    });
  }

  // Delete thumbnail
  if (job.thumbnail?.key) {
    await deleteS3Object({
      bucket: process.env.AWS_PROCESSED_BUCKET,
      key: job.thumbnail.key,
    });
  }

  await deleteJobById(req.params.jobId);

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Job deleted successfully"));
});

const startJob = asyncHandler(async (req, res) => {
  if (req.headers["x-lambda-secret"] !== process.env.LAMBDA_SECRET) {
    throw new ApiError(401, "Unauthorized");
  }

  const job = await getJobById(req.params.jobId);

  if (!job) throw new ApiError(404, "Job not found");

  job.status = "PROCESSING";

  job.processingStartedAt = new Date();

  await job.save();

  return res
    .status(200)
    .json(new ApiResponse(200, job, "Job processing started"));
});

export {
  getJobs,
  getJob,
  getJobStatus,
  getUploadUrl,
  completeJob,
  downloadJob,
  deleteJob,
  startJob,
};
