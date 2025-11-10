import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
export interface projects {
  id: number;
  name: string;
  description: string;
  created_by: Date;
    created_at: Date;
    updated_at: Date;
}
