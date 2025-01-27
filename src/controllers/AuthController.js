import UserRepository from "../repositories/UserRepository.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const AuthController = {
    async login(req, res) {
      try {
        const data = req.body;
        const user = await UserRepository.findByEmail(data.email);
        if (user.length === 0) {
          return res.status(404).json({ error: "Usuário não encontrado." })
        }
        
        const passwordMatch = await bcrypt.compare(data.password, user[0].getPasswordHash());
        
        if (!passwordMatch) {
          return res.status(400).json({ error: "Senha incorreta." });
        }

        const token = jwt.sign({ id: user[0].getId(), username: user[0].getName(), email: user[0].getEmail() }, process.env.TOKEN_KEY || 'JWT-API-KEY-HERE', {expiresIn: '1h'})
        return res.status(200).json(token);
        
      } catch (error) {
        return res.status(500).json({ error: "ERR-Login: " + error });
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

export default AuthController;