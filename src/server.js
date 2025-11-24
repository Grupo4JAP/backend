const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Rutas que usan JSON
app.use("/categories", require("./routes/categories.routes"));
app.use("/categories_products", require("./routes/categories_products.routes"));
app.use("/products", require("./routes/products.routes"));
app.use("/products_comments", require("./routes/products_comments.routes"));
app.use("/user_cart", require("./routes/user_cart.routes"));
app.use("/cart/buy", require("./routes/buy.routes"));
app.use("/sell", require("./routes/sell.routes"));

// Rutas que usan BD
app.use("/login", require("./routes/login.routes"));
app.use("/register", require("./routes/register.routes")); // si querés
// app.use("/cart", require("./routes/cart.routes")); // si querés BD aquí

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
