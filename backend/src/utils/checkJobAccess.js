import { ApiError } from "./api-error.js";

export const checkJobAccess = (job, userId) => {
  if (job.owner && job.owner.toString() !== userId?.toString()) {
    throw new ApiError(403, "You are not allowed to access this job");
  }
};
