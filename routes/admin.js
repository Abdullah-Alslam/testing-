const path = require("path");
const express = require("express");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res) => {
  res.render("add-product", { title: "Add Product" });
});

router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  console.log(products[0].title);

  res.redirect("/");
});

exports.routes = router;
exports.products = products;
