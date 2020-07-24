const knex = require('../../dataBase')
const Order = require('../models/Order')
const orders = require('../services/orders')
const tableName = 'orders'

/* SELECT * FROM orders */
const getAll = async () => {
    const orders = await knex(tableName)
    return orders.map(order => new Order(order));    
}

/* SELECT * FROM orders WHERE id = ? */
const getById = async (id) => {
   const [order] = await knex(tableName).where({id: id})
   return new Order(order);
}

/* INSERT INTO orders (product_id, ...) VALUES (?, ...) */
const create = async (order) => {
   const [id] = await knex(tableName).insert(order);
   return id;
};

/* UPDATE orders SET order_id=? ... WHERE id=? */
const update = (id, order) => knex(tableName).where({id: id}).update(order);

module.exports = {
    getAll,
    create,
    getById,
    update,
}