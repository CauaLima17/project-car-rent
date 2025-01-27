import UserRepository from "../repositories/UserRepository.js";

const UserController = {
    async getAll(req, res) {
        try {
            const users = await UserRepository.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
}

export default UserController;