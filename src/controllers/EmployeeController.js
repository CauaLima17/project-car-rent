import EmployeeRepository from "../repositories/EmployeeRepository.js";

const EmployeeController = {
    async getAll(req, res) {
        try {
            const employees = await EmployeeRepository.findAll()
            return res.status(200).json(employees);
        } catch (err) {
            return res.status(500).json({ error: 'Erro na busca de funcionários: ' + err});
        }
    }
}

export default EmployeeController;