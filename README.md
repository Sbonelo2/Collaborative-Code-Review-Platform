# Collaborative Code Review Platform

<img src="https://socialify.git.ci/Sbonelo2/Collaborative-Code-Review-Platform/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Collaborative-Code-Review-Platform" width="640" height="320" />

A modern web-based platform for collaborative code reviews, allowing teams to review, discuss, and approve code submissions in real-time.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Technologies](#technologies)
- [Database Setup](#database-setup)

## ✨ Features

- **User Authentication**: Secure user registration and login with JWT tokens
- **Code Review Management**: Create, manage, and track code review submissions
- **Real-time Notifications**: Socket.io-based real-time notifications for review updates
- **Comments & Discussion**: Add comments to code submissions for collaborative feedback
- **Project Management**: Organize reviews by projects
- **User Management**: Manage user profiles and roles

## 📦 Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn package manager

## 🚀 Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd Collaborative-Code-Review-Platform
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory with the following variables:
   ```
   PORT=3000
   DB_USER=your_db_user
   DB_HOST=localhost
   DB_NAME=code_review_db
   DB_PASSWORD=your_db_password
   DB_PORT=5432
   JWT_SECRET=your_jwt_secret_key
   ```

## ⚙️ Configuration

### Database Configuration

Update `config/database.ts` with your PostgreSQL connection details. The configuration uses environment variables for security.

### Environment Variables

Create a `.env` file in the root directory:

| Variable      | Description       | Example           |
| ------------- | ----------------- | ----------------- |
| `PORT`        | Server port       | `3000`            |
| `DB_USER`     | PostgreSQL user   | `postgres`        |
| `DB_HOST`     | Database host     | `localhost`       |
| `DB_NAME`     | Database name     | `code_review_db`  |
| `DB_PASSWORD` | Database password | `yourpassword`    |
| `DB_PORT`     | PostgreSQL port   | `5432`            |
| `JWT_SECRET`  | JWT secret key    | `your-secret-key` |

## 🏃 Running the Application

### Development Mode

Run the application with auto-reload on file changes:

```bash
npm run dev
```

This uses `nodemon` to watch for TypeScript changes and automatically restart the server.

### Production Mode

Build and start the application:

```bash
npm run build
npm start
```

### Build Only

Compile TypeScript to JavaScript:

```bash
npm run build
```

The server will start on the port specified in your `.env` file (default: 3000).

## 📁 Project Structure

```
├── config/              # Configuration files
│   └── database.ts      # PostgreSQL connection setup
├── controllers/         # Request handlers
│   ├── authController.ts
│   ├── projectController.ts
│   ├── submissionController.ts
│   ├── commentsController.ts
│   ├── userController.ts
│   └── notificationController.ts
├── middleware/          # Express middleware
│   ├── authMiddleware.ts
│   ├── checkAuth.ts
│   ├── errorHandler.ts
│   └── validateRequest.ts
├── models/              # Database models
│   ├── userModel.ts
│   ├── projectModels.ts
│   ├── submissionModels.ts
│   ├── commentsModel.ts
│   └── reviewsModels.ts
├── routes/              # API route definitions
│   ├── authRoutes.ts
│   ├── userRoutes.ts
│   └── submissionRote.ts
├── services/            # Business logic
│   ├── authServices.ts
│   ├── projectServices.ts
│   └── userServices.ts
├── socket/              # WebSocket handlers
│   └── notificationSocket.ts
├── views/               # Frontend HTML
│   └── index.html
├── public/              # Static assets
│   ├── css/
│   └── images/
├── migrations/          # Database migrations
│   └── 001_create_users_table.sql
├── server.ts            # Application entry point
└── package.json         # Dependencies and scripts
```

## 🔌 API Routes

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile

### Projects & Submissions

- `POST /api/projects` - Create new project
- `GET /api/projects` - List all projects
- `POST /api/submissions` - Submit code for review
- `GET /api/submissions` - Get all submissions

### Comments & Notifications

- Real-time notifications via WebSocket

## 💻 Technologies Used

- **Backend**: Express.js, TypeScript, Node.js
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens), bcrypt
- **Real-time Communication**: Socket.io
- **Validation**: express-validator
- **Development**: TypeScript, ts-node, nodemon

## 🗄️ Database Setup

1. **Create the database:**

   ```bash
   createdb code_review_db
   ```

2. **Run migrations:**

   ```bash
   psql -U your_db_user -d code_review_db -f migrations/001_create_users_table.sql
   ```

3. The database connection will be tested on server startup.

## 🔒 Security Features

- Password encryption using bcrypt
- JWT-based authentication
- Protected routes with middleware
- Request validation
- Error handling middleware

## 📝 License

ISC

## 👤 Author

Sbonelo2

---

For more information or issues, please open an issue in the repository.
