const {Router} =require('express');
const { getProducts } = require('../handler/handlerProduct');


const routerProducts = Router();

routerProducts.get('/', getProducts)

module.exports = routerProducts;
