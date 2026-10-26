import { body } from "express-validator";

export const createProductValidator = [
  body("title")
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage("Title must be between 2 and 20 characters"),
  body("description")
    .trim()
    .isLength({ min: 20, max: 100 })
    .withMessage("Description must be between 20 and 100 characters"),
  body("price.amount")
    .isFloat({ gt: 0 })
    .withMessage("Price amount must be a positive number"),
  body("price.currency")
    .optional()
    .isString()
    .isLength({ min: 3, max: 3 })
    .withMessage("Price currency must be a 3-character code"),
  body("category")
    .isIn(["Men", "Women"])
    .withMessage("Category must be either Men or Women"),
  body("stock")
    .isInt({ min: 0 })
    .withMessage("Stock must be a non-negative integer"),
  body("images").custom((_, { req }) => {
    if (!req.files?.length) {
      throw new Error("At least one product image is required");
    }
    return true;
  }),
];
