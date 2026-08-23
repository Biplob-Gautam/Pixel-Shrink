import { ImageJob } from "../models/imageJob.model.js";

//deleteJobId works but no s3 deletion, getJobStatus needs improvement

// Creates a new ImageJob record before upload.
// Lifecycle:
// UPLOADING → PROCESSING → COMPLETED/FAILED
// owner exists for authenticated users.
// owner = null for guest uploads.
export const createUploadJob = async ({
  owner = null,
  contentType,
  processingOptions,
}) => {
  return await ImageJob.create({
    owner,
    isGuest: !owner,
    status: "UPLOADING",
    originalImage: { mimeType: contentType },
    processingOptions,
    expiresAt: owner ? null : new Date(Date.now() + 24 * 60 * 60 * 1000), //if user is guest delete after 24 hours
  });
};

// Fetches processing history for a logged-in user.
// Used by dashboard.
export const getUserJobs = async (ownerId) => {
  return await ImageJob.find({ owner: ownerId }).sort({ createdAt: -1 });
};

// Fetches complete ImageJob document.
export const getJobById = async (jobId) => {
  return await ImageJob.findById(jobId);
};

// Deletes job document.
// TODO:
// Remove original/processed/thumbnail files
// from S3 before deleting MongoDB record.
export const deleteJobById = async (jobId) => {
  return await ImageJob.findByIdAndDelete(jobId);
};

// Returns only current processing status.
// Used by frontend polling.
export const getJobStatus = async (jobId) => {
  return await ImageJob.findById(jobId).select("status");
};
