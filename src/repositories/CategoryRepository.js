import Category from "../models/category.js";
import DBInterface from "../config/DBInterface.js";

const CategoryRepository = {
    async findAll() {
        const rows = await DBInterface.query("SELECT * FROM categories");
        return rows.map(row => new Category(row.id, row.name, row.daily_rate))
    },

    async create(category) {
        const result = await DBInterface.query("INSERT INTO categories (name, daily_rate) VALUES (?, ?)", [category.name, category.daily_rate])
        category.id = result.insertId
        return
    }
} 

export default CategoryRepository