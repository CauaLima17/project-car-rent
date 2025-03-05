import Car from "../models/Car.js";
import Category from '../models/category.js'
import DBInterface from "../config/DBInterface.js";

const CarRepository = {
    async findAll(){
        const rows = await DBInterface.query("SELECT cars.*, categories.name AS category_name, categories.daily_rate AS category_daily_rate FROM cars JOIN categories ON cars.category_id = categories.id")
        return rows.map(row => {
            const category = new Category(
                row.category_id, 
                row.category_name, 
                row.category_daily_rate
            )
            return new Car(
                row.id,
                row.user_id,
                row.car_img,
                row.brand,
                row.model,
                row.status,
                category,
                row.description
            );
        });
    },

    async findById(id){
        const rows = await DBInterface.query("SELECT cars.*, categories.name AS category_name, categories.daily_rate AS category_daily_rate FROM cars JOIN categories ON cars.category_id = categories.id WHERE cars.id = (?) ", [id])
        return rows.map(row => {
            const category = new Category(
                row.category_id, 
                row.category_name, 
                row.category_daily_rate
            )
            return new Car(
                row.id,
                row.user_id,
                row.car_img,
                row.brand,
                row.model,
                row.status,
                category,
                row.description
            );
        });
    },

    async findByUserId(id){
        const rows = await DBInterface.query('SELECT cars.*, categories.name AS category_name, categories.daily_rate AS category_daily_rate FROM cars JOIN categories ON cars.category_id = categories.id WHERE cars.user_id = (?) ', [id])
        return rows.map(row => {
            const category = new Category(
                row.category_id, 
                row.category_name, 
                row.category_daily_rate
            )
            return new Car(
                row.id,
                row.user_id,
                row.car_img,
                row.brand,
                row.model,
                row.status,
                category,
                row.description
            );
        });
    },

    async updateCar(id, updates, fields){
        await DBInterface.query(`UPDATE cars SET ${fields.join(', ')} WHERE id = ?`, [...updates, id])
        return
    },

    async create(car) {
        const result = await DBInterface.query('INSERT INTO cars (user_id, car_img, brand, model, status, category_id, description) VALUES (?, ?, ?, ?, ?, ?, ?)', [car.user_id, car.car_img, car.brand, car.model, car.status, car.category_id, car.description])
        car.id = result.insertId
        return
    }
}

export default CarRepository;