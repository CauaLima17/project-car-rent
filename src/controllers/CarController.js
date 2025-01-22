import CarRepository from "../repositories/CarRepository.js";

const CarController = {
    async getAll(req, res) {
        try {
            const cars = await CarRepository.findAll()
            res.status(200).json(cars);
        } catch (err) {
            res.status(500).json({ error: 'Erro na busca de carros: ' + err});
        }
    }
}

export default CarController;