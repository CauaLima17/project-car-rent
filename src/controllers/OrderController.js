import OrderRepository from "../repositories/OrderRepository";

const OrderController = {
  async getAll(req, res) {
    try {
      orders = await OrderRepository.findAll();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({error: 'Erro na busca por pedidos: ' + err})
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