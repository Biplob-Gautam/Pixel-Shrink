import { Router } from "express";
import { upload } from "../config/multer.config.js";
import {
  uploadImage,
  getJobs,
  getJob,
  getJobStatus,
  downloadJob,
  deleteJob,
} from "../controllers/job.controllers.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Guest Routes
router.post("/upload", upload.single("image"), uploadImage);
router.get("/:jobId/status", getJobStatus);
router.get("/:jobId/download", downloadJob);
router.get("/:jobId", getJob);

// Protected Routes
router.get("/", verifyJWT, getJobs);
router.delete("/:jobId",verifyJWT, deleteJob);

export default router;
