
const {Router} =require('express');
const { handlerSinginAdmin } = require('../handler/handlerSinginAdmin');

const routerLoginAdmin = Router();

routerLoginAdmin
.post('/', handlerSinginAdmin)



module.exports = routerLoginAdmin;
