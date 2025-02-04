import OrderRepository from "../repositories/OrderRepository";

const OrderController = {
  async getAll(req, res) {
    try {
      orders = await OrderRepository.findAll();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({error: 'Erro na busca por pedidos: ' + err})
    }
  }
}

export default OrderController;