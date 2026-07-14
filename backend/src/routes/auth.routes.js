import { Router } from "express";
import { validate } from "../middlewares/validator.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

import {
  registerUser,
  login,
  logout,
  getUser,
  refreshAccessToken,
} from "../controllers/auth.controllers.js";

import {
  registerValidator,
  loginValidator,
} from "../validators/userRegisterValidator.js";

const router = Router();

//unsecured routes
router.route("/register").post(registerValidator(), validate, registerUser);
router.route("/login").post(loginValidator(), validate, login);
router.route("/refresh-token").post(refreshAccessToken);

//secured routes
router.route("/logout").post(verifyJWT, logout);
router.route("/current-user").get(verifyJWT, getUser);

export default router;
