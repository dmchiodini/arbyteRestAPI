const { Router } = require('express');
const orders = require('./orders');
const products = require('./products');

const router = new Router();

router.use(orders);
router.use(products);

//Quando não encontrar rota, entra aqui:
router.use((req, res, next) => {
    const err = new Error('Não encontrado');
    err.statu = 404;
    next(err);
});


module.exports = router;