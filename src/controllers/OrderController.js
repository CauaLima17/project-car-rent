import CarRepository from "../repositories/CarRepository.js";
import OrderRepository from "../repositories/OrderRepository.js";

const OrderController = {
  async getAll(req, res) {
    try {
      const orders = await OrderRepository.findAll();
      return res.status(200).json(orders);
    } catch (err) {
      return res.status(500).json({error: 'Erro na busca por pedidos: ' + err})
    }
  },
  async create(req, res) {
    const data = req.body;
    try {
      await OrderRepository.create(data)
      return res.status(200).json({message: 'Pedido criado com sucesso'});
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao criar o pedido: ' + err })
    }
  }
}

export default OrderController;