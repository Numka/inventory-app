const Item = require("../models/item");

exports.getAddItem = (req, res, next) => {
  res.render("admin/add-item");
};

exports.postAddItem = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const category = req.body.category;
  const price = req.body.price;
  const numberInStock = req.body.numberInStock;
  const imageUrl = req.body.imageUrl;
  const item = new Item(
    name,
    description,
    category,
    price,
    numberInStock,
    imageUrl
  );

  item
    .save()
    .then(result => {
      res.redirect("/");
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  res.render("admin/items");
};
