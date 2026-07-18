import api from "../api/axios";

export const uploadImage = async (formData) => {
  const response = await api.post("/jobs/upload", formData);

  return response.data;
};

export const getJobStatus = async (jobId) => {
  const response = await api.get(`/jobs/${jobId}/status`);

  return response.data;
};

export const getJob = async (jobId) => {
  const response = await api.get(`/jobs/${jobId}`);

  return response.data;
};
