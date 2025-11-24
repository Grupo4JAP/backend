const express = require("express");
const router = express.Router();
const categories = require("../data/cats/cat.json");

router.get("/", (req, res) => { 
    res.json(categories);
});

module.exports = router;
