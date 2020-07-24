const moment = require('moment');
const utcnow = moment().utc().format();

module.exports = function Order({
    id, 
    product_id, 
    quantity,
    value, 
    created_at = utcnow, 
    updated_at = utcnow
} = {}) {
    this.id = id;
    this.product_id = product_id;
    this.quantity = quantity;
    this.value = value;
    this.created_at = created_at;
    this.updated_at = updated_at ;
}