import { query } from "../config/database";
import { Request, Response } from "express";
export const createNewProject = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const { rows } = await query(
    "INSERT INTO projects (title, description) VALUES ($1, $2) RETURNING *",
    [title, description]
  );
  res.status(201).json(rows[0]);
};
