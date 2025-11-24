const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { name, category, cost, currency, commission, count } = req.body;

    console.log("Publicación recibida:", req.body);

    res.json({
        status: "ok",
        message: "Producto publicado correctamente (fake backend)"
    });
});

module.exports = router;
