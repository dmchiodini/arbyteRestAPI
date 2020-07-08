const { Router } = require('express');
const router = new Router();

const routeName = "/orders";

//Lista todos os pedido
router.get(routeName, (req, res) => {
    res.json([{ message: "Vai retornar os pedido"}])
});

//Pega os dados de um pedido
router.get(`${routeName}/:id`, (req, res) => {
    res.json({
        message: "Vai retornar os dados de um pedido dado o id",
        id: req.params.id,
    });
});

//Cria um pedido
router.post(routeName, (req, res) => {
    const order = {
        id_product: req.body.id_product,
        amount: req.body.amount
    }
    res.status(201).json({
        message: 'O pedido foi criado',
        createdOrder: order
    });
});

//Edita os dados de um pedido
router.patch(`${routeName}/:id`, (req, res) => {
    res.json({
        message: "Vai editar os dados de um pedido dado um id",
        id: req.params.id,
    });
});

//Deleta um pedido
router.delete(`${routeName}/:id`, (req, res) => res.status(204).end());

module.exports = router;
