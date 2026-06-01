const Product = require("../models/products");

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/products-list", { prods: products, title: "My shop" });
  });
};

exports.getProduct = (req, res) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("shop/product-details", {
      product: product,
      title: "Product details",
    
    })
  });
};

exports.getIndex = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/products-list", { prods: products, title: "My shop" });
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", {
    title: "My cart",
  });
};
exports.getOrders = (req, res) => {
  res.render("shop/orders", {
    title: "My orders",
  });
};

exports.getCheckout = (req, res) => {
  res.render("shop/checkout", { title: "Checkout" });
};
