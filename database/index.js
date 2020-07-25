const knex = require('./node_modules/knex');
const config = require('../knexfile');

const nodeEnv = process.env.NODE_ENV;

module.exports = knex(config[nodeEnv]);