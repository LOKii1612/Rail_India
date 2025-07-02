🚆 Rail_India - Train Booking Application
=========================================

Rail_India is a React-based train booking application that allows users to search for trains, view available seats, and book tickets seamlessly. The frontend is styled with Bootstrap and interacts with a backend API.

📌 Features
============
✅ Search for trains by source and destination

✅ View train details including available seats

✅ Book train tickets securely

✅ Responsive UI with an attractive and accessible design

🛠 Tech Stack
=============

**Frontend**: React.js, Bootstrap

**State Management**: React Hooks (useState, useEffect)

**API Calls**: Axios

**Styling**: Custom CSS & Bootstrap

🎨 UI Enhancements
==================
Elegant Navbar with a dynamic background

Stylish train cards with hover effects

Custom buttons & readable fonts

Fully responsive for mobile & desktop

🚀 Installation & Setup
=======================
1️⃣ Clone the Repository

git clone https://github.com/LOKii1612/Work_india_Railway.git



🚆 Railway Management System API
=================================

This project is a Railway Management System similar to IRCTC, where users can search for available trains, check seat availability, and book seats in real-time. The system supports role-based access control, ensuring that only admins can manage train data, while registered users can search and book seats.

🛠 Tech Stack:
=============

Backend: Node.js, Express.js

Database: PostgreSQL

Authentication: JWT (JSON Web Token)

API Security: API Key for admin routes

📌 Features:
============

✔ User Registration & Login (JWT-based Authentication)

✔ Role-Based Access (Admin & User)

✔ Add Trains (Admin Only)

✔ Check Train Availability (Source → Destination)

✔ Book Seats (Race Condition Handling)

✔ Get Booking Details


🚀 Installation & Setup
=======================

1️⃣ Clone the Repository

git clone https://github.com/LOKii1612/Work_india_Railway.git 

cd Work_India

2️⃣ Configure Environment Variables
Create a .env file in the root directory and add the following details:

PORT=3000

DATABASE_URL=mysql://username:password@localhost:3306/railway_db

JWT_SECRET=your_jwt_secret

API_KEY=your_admin_api_key


3️⃣ Start the Server

npm start
Server will run on: http://localhost:3000

📡 API Endpoints
==================

1️⃣ Register User

URL: POST /register

Payload:

json:
{
  "name": "John Doe",
  "password": "password123",
  "role": "user"
}

🔹 Response: 201 Created

{
  "message": "User registered successfully"
}

2️⃣ Login User

URL: POST /login

Payload:

{
  "name": "John Doe",
  "password": "password123"
}

🔹 Response: 200 OK

{
  "token": "your_jwt_token"
}

3️⃣ Add Train (Admin Only)

URL: POST /trains

Headers:

{
  "x-api-key": "your_admin_api_key"
}

Payload:

{
  "name": "Express Train",
  "source": "Hyderabad",
  "destination": "Bangalore",
  "total_seats": 50
}

🔹 Response: 201 Created

 {
  "message": "Train added successfully"
}

4️⃣ Check Train Availability

URL: GET /trains?source=Hyderabad&destination=Bangalore

🔹 Response: 200 OK

[
    {
        "id": 1,
        "name": "Express Train",
        "source": "Hyderabad",
        "destination": "Bangalore",
        "available_seats": 49
    }
]

5️⃣ Book a Seat

URL: POST /book

Headers:

{
  "Authorization": "Bearer your_jwt_token"
}

Payload:

{
  "train_id": 1
}

🔹 Response: 201 Created

{
  "message": "Seat booked successfully"
}

6️⃣ Get Booking Details

URL: GET /booking/:id

Headers:

{
  "Authorization": "Bearer your_jwt_token"
}

🔹 Response: 200 OK

{
    "id": 3,
    "user_id": 2,
    "train_id": 3,
    "booking_time": "present time"
}

📌 Assumptions:
----------------

1️⃣ Users cannot book more seats than available.

2️⃣ Race conditions are handled using transactions and locks.

3️⃣ Admin API routes are protected via an API key.

4️⃣ Users must authenticate via JWT for booking and retrieving booking details.

📢 Connect with Me
-------------------
💼 LinkedIn: https://www.linkedin.com/in/nuli-lokesh-nuli/

📧 Email: lokeshnuli16@gmail.com
