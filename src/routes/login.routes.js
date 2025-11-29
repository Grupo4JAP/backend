const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // si corres fuera de Docker

const users = require("../data/usuarios.json");

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    token,
    id: user.id,
    email: user.email,
    name: user.name
  });
});

module.exports = router;
