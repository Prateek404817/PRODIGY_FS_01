CREATE DATABASE authentication_system;
USE authentication_system;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255)
);

SELECT * FROM users;
