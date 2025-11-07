// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// import UserModel from "../models/userModel";

// const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// interface JwtPayload {
//   userId: number;
//   email: string;
// }

// declare global {
//   namespace Express {
//     interface Request {
//       user?: {
//         id: number;
//         email: string;
//       };
//     }
//   }
// }

// class AuthMiddleware {
//   async verifyToken(req: Request, res: Response, next: NextFunction) {
//     try {
//       const token = req.headers.authorization?.split(" ")[1];

//       if (!token) {
//         return res.status(401).json({ message: "Authentication required" });
//       }

//       const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
//       const user = await UserModel.getUserById(decoded.userId);

//       if (!user) {
//         return res.status(401).json({ message: "User not found" });
//       }

//       // Add user info to request object
//       req.user = {
//         id: decoded.userId,
//         email: decoded.email,
//       };

//       next();
//     } catch (error) {
//       return res.status(401).json({ message: "Invalid or expired token" });
//     }
//   }

//   // Optional: Add role-based authorization
//   checkRole(requiredRole: string) {
//     return async (req: Request, res: Response, next: NextFunction) => {
//       try {
//         if (!req.user) {
//           return res.status(401).json({ message: "Authentication required" });
//         }

//         const user = await UserModel.getUserById(req.user.id);

//         // Note: You'll need to add a 'role' field to your user model to use this
//         // if (user?.role !== requiredRole) {
//         //     return res.status(403).json({ message: 'Insufficient permissions' });
//         // }

//         next();
//       } catch (error) {
//         return res.status(500).json({ message: "Error checking permissions" });
//       }
//     };
//   }
// }

// export default new AuthMiddleware();
