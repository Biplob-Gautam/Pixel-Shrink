import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import {
  createJob,
  getUserJobs,
  getJobById,
  deleteJobById,
  getJobStatus as getJobStatusById,
} from "../services/job.services.js";

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

export { uploadImage, getJobs, getJob, getJobStatus, downloadJob, deleteJob };

// TODO:
// Upload original image to S3
// Trigger Lambda
// Update Job Status