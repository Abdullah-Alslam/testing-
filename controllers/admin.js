const Product = require("../models/products");

exports.getAddProduct = (req, res) => {
  res.render("admin/add-product", { title: "Add Product" });
};

exports.postAddProduct = (req, res) => {
  const tiltile = req.body.title;
  const imageURL = req.body.imageURL;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(tiltile, imageURL, description, price);
  product.save();
  res.redirect("/");
};
exports.getProducts = (req, res) => { 
    Product.fetchAll((products) => {
    res.render("admin/products", { prods: products, title: "Admin Products" });
  });
}