import { Router } from "express";
import { upload } from "../config/multer.config.js";
import {
  getJobs,
  getJob,
  getJobStatus,
  downloadJob,
  deleteJob,
  getUploadUrl,
  completeJob,
  startJob,
} from "../controllers/job.controllers.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { optionalAuth } from "../middlewares/optionalAuth.middleware.js";

const router = Router();

// router.post("/upload", upload.single("image"), uploadImage); //legacy code

// Guest + Authenticate Routes
router.get("/:jobId/status", optionalAuth, getJobStatus);
router.get("/:jobId/download", optionalAuth, downloadJob);
router.get("/:jobId", optionalAuth, getJob);
router.post("/upload-url", optionalAuth, getUploadUrl); //

// Lsmbda internal routes protected using LAMBDA SECRET
router.post("/:jobId/complete", completeJob);
router.post("/:jobId/start", startJob);

// Protected Routes for dashboard
router.get("/", verifyJWT, getJobs);
router.delete("/:jobId", verifyJWT, deleteJob);

export default router;
