import User from "../models/User.js";
import DBInterface from "../config/DBInterface.js";

const UserRepository = {
    async findAll() {
        const rows = await DBInterface.query('SELECT * FROM users');
        return rows.map((row => new User(row.id, row.name, row.email, row.password_hash)));
    }
}