import { Request, Response } from "express";
import { query } from "../config/database";
export const createNewProject = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const { rows } = await query(
    "INSERT INTO projects (title, description) VALUES ($1, $2) RETURNING *",
    [title, description]
  );
  res.status(201).json(rows[0]);
};
export const listProjects = async (req: Request, res: Response) => {
  try {
    const projects = await query("SELECT * FROM projects");
    res.status(200).json(projects.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to list projects" });
  }
};
export const addProjectMember = async (req: Request, res: Response) => {
  const { project_id, user_id } = req.body;
  try {
    const { rows } = await query(
      "INSERT INTO project_members (project_id, user_id) VALUES ($1, $2) RETURNING *",
      [project_id, user_id]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add project member" });
  }
};


