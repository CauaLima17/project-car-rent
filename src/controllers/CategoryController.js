import CategoryRepository from "../repositories/CategoryRepository.js";

const CategoryController = {
  async getAll(req, res){
    try {
      const result = await CategoryRepository.findAll();
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({ error: 'Erro na busca de categorias: ' + error })
    }
  },

  async create(req, res){
    const data = req.body
    try {
      await CategoryRepository.create(data)
      return res.status(200).json({ message: 'Categoria criada com sucesso'  })
    } catch (err) {
      return res.status(500).json({ error: 'Erro na criação de categoria: ' + err })
    }
  }
}

export default CategoryController