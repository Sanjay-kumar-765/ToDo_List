# ToDo Application

Full-stack ToDo app with React, Node.js, Express, and MongoDB Atlas (Cloud Database).

## Features
- ✅ User Authentication (Login/Signup)
- ✅ Google Sign-in (UI Ready)
- ✅ Create, Read, Update, Delete todos
- ✅ Schedule tasks with date and time
- ✅ User-specific todos (data isolation)
- ✅ Professional animated UI with glassmorphism
- ✅ Cloud database (MongoDB Atlas)

## Setup

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Database
- **MongoDB Atlas** (Cloud Database)
- Configure your connection string in `backend/.env`
- No local MongoDB installation required

## Environment Setup
1. Copy `backend/.env.example` to `backend/.env`
2. Add your credentials:
   - MongoDB connection string
   - JWT secret
   - Google OAuth credentials (optional)

## Sample Users
Login with these credentials:
1. **john@example.com** / password123
2. **sarah@example.com** / password123
3. **mike@example.com** / password123

## Tech Stack
- **Frontend**: React, Axios, CSS3 Animations
- **Backend**: Node.js, Express, JWT Authentication
- **Database**: MongoDB Atlas (Cloud)
- **Security**: bcryptjs for password hashing

## Access
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
