const {Router} =require('express');
const { getProducts, createProduct, searchId } = require('../handler/handlerProduct');


const routerProducts = Router();

routerProducts
.get('/', getProducts)
.get('/:id', searchId)
.post('/', createProduct)


module.exports = routerProducts;
