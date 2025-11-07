// import express, { Request, Response } from "express";

// const router = express.Router();

// // In-memory storage (replace later with a real database)
// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   members: number[];
// }

// let projects: Project[] = [];
// let projectIdCounter = 1;

// /**
//  * @route POST /api/projects
//  * @desc Create a new project
//  */
// router.post("/", (req: Request, res: Response) => {
//   const { name, description } = req.body;

//   if (!name || !description) {
//     return res.status(400).json({ error: "Name and description are required" });
//   }

//   const newProject: Project = {
//     id: projectIdCounter++,
//     name,
//     description,
//     members: [],
//   };

//   projects.push(newProject);
//   res.status(201).json(newProject);
// });

// /**
//  * @route GET /api/projects
//  * @desc List all projects
//  */
// router.get("/", (req: Request, res: Response) => {
//   res.json(projects);
// });

// /**
//  * @route POST /api/projects/:id/members
//  * @desc Assign users to a project
//  */
// router.post("/:id/members", (req: Request, res: Response) => {
//   const projectId = parseInt(req.params.id);
//   const { userIds } = req.body;

//   const project = projects.find((p) => p.id === projectId);

//   if (!project) {
//     return res.status(404).json({ error: "Project not found" });
//   }

//   if (!Array.isArray(userIds) || userIds.length === 0) {
//     return res.status(400).json({ error: "userIds must be a non-empty array" });
//   }

//   // Add users, avoiding duplicates
//   project.members = Array.from(new Set([...project.members, ...userIds]));

//   res.json({ message: "Users successfully assigned to project", project });
// });

// /**
//  * @route DELETE /api/projects/:id/members/:userId
//  * @desc Remove a user from a project
//  */
// router.delete("/:id/members/:userId", (req: Request, res: Response) => {
//   const projectId = parseInt(req.params.id);
//   const userId = parseInt(req.params.userId);

//   const project = projects.find((p) => p.id === projectId);

//   if (!project) {
//     return res.status(404).json({ error: "Project not found" });
//   }

//   project.members = project.members.filter((id) => id !== userId);

//   res.json({ message: "User removed from project successfully", project });
// });

// export default router;
