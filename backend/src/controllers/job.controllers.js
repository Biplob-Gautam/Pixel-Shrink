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
import { generateUploadUrl } from "../services/s3.services.js";

const uploadImage = asyncHandler(async (req, res) => {
  const {
    compressionLevel,
    outputFormat,
    generateThumbnail,
    resizeWidth,
    resizeHeight,
  } = req.body;

  const owner = req.user?._id ?? null;
  const isGuest = owner === null;

  const job = await createJob({
    owner,
    isGuest,

    file: req.file,

    processingOptions: {
      compressionLevel,
      outputFormat,

      resize: {
        enabled: !!resizeWidth,
        width: resizeWidth,
        height: resizeHeight,
      },

      generateThumbnail,
    },
  });

  return res
    .status(201)
    .json(new ApiResponse(201, job, "Image uploaded successfully"));
});

const getJobs = asyncHandler(async (req, res) => {
  const jobs = await getUserJobs(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, jobs, "Jobs fetched successfully"));
});

const getJob = asyncHandler(async (req, res) => {
  const { jobId } = req.params;

  const job = await getJobById(jobId);

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, job, "Job fetched successfully"));
});

const getJobStatus = asyncHandler(async (req, res) => {
  const { jobId } = req.params;

  const job = await getJobStatusById(jobId);

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, job, "Job status fetched successfully"));
});

// TODO:
// Return signed S3 URL
const downloadJob = asyncHandler(async (req, res) => {
  const { jobId } = req.params;

  const job = await getJobById(jobId);

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  if (!job.processedImage?.url) {
    throw new ApiError(400, "Image has not been processed yet");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        downloadUrl: job.processedImage.url,
      },
      "Download URL fetched successfully",
    ),
  );
});

// TODO:
// Delete files from S3 before deleting MongoDB record
const deleteJob = asyncHandler(async (req, res) => {
  const { jobId } = req.params;

  const deletedJob = await deleteJobById(jobId);

  if (!deletedJob) {
    throw new ApiError(404, "Job not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Job deleted successfully"));
});

// TODO:
// Upload original image to S3
const getUploadUrl = asyncHandler(async (req, res) => {
  const { fileName, contentType } = req.body;

  const owner = req.user?._id ?? null;

  const job = await createUploadJob({
    owner,
    contentType,
  });

  const key = `uploads/${job._id}-${fileName}`;

  job.originalImage.key = key;

  await job.save();

  const uploadUrl = await generateUploadUrl({
    key,
    contentType,
  });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        jobId: job._id,
        uploadUrl,
        key,
      },
      "Upload URL generated",
    ),
  );
});
// Trigger Lambda
// Update Job Status

const completeJob = asyncHandler(async (req, res) => {
  const { jobId } = req.params;

  const { processedKey, processedSize } = req.body;

  const job = await getJobById(jobId);

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  job.status = "COMPLETED";

  job.processedImage = {
    key: processedKey,
    size: processedSize,
  };

  job.processingCompletedAt = new Date();

  await job.save();
  if (req.headers["x-lambda-secret"] !== process.env.LAMBDA_SECRET) {
    throw new ApiError(401, "Unauthorized");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, job, "Job completed successfully"));
});

export {
  uploadImage,
  getJobs,
  getJob,
  getJobStatus,
  downloadJob,
  deleteJob,
  getUploadUrl,
  completeJob,
};
