import { ImageJob } from "../models/imageJob.model.js";

export const createJob = async ({
  owner = null,
  isGuest = true,
  file,
  processingOptions,
}) => {
  return await ImageJob.create({
    owner,
    isGuest,

    originalImage: {
      key: "",
      url: "",
      size: file.size,
      mimeType: file.mimetype,
    },

    processingOptions,

    status: "UPLOADING",
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
