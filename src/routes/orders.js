const {Router} = require('express')
const router = new Router();
const controller = require('../controllers/orders')

const routeName = '/orders';


router.get(routeName, controller.getAll);

router.get(`${routeName}/:id`, controller.getById);

router.post(routeName, controller.create);

router.patch(`${routeName}/:id`, controller.update)

//delete um produto
router.delete(`${routeName}/:id`, (req,res) => res.status(204).end())

module.exports = router;