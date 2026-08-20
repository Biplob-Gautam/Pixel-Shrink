import { ImageJob } from "../models/imageJob.model.js";

export const createUploadJob = async ({ owner = null, contentType }) => {
  return await ImageJob.create({
    owner,

    isGuest: owner === null,

    status: "UPLOADING",

    originalImage: {
      mimeType: contentType,
    },
  });
};

export const getUserJobs = async (ownerId) => {
  return await ImageJob.find({
    owner: ownerId,
  }).sort({ createdAt: -1 });
};

export const getJobById = async (jobId) => {
  return await ImageJob.findById(jobId);
};

export const deleteJobById = async (jobId) => {
  return await ImageJob.findByIdAndDelete(jobId);
};

export const getJobStatus = async (jobId) => {
  return await ImageJob.findById(jobId).select("-_id status");
};
