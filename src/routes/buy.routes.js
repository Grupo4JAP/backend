const express = require("express");
const router = express.Router();
const buy = require("../data/cart/buy.json");

router.get("/", (req, res) => {
    res.json(buy);
});

module.exports = router;
