// src/routes/register.routes.js
const express = require("express");
const router = express.Router();
const db = require("../db"); // tu conexión a MariaDB

router.post("/", async (req, res) => {
    const { email, password, nombre } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email y contraseña son obligatorios" });
    }

    try {
        // verificar si ya existe
        const [exists] = await db.query(
            "SELECT id FROM usuario WHERE email = ?",
            [email]
        );

        if (exists.length > 0) {
            return res.status(409).json({ message: "El usuario ya existe" });
        }

        // insertar usuario
        const [result] = await db.query(
            "INSERT INTO usuario (email, password_hash, nombre) VALUES (?, ?, ?)",
            [email, password, nombre || null]   // por ahora sin hash
        );

        res.status(201).json({
            message: "Usuario registrado correctamente",
            userId: result.insertId
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al registrar usuario" });
    }
});

module.exports = router;
