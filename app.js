//imports
const dotenv = require('dotenv').config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const mongoConnect = require("./util/database").mongoConnect;

// app declaration
const app = express();

// view engine
app.set("view engine", "ejs");
app.set("views", "views");

// routes import
const adminRoutes = require("./routes/admin");

// parser and static uses
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// for testing purposes
app.use((req, res, next) => {
  next();
  //res.render("admin/add-item");
});

// usage of routes
app.use(adminRoutes);

// connection to the database + starting server
mongoConnect(() => {
  app.listen(process.env.PORT);
});
