# User Authentication System – Prodigy InfoTech Internship Task 01

This is a simple full-stack authentication system project created using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL.
The project was made as Task 01 for the Prodigy InfoTech Full Stack Web Development Internship.

---

# Features

- User Registration
- User Login
- Password Encryption using bcryptjs
- Session-based Authentication
- Protected Dashboard Page
- Logout Functionality
- MySQL Database Connection
- Simple and Responsive UI

---

# Technologies Used

## Frontend

* HTML
* CSS
* JavaScript

## Backend

* Node.js
* Express.js

## Database

* MySQL

## Packages Used

* express
* mysql2
* express-session
* bcryptjs

---

# Project Structure

Authentication_Project/<br>
|<br>
├── public/<br>
│   ├── index.html<br>
│   ├── register.html<br>
│   ├── style.css<br>
│<br>
├── views/<br>
│   └── dashboard.html<br>
│<br>
├── server.js<br>
├── package.json<br>
└── package-lock.json<br>

---

# How to Run the Project

## Step 1

Open the project folder in VS Code.

## Step 2

Open terminal and run:

npm install

## Step 3

Start the server:

node server.js

## Step 4

Open browser and visit:

http://localhost:3000

---

# Database Setup

## Create Database

CREATE DATABASE authentication_system;

## Use Database

USE authentication_system;

## Create Users Table

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(100),
email VARCHAR(100),
password VARCHAR(255)
);

---

# Authentication Flow

## Registration

* User enters username, email, and password
* Password gets hashed using bcryptjs
* Data gets stored in MySQL database

## Login

* User enters email and password
* Backend checks credentials
* Session gets created after successful login

## Dashboard

* Dashboard route is protected using sessions
* Only logged-in users can access dashboard

## Logout

* Session gets destroyed
* User gets redirected to login page

---

# 📸 Project Pages

* Login Page
* Register Page
* Dashboard Page

---

# Testing

## Register New User

Create a new account using register page.

## Login

Login using registered email and password.

## Dashboard Protection

Try opening:

http://localhost:3000/dashboard

without login.

The system blocks unauthorized access.

---

# Security Features

* Password hashing using bcryptjs
* Session-based authentication
* Protected routes
* MySQL database integration

---

# Author

-Prateek Kumar
Prodigy InfoTech Full Stack Web Development Internship – Task 01

---

# Acknowledgement

Thanks to Prodigy InfoTech for providing this internship opportunity to improve my full-stack web development skills.
