const {Router} =require('express');
const { getProducts } = require('../handler/handlerProduct');


const routerProducts = Router();
console.log(" llegue al router");
routerProducts.get('/', getProducts)

module.exports = routerProducts;
