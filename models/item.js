const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class Item {
  constructor(name, description, category, price, numInStock, imageUrl, id) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.numInStock = numInStock;
    this.imageUrl = imageUrl;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  save() {
    // i will try to pass id here
    const db = getDb();
    let dbOp;
    if (this._id) {
      dbOp = db
        .collection("items")
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection("items").insertOne(this);
    }
    return dbOp
      .then(result => {
        //console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("items")
      .find()
      .toArray()
      .then(items => {
        return items;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findById(itemId) {
    const db = getDb();
    //console.log(itemId);
    return db
      .collection("items")
      .find({ _id: new mongodb.ObjectId(itemId) })
      .next()
      .then(item => {
        return item;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Item;
