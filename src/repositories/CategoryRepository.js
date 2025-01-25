import Category from "../models/category.js";
import DBInterface from "../config/DBInterface.js";

const CategoryRepository = {

    async findAll() {
        const rows = await DBInterface.query("SELECT * FROM categories");
        return rows.map(row => new Category(row.id,row.name,row.daily_rate))
    }
} 

export default CategoryRepository