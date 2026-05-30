const Product = require("../models/products");

exports.getAddProduct = (req, res) => {
  res.render("add-product", { title: "Add Product" });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};
exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render("shop", { prods: products, title: "My shop" });
    });
};
