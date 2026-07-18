import { body } from "express-validator";

export const loginValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Please provide a valid email"),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required"),
  ];
};

export const registerValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Please provide a valid email"),

    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ min: 3, max: 20 })
      .withMessage("Username must be between 3 and 20 characters")
      .matches(/^[a-zA-Z0-9_]+$/)
      .withMessage("Username can only contain letters, numbers and underscores")
      .isLowercase()
      .withMessage("Username must be in lowercase"),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),

    body("fullname")
      .optional()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage("Full name must be between 2 and 50 characters"),
  ];
};
