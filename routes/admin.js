const path = require('path');
const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-item', adminController.getAddItem);

router.post('/add-item', adminController.postAddItem);

router.get('/edit-item/:itemId', adminController.getEditItem)

router.post('/edit-item', adminController.postEditItem);

router.get('/details/:itemId', adminController.getDetails);

router.get('/delete-item/:itemId', adminController.getDeleteItem);

module.exports = router;