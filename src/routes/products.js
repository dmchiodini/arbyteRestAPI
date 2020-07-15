const {Router} = require('express')
const router = new Router();
const controller = require('../controllers/products')

const routName = '/products'

router.get(routName, controller.getAll);

router.get(`${routName}/:id`, controller.getById);

router.post(routName, controller.create);

router.patch(`${routName}/:id`, controller.update)
    
router.delete(`${routName}/:id`, controller.del)

module.exports = router

