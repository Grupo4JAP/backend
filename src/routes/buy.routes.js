const express = require("express");
const router = express.Router();
const buy = require("../data/cart/buy.json");

router.post("/", (req, res) => {
    return res.json(buy);
});

module.exports = router;
