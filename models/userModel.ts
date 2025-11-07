import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
}

// import { Pool } from "pg";
// import bcrypt from "bcrypt";

// const pool = new Pool();

// interface User {
//   id: number;
//   username: string;
//   email: string;
//   password: string;
//   full_name?: string;
//   bio?: string;
//   created_at: Date;
//   updated_at: Date;
// }

// class UserModel {
//   // Create a new user
//   async createUser(
//     username: string,
//     email: string,
//     password: string,
//     fullName?: string
//   ): Promise<User> {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const query = `
//             INSERT INTO users (username, email, password, full_name, created_at, updated_at)
//             VALUES ($1, $2, $3, $4, NOW(), NOW())
//             RETURNING id, username, email, full_name, created_at, updated_at
//         `;

//     const values = [username, email, hashedPassword, fullName];
//     const result = await pool.query(query, values);
//     return result.rows[0];
//   }

//   // Get user by email (for login)
//   async getUserByEmail(email: string): Promise<User | null> {
//     const query = "SELECT * FROM users WHERE email = $1";
//     const result = await pool.query(query, [email]);
//     return result.rows[0] || null;
//   }

//   // Get user by ID
//   async getUserById(id: number): Promise<User | null> {
//     const query = "SELECT * FROM users WHERE id = $1";
//     const result = await pool.query(query, [id]);
//     return result.rows[0] || null;
//   }

//   // Update user profile
//   async updateUser(id: number, data: Partial<User>): Promise<User | null> {
//     const allowedUpdates = ["username", "email", "full_name", "bio"];
//     const updates = Object.keys(data)
//       .filter((key) => allowedUpdates.includes(key))
//       .map((key, index) => `${key} = $${index + 2}`);

//     if (updates.length === 0) return null;

//     const query = `
//             UPDATE users
//             SET ${updates.join(", ")}, updated_at = NOW()
//             WHERE id = $1
//             RETURNING id, username, email, full_name, bio, created_at, updated_at
//         `;

//     const values = [
//       id,
//       ...Object.values(data).filter((_, index) =>
//         allowedUpdates.includes(Object.keys(data)[index])
//       ),
//     ];

//     const result = await pool.query(query, values);
//     return result.rows[0] || null;
//   }

//   // Delete user
//   async deleteUser(id: number): Promise<boolean> {
//     const query = "DELETE FROM users WHERE id = $1";
//     const result = await pool.query(query, [id]);
//     return (result.rowCount ?? 0) > 0;
//   }

//   // Verify password
//   async verifyPassword(
//     plainPassword: string,
//     hashedPassword: string
//   ): Promise<boolean> {
//     return bcrypt.compare(plainPassword, hashedPassword);
//   }
// }

// export default new UserModel();
