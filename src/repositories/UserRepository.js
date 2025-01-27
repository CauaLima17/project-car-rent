import User from "../models/User.js";
import DBInterface from "../config/DBInterface.js";

const UserRepository = {
    async findAll() {
        const rows = await DBInterface.query('SELECT * FROM users');
        return rows.map((row => new User(row.id, row.name, row.email, row.password_hash)));
    },
    async findAllById(id) {
        const rows = await DBInterface.query('SELECT * FROM users WHERE id = ?', [id]);
        return rows.map((row) => new User(row.id, row.name, row.email, row.password_hash));
    },
    async findByEmail(email) {
        const rows = await DBInterface.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows.map((row) => new User(row.id, row.name, row.email, row.password_hash));
    },
    async create(user) {
        const result = await DBInterface.query('INSERT ON TABLE users (id, email, password_hash) VALUES (?,?,?)', [user.id, user.email, user.password_hash]);
        user.id = result.insertId;
        return
    }
}

export default UserRepository;