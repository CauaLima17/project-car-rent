import UserRepository from "../repositories/UserRepository.js";
import bcrypt from 'bcryptjs';

const UserController = {
    async getAll(req, res) {
        try {
            const users = await UserRepository.findAll();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ error: 'Erro na busca de usuários: ' + err })
        }
    },
    async getById(req, res) {
      const id = req.params.id
      try {
        const user = await UserRepository.findById(id)
        return res.status(200).json(user)
      } catch (error) {
        return res.status(500).json({ error: 'Erro na busca de usuário: ' + err })
      }
    },
    async register(req, res) {
        try {
          const data = req.body;
          const user = await UserRepository.findByEmail(data.email);
  
          if (user.length > 0) {
            return res.status(409).json({ error: "Email já cadastrado." });
          }
  
          const password_hash = await bcrypt.hash(data.password, 8);
          data.password_hash = password_hash;
  
          await UserRepository.create(data);
          return res.status(200).json({ message: "Usuário criado com sucesso." });
        } catch (error) {
          return res.status(500).json({ error: "ERR-Registro: " + error });
        }
      }
}

export default UserController;