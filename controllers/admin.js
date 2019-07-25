const Item = require("../models/item");

// add-item controllers
exports.getAddItem = (req, res, next) => {
  res.render("admin/add-item", {
    editing: false
  });
};

exports.postAddItem = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const category = req.body.category;
  const price = req.body.price;
  const numInStock = req.body.numInStock;
  const imageUrl = req.body.imageUrl;
  const item = new Item(
    name,
    description,
    category,
    price,
    numInStock,
    imageUrl
  );

  item
    .save()
    .then(result => {
      res.redirect("/");
    })
    .catch(err => console.log(err));
};
////

// edit item controllers
exports.getEditItem = (req, res, next) => {
  // edit item page
  const itemId = req.params.itemId;
  Item.findById(itemId)
    .then(item => {
      res.render("admin/add-item", {
        editing: true,
        item: item
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postEditItem = (req, res, next) => {
  const updatedName = req.body.name;
  const updatedDescription = req.body.description;
  const updatedCategory = req.body.category;
  const updatedPrice = req.body.price;
  const updatedNumInStock = req.body.numInStock;
  const updatedImageUrl = req.body.imageUrl;
  const itemId = req.body.itemId;
  const updatedItem = new Item(
    updatedName,
    updatedDescription,
    updatedCategory,
    updatedPrice,
    updatedNumInStock,
    updatedImageUrl,
    itemId
  );
  updatedItem
    .save()
    .then(result => {
      console.log("Updated product!");
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
    });
};
////

// front page controller
exports.getIndex = (req, res, next) => {
  Item.fetchAll()
    .then(items => {
      res.render("admin/items", {
        items: items
      });
    })
    .catch(err => console.log(err));
};
////

exports.getDetails = (req, res, next) => {
  const itemId = req.params.itemId;
  Item.findById(itemId)
    .then(item => {
      res.render("admin/details", {
        item: item
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getDeleteItem = (req, res, next) => {
  const itemId = req.params.itemId;
  Item.deleteById(itemId)
    .then(result => {
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
    });
};
