const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const db = require("../db");

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    // buscar usuario
    const [rows] = await db.query(
        "SELECT * FROM usuario WHERE email = ?",
        [email]
    );

    if (!rows.length) {
        return res.status(401).json({ message: "Email o contraseña incorrectos" });
    }

    // verificar contraseña
    const user = rows[0];

    if (user.password_hash !== password) { 
        return res.status(401).json({ message: "Email o contraseña incorrectos" });
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        "clave_secreta",
        { expiresIn: "1h" }
    );

    res.json({ token });
});

module.exports = router;
