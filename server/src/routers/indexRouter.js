const {Router} =require('express');
const routerProducts = require('./routerProducts');
const routerLoginAdmin = require('./routerLoginAdmin');

const router = Router();

router.use('/products', routerProducts)
router.use('/loginAdmin', routerLoginAdmin)

module.exports = router;