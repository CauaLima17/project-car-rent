import DBInterface from '../config/DBInterface.js';
import Order from '../models/Order.js';

const OrderRepository = {
  async findAll() {
    rows = await DBInterface.query("SELECT * FROM orders");
    return rows.map((row => new Order(row.id, row.car_id, row.user_id, row.payment_method, row.pick_up_location, row.drop_off_location, row.pick_up_date, row.row.drop_off_date, row.order_description)));
  }
}

export default OrderRepository;