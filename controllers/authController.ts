
import { Request, Response } from "express";
import { createUser } from "../services/authServices";
export const createNewUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    const user = await createUser({ name, email, password });
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
};































// import { Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { validationResult } from "express-validator";
// import UserModel from "../models/userModel";

// const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
// const JWT_EXPIRES_IN = "24h";

// class AuthController {
//   // User Registration
//   async register(req: Request, res: Response) {
//     try {
//       // Validate request
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       const { username, email, password, fullName } = req.body;

//       // Check if user already exists
//       const existingUser = await UserModel.getUserByEmail(email);
//       if (existingUser) {
//         return res
//           .status(400)
//           .json({ message: "User already exists with this email" });
//       }

//       // Create new user
//       const user = await UserModel.createUser(
//         username,
//         email,
//         password,
//         fullName
//       );

//       // Generate JWT token
//       const token = jwt.sign(
//         { userId: user.id, email: user.email },
//         JWT_SECRET,
//         { expiresIn: JWT_EXPIRES_IN }
//       );

//       res.status(201).json({
//         message: "User registered successfully",
//         user: {
//           id: user.id,
//           username: user.username,
//           email: user.email,
//           fullName: user.full_name,
//         },
//         token,
//       });
//     } catch (error) {
//       console.error("Registration error:", error);
//       res.status(500).json({ message: "Error registering user" });
//     }
//   }

//   // User Login
//   async login(req: Request, res: Response) {
//     try {
//       // Validate request
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       const { email, password } = req.body;

//       // Get user by email
//       const user = await UserModel.getUserByEmail(email);
//       if (!user) {
//         return res.status(401).json({ message: "Invalid email or password" });
//       }

//       // Verify password
//       const isValidPassword = await UserModel.verifyPassword(
//         password,
//         user.password
//       );
//       if (!isValidPassword) {
//         return res.status(401).json({ message: "Invalid email or password" });
//       }

//       // Generate JWT token
//       const token = jwt.sign(
//         { userId: user.id, email: user.email },
//         JWT_SECRET,
//         { expiresIn: JWT_EXPIRES_IN }
//       );

//       res.json({
//         message: "Login successful",
//         user: {
//           id: user.id,
//           username: user.username,
//           email: user.email,
//           fullName: user.full_name,
//         },
//         token,
//       });
//     } catch (error) {
//       console.error("Login error:", error);
//       res.status(500).json({ message: "Error during login" });
//     }
//   }
// }

// export default new AuthController();
