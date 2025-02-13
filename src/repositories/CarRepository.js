import Car from "../models/Car.js";
import DBInterface from "../config/DBInterface.js";

const CarRepository = {
    async findAll(){
        const rows = await DBInterface.query("SELECT * FROM cars")
        return rows.map(row => new Car(row.id, row.user_id, row.car_img, row.brand, row.model, row.status, row.category_id, row.description));
    },

    async create(car) {
        const result = await DBInterface.query('INSERT INTO cars (user_id, car_img, brand, model, status, category_id, description) VALUES (?, ?, ?, ?, ?, ?, ?)', [car.user_id, car.car_img, car.brand, car.model, car.status, car.category_id, car.description])
        car.id = result.insertId
        return
    }
}

export default CarRepository;