const Item = require('../models/item');

exports.getAddItem = (req, res, next) => {
    res.render("admin/add-item");
}

exports.postAddItem = (req, res, next) => {

}

exports.getIndex = (req, res, next) => {
    res.render('admin/items');
}