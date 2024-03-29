const dotenv = require('dotenv').config();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    process.env.DBURI,
    { useNewUrlParser: true }
  )
    .then(client => {
        _db = client.db();
        console.log('Connected!');
        callback();
    })
    .catch(err => console.log(err));
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found.'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
