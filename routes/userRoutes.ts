




























// import { Router } from "express";
// import { body } from "express-validator";
// import UserController from "../controllers/userController";
// import AuthMiddleware from "../middleware/authMiddleware";

// const router = Router();

// // Validation middleware
// const updateProfileValidation = [
//   body("username")
//     .optional()
//     .trim()
//     .isLength({ min: 3, max: 50 })
//     .withMessage("Username must be between 3 and 50 characters"),
//   body("email")
//     .optional()
//     .trim()
//     .isEmail()
//     .normalizeEmail()
//     .withMessage("Please enter a valid email"),
//   body("fullName")
//     .optional()
//     .trim()
//     .isLength({ min: 2, max: 100 })
//     .withMessage("Full name must be between 2 and 100 characters"),
//   body("bio").optional().trim(),
// ];

// // Apply authentication middleware to all user routes
// router.use(AuthMiddleware.verifyToken);

// // User routes
// router.get("/:id", UserController.getProfile);
// router.put("/:id", updateProfileValidation, UserController.updateProfile);
// router.delete("/:id", UserController.deleteProfile);

// export default router;
