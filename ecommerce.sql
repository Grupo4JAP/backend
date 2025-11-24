DROP DATABASE IF EXISTS ecommerce;
CREATE DATABASE ecommerce;
USE ecommerce;

-- ============================
-- TABLA CATEGORY (categories)
-- ============================
CREATE TABLE category (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  imgSrc VARCHAR(255),
  productCount INT DEFAULT 0
);

-- ============================
-- TABLA PRODUCT (products)
-- ============================
CREATE TABLE product (
  id INT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  cost DECIMAL(10,2) NOT NULL,
  currency VARCHAR(10) NOT NULL,
  soldCount INT DEFAULT 0,
  image VARCHAR(255),
  categoryId INT,
  FOREIGN KEY (categoryId) REFERENCES category(id)
);

-- ============================
-- TABLA PRODUCT IMAGES
-- ============================
CREATE TABLE product_images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  productId INT NOT NULL,
  src VARCHAR(255) NOT NULL,
  description TEXT,
  orderIndex INT DEFAULT 0,
  FOREIGN KEY (productId) REFERENCES product(id)
);

-- ============================
-- TABLA USERS (user)
-- ============================
CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  lastname VARCHAR(100),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  address VARCHAR(255),
  phone VARCHAR(20)
);

-- ============================
-- TABLA CART
-- ============================
CREATE TABLE cart (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES user(id)
);

-- ============================
-- TABLA CART_ITEMS
-- ============================
CREATE TABLE cart_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cartId INT NOT NULL,
  productId INT NOT NULL,
  count INT NOT NULL DEFAULT 1,
  unitCost DECIMAL(10,2) NOT NULL,
  subtotal DECIMAL(10,2) GENERATED ALWAYS AS (count * unitCost) STORED,
  FOREIGN KEY (cartId) REFERENCES cart(id),
  FOREIGN KEY (productId) REFERENCES product(id)
);

-- ============================
-- TABLA ORDERS
-- ============================
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total DECIMAL(12,2),
  status VARCHAR(50),
  FOREIGN KEY (userId) REFERENCES user(id)
);

-- ============================
-- TABLA ORDER ITEMS
-- ============================
CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  orderId INT NOT NULL,
  productId INT NOT NULL,
  quantity INT NOT NULL,
  unitCost DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (orderId) REFERENCES orders(id),
  FOREIGN KEY (productId) REFERENCES product(id)
);

