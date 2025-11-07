import { Request, Response } from "express";
import { validationResult } from "express-validator";
import UserModel from "../models/userModel";

class UserController {
  // Get user profile
  async getProfile(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.id);
      const user = await UserModel.getUserById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Don't send password in response
      const { password, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      res.status(500).json({ message: "Error fetching user profile" });
    }
  }

  // Update user profile
  async updateProfile(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const userId = parseInt(req.params.id);

      // Check if user exists
      const existingUser = await UserModel.getUserById(userId);
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }

      // Check if user is updating their own profile
      if (req.user?.id !== userId) {
        return res
          .status(403)
          .json({ message: "Not authorized to update this profile" });
      }

      const updatedUser = await UserModel.updateUser(userId, req.body);
      if (!updatedUser) {
        return res.status(400).json({ message: "Invalid update data" });
      }

      res.json({
        message: "Profile updated successfully",
        user: updatedUser,
      });
    } catch (error) {
      console.error("Error updating user profile:", error);
      res.status(500).json({ message: "Error updating user profile" });
    }
  }

  // Delete user profile
  async deleteProfile(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.id);

      // Check if user exists
      const existingUser = await UserModel.getUserById(userId);
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }

      // Check if user is deleting their own profile
      if (req.user?.id !== userId) {
        return res
          .status(403)
          .json({ message: "Not authorized to delete this profile" });
      }

      const deleted = await UserModel.deleteUser(userId);
      if (!deleted) {
        return res.status(400).json({ message: "Error deleting profile" });
      }

      res.json({ message: "Profile deleted successfully" });
    } catch (error) {
      console.error("Error deleting user profile:", error);
      res.status(500).json({ message: "Error deleting user profile" });
    }
  }
}

export default new UserController();
