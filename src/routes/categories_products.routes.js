const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/:id", (req, res) => {
    const file = req.params.id + ".json";
    const filePath = path.join(__dirname, "../data/cats_products", file);

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: "Categoría no encontrada" });
    }

    res.json(require(filePath));
});

module.exports = router;
