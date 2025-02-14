import CarRepository from "../repositories/CarRepository.js";

const CarController = {
    async getAll(req, res) {
        try {
            const cars = await CarRepository.findAll()
            return res.status(200).json(cars);
        } catch (err) {
            return res.status(500).json({ error: 'Erro na busca de carros: ' + err});
        }
    },

    async getById(req, res) {
        try {
            const id = req.params.id
            const car = await CarRepository.findById(id)
            return res.status(200).json(car)
        } catch (err) {
            return res.status(500).json({ error: 'Erro na busca por carro: ' + err })
        }
    },

    async create(req, res) {
        const data = req.body
        try {
            await CarRepository.create(data)
            return res.status(200).json({ message: 'Carro criado com sucesso' });
        } catch (err) {
            return res.status(500).json({ error: 'Erro na criação de carros: ' + err })
        }
    }
}

export default CarController;