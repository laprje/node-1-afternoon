const express = require("express");
// const products = require('../products.json')
const import1 = require('./getProducts.js')
const import2 = require('./getProduct.js')

const products = require('../MOCK_DATA.json')

const app = express();
const port = 4000;

app.get('/api/products', import1.getProducts)

app.get('/api/product/:id', import2.getProduct)

app.listen(4000, () => console.log(`Listening on Port ${port}`))
