// Imports ......
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/errors");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

// Modules ...

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes.routes);
app.use("/", shopRoutes);
app.use(errorController.get404);
   
   
app.listen(3000);                               