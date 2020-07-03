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
    res.status(201).json({
        message: 'Vai criar um pedido',
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
