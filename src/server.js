require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ===============================
// RUTAS QUE SIGUEN USANDO JSON
// ===============================
app.use("/categories", require("./routes/categories.routes"));
app.use("/categories_products", require("./routes/categories_products.routes"));
app.use("/products", require("./routes/products.routes"));
app.use("/products_comments", require("./routes/products_comments.routes"));
app.use("/user_cart", require("./routes/user_cart.routes"));
app.use("/cart/buy", require("./routes/buy.routes"));
app.use("/sell", require("./routes/sell.routes"));

// ===============================
// LOGIN con JSON + JWT
// ===============================
app.use("/login", require("./routes/login.routes"));
app.use("/register", require("./routes/register.routes")); 

// ===============================
// RUTAS CONECTADAS A BD
// ===============================
app.use("/cart", require("./routes/cart.routes")); 

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
