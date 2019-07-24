const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const mongoConnect = require("./util/database").mongoConnect;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  next();
  //res.render("admin/add-item");
});

app.use(adminRoutes);

mongoConnect(() => {
  app.listen(3000);
});
