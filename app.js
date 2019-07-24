const path = require('path');
const express = require('express');

const mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) => {
    res.render("admin/add-item");
}) 

mongoConnect(() => {
    app.listen(3000);
})
