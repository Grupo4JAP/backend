// src/routes/products.routes.js
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// GET /products/:id
router.get("/:id", (req, res) => {
    const { id } = req.params;

    const filePath = path.join(
        __dirname,
        `../data/products/${id}.json`
    );

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    const fileContent = JSON.parse(fs.readFileSync(filePath));
    res.json(fileContent);
});

module.exports = router;
