class Order {
  constructor(id, car_id, user_id, payment_method, pick_up_location, drop_off_location, pick_up_date, drop_off_date, order_description) {
      this._id = id;
      this._car_id = car_id;
      this._user_id = user_id;
      this._payment_method = payment_method;
      this._pick_up_location = pick_up_location;
      this._drop_off_location = drop_off_location;
      this._pick_up_date = pick_up_date;
      this._drop_off_date = drop_off_date;
      this._order_description = order_description;
  }

  getId() { return this._id; }
  getCar_id() { return this._car_id; }
  getUser_id() { return this._user_id; }
  getPayment_method() { return this._payment_method; }
  getPick_up_location() { return this._pick_up_location; }
  getDrop_off_location() { return this._drop_off_location; }
  getPick_up_date() { return this._pick_up_date; }
  getDrop_off_date() { return this._drop_off_date; }
  getOrder_description() { return this._order_description; }

  setId(value) { this._id = value; }
  setCar_id(value) { this._car_id = value; }
  setUser_id(value) { this._user_id = value; }
  setPayment_method(value) { this._payment_method = value; }
  setPick_up_location(value) { this._pick_up_location = value; }
  setDrop_off_location(value) { this._drop_off_location = value; }
  setPick_up_date(value) { this._pick_up_date = value; }
  setDrop_off_date(value) { this._drop_off_date = value; }
  setOrder_description(value) { this._order_description = value; }
}

export default Order;