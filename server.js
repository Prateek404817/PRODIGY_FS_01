const express = require("express");
const mysql = require("mysql2");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false
}));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "prateek123",
    database: "authentication_system"
});

db.connect((error) => {
    if (error) {
        console.log("Database connection failed");
    } else {
        console.log("Connected to MySQL database");
    }
});

app.get("/about", (req, res) => {
    res.send("This is About Page");
});

app.get("/contact", (req, res) => {
    res.send("This is Contact Page");
});

app.post("/register", async (req, res) => {

    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

    db.query(sql, [username, email, hashedPassword], (error, result) => {

        if (error) {
            console.log(error);

            res.send("Error while registering user");
        } else {
            res.send("User registered successfully");
        }

    });

});

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (error, result) => {

        if (error) {

            console.log(error);
            res.send("Login error");

        } else {

            if (result.length > 0) {

                const user = result[0];

                const isMatch = await bcrypt.compare(password, user.password);

                if (isMatch) {

                    req.session.user = email;

                    res.redirect("/dashboard");

                } else {

                    res.send("Invalid email or password");

                }

            } else {

                res.send("Invalid email or password");

            }

        }

    });

});

app.get("/dashboard", (req, res) => {

    if (req.session.user) {

        res.sendFile(__dirname + "/views/dashboard.html");

    } else {

        res.send("Please login first");

    }

});

app.get("/logout", (req, res) => {

    req.session.destroy(() => {

        res.redirect("/");

    });

});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});