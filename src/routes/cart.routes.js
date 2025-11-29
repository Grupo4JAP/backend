const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// Guardar carrito (Protected)
router.post("/", auth, (req, res) => {
  const { items } = req.body;

  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ message: "Formato inválido." });
  }

  return res.json({
    message: "Carrito guardado correctamente",
    itemsGuardados: items
  });
});

module.exports = router;
