const {Router} =require('express');
const { getProducts, createProduct } = require('../handler/handlerProduct');


const routerProducts = Router();

routerProducts
.get('/', getProducts)
.post('/', createProduct)


module.exports = routerProducts;
