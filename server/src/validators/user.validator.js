import { body } from "express-validator";

export const registerUserValidator = [
  body("name")
    .trim()
    .isLength({ min: 2, max: 15 })
    .withMessage("Name must be between 2 and 15 characters"),
  body("email")
    .isEmail()
    .withMessage("A valid email is required")
    .normalizeEmail(),
  body("password")
    .isString()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
  body("role")
    .optional()
    .isIn(["user", "seller"])
    .withMessage("Role must be either user or seller"),
];

export const loginUserValidator = [
  body("email")
    .isEmail()
    .withMessage("A valid email is required")
    .normalizeEmail(),
  body("password")
    .isString()
    .notEmpty()
    .withMessage("Password is required"),
];
