const express = require("express");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = 5000;
const users = [];
const JWT_SECRET = "secret-key";

app.get("/", (request, response) => {
  response
    .status(200)
    .json({ message: "Shine like a brightest start there is." });
});

app.post("/", async (request, response) => {
  const { email, password } = request.body;
  const existingUser = users.find((u) => u.email == email);

  if (existingUser) {
    response.status(400).json({ message: "user already exist" });
  }

  const saltRounds = 10;
  const passwordHashed = await bcrypt.hash(password, saltRounds);

  const newUser = {
    id: users.length + 1,
    email,
    passwordHashed,
  };

  users.push(newUser);

  response.status(201).json({ data: users, message: "new user created!" });
});

app.get("/login-bcrypt", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "email and password cannot be empty" });
  }

  const user = users.find((u) => u.email == email);
  if (!user) {
    res.status(400).json({ message: "user does not exist" });
  }

  const isMatch = await bcrypt.compare(password, user.passwordHashed);

  if (!isMatch) {
    res.status(500).json({ message: "password is incorrect" });
  }

  res.status(200).json({ data: user, message: "user logged in" });
});

app.get("/login-uuid", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "email and password cannot be empty" });
  }

  const user = users.find((u) => u.email == email);
  if (!user) {
    res.status(400).json({ message: "user does not exist" });
  }

  const isMatch = await bcrypt.compare(password, user.passwordHashed);

  if (!isMatch) {
    res.status(500).json({ message: "password is incorrect" });
  }

  const token = uuidv4();
  user.simpleToken = token;

  res.status(200).json({ data: user, message: "login successful using token" });
});

app.get("/login-jwt", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "email and password cannot be empty" });
  }

  const user = users.find((u) => u.email == email);
  if (!user) {
    res.status(400).json({ message: "user does not exist" });
  }

  const isMatch = await bcrypt.compare(password, user.passwordHashed);

  if (!isMatch) {
    res.status(500).json({ message: "password is incorrect" });
  }

  const payload = {
    sub: user.id,
    email: user.email,
    role: "user",
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "3m" });

  res
    .status(200)
    .json({ data: user, message: "login successful using token", token });
});

app.get("/login-jwt-cookie", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "email and password cannot be empty" });
  }

  const user = users.find((u) => u.email == email);
  if (!user) {
    res.status(400).json({ message: "user does not exist" });
  }

  const isMatch = await bcrypt.compare(password, user.passwordHashed);

  if (!isMatch) {
    res.status(500).json({ message: "password is incorrect" });
  }

  const payload = {
    sub: user.id,
    email: user.email,
    role: "user",
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "15m" });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false, //Only for testing
    sameSite: "lax", //CSRF protection
    maxAge: 15 * 60 * 1000,
  });

  res.status(200).json({ message: "login successful token saved to cookie" });
});

// Middleware
function authWithCookie(req, res, next) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(400)
        .json({ message: "missing token: user is not logged in" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "invalid or token" });
  }
}

app.get("/profile-page", authWithCookie, (req, res)=>{
    res.status(200).json({message: "user can access this page"});
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
