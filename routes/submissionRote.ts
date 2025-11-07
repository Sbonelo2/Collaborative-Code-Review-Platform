// import express, { Request, Response } from "express";

// const router = express.Router();

// // In-memory mock data (replace later with a database)
// interface Submission {
//   id: number;
//   projectId: number;
//   title: string;
//   code: string;
//   status: "pending" | "under_review" | "approved" | "rejected";
//   createdAt: string;
// }

// let submissions: Submission[] = [];
// let submissionIdCounter = 1;

// /**
//  * @route POST /api/submissions
//  * @desc Create a new code submission
//  */
// router.post("/", (req: Request, res: Response) => {
//   const { projectId, title, code } = req.body;

//   if (!projectId || !title || !code) {
//     return res.status(400).json({
//       error: "projectId, title, and code are required fields",
//     });
//   }

//   const newSubmission: Submission = {
//     id: submissionIdCounter++,
//     projectId,
//     title,
//     code,
//     status: "pending",
//     createdAt: new Date().toISOString(),
//   };

//   submissions.push(newSubmission);
//   res.status(201).json(newSubmission);
// });

// /**
//  * @route GET /api/projects/:id/submissions
//  * @desc List all submissions for a specific project
//  */
// router.get("/projects/:id/submissions", (req: Request, res: Response) => {
//   const projectId = parseInt(req.params.id);
//   const projectSubmissions = submissions.filter(
//     (sub) => sub.projectId === projectId
//   );

//   res.json(projectSubmissions);
// });

// /**
//  * @route GET /api/submissions/:id
//  * @desc View a single submission by ID
//  */
// router.get("/:id", (req: Request, res: Response) => {
//   const submissionId = parseInt(req.params.id);
//   const submission = submissions.find((s) => s.id === submissionId);

//   if (!submission) {
//     return res.status(404).json({ error: "Submission not found" });
//   }

//   res.json(submission);
// });

// /**
//  * @route PUT /api/submissions/:id/status
//  * @desc Update a submission’s status
//  */
// router.put("/:id/status", (req: Request, res: Response) => {
//   const submissionId = parseInt(req.params.id);
//   const { status } = req.body;

//   const submission = submissions.find((s) => s.id === submissionId);
//   if (!submission) {
//     return res.status(404).json({ error: "Submission not found" });
//   }

//   const validStatuses = ["pending", "under_review", "approved", "rejected"];
//   if (!validStatuses.includes(status)) {
//     return res
//       .status(400)
//       .json({
//         error: "Invalid status. Must be one of: " + validStatuses.join(", "),
//       });
//   }

//   submission.status = status;
//   res.json({ message: "Submission status updated successfully", submission });
// });

// /**
//  * @route DELETE /api/submissions/:id
//  * @desc Delete a submission
//  */
// router.delete("/:id", (req: Request, res: Response) => {
//   const submissionId = parseInt(req.params.id);
//   const index = submissions.findIndex((s) => s.id === submissionId);

//   if (index === -1) {
//     return res.status(404).json({ error: "Submission not found" });
//   }

//   submissions.splice(index, 1);
//   res.json({ message: "Submission deleted successfully" });
// });

// export default router;
