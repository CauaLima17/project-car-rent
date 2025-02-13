import DBInterface from '../config/DBInterface.js';
import Order from '../models/Order.js';

const OrderRepository = {
  async findAll() {
    const rows = await DBInterface.query("SELECT * FROM orders");
    return rows.map((row => new Order(row.id, row.car_id, row.user_id, row.payment_method, row.pick_up_location, row.drop_off_location, row.pick_up_date, row.row.drop_off_date, row.order_description)));
  },
  async create(order) {
    const result = await DBInterface.query("INSERT INTO orders (car_id, user_id, payment_method, pick_up_location, drop_off_location, pick_up_date, drop_off_date, order_description) VALUES (?,?,?,?,?,?,?,?)", [order.car_id, order.user_id, order.payment_method, order.pick_up_location, order.drop_off_location, order.pick_up_date, order.drop_off_date, order.order_description])
    order.id = result.insertId;
    return
  }
}

export default OrderRepository;