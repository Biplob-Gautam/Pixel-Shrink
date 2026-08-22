import { Router } from "express";
import { upload } from "../config/multer.config.js";
import {
  uploadImage,
  getJobs,
  getJob,
  getJobStatus,
  downloadJob,
  deleteJob,
  getUploadUrl,
  completeJob,
} from "../controllers/job.controllers.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { optionalAuth} from "../middlewares/optionalAuth.middleware.js";

const router = Router();

// Guest Routes
router.post("/upload", upload.single("image"), uploadImage);
router.get("/:jobId/status", getJobStatus);
router.get("/:jobId/download", downloadJob);
router.get("/:jobId", getJob);
router.post("/upload-url",optionalAuth, getUploadUrl);
router.post("/:jobId/complete", completeJob);
// Protected Routes
router.get("/", verifyJWT, getJobs);
router.delete("/:jobId", verifyJWT, deleteJob);

export default router;
