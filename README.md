*MERN Auth App*
A full-stack authentication system built using the MERN stack (MongoDB, Express, React, Node.js). This project provides secure user authentication with login, registration, and JWT-based authorization.

 *Features*
*  User Registration
*  User Login
*  JWT Authentication
*  Protected Routes
*  REST API Integration
*  Frontend + Backend Connected

 *Tech Stack*

* Frontend: React.js
* Backend: Node.js, Express.js
* Database: MongoDB
* Authentication: JWT (JSON Web Token)
  
*Project Structure*
auth-mern-app/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── index.js
│
├── frontend/
│   ├── src/
│   └── public/
│
└── README.md

 *Installation & Setup*

 *Clone the repository*

bash
git clone https://github.com/prathameshnevase158-debug/mern-auth-app.git
cd mern-auth-app

 Backend Setup
bash
cd backend
npm install

Create a `.env` file and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_ke

Run backend:

bash
npm start

 *Frontend Setup*

bash
cd frontend
npm install
npm start

 *API Endpoints*

| Method | Endpoint  | Description     |
| ------ | --------- | --------------- |
| POST   | /register | Register user   |
| POST   | /login    | Login user      |
| GET    | /profile  | Protected route |


* Author *

* Prathamesh Nevase

 Support

If you like this project, give it a  on GitHub
