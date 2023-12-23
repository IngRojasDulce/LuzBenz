const {Router} =require('express');
const routerProducts = require('./routerProducts');

const router = Router();

router.use('/products', routerProducts)

module.exports = router;