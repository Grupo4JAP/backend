const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/:id", (req, res) => {
    const file = req.params.id + ".json";
    const filePath = path.join(__dirname, "../data/products_comments", file);

    if (!fs.existsSync(filePath)) {
        return res.json([]); // algunos están vacíos, por eso devolvemos []
    }

    res.json(require(filePath));
});

module.exports = router;
