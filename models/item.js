const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class Item {
  constructor(name, description, category, price, numInStock, imageUrl) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.numInStock = numInStock;
    this.imageUrl = imageUrl;
  }

  save() {
    db = getDb();
    db.collection("items")
      .insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
