import Car from "../models/Car.js";
import DBInterface from "../config/DBInterface.js";

const CarRepository = {
    async findAll(){
        const rows = await DBInterface.query("SELECT * FROM cars")
        return rows.map(row => new Car(row.id, row.user_id, row.car_img, row.brand, row.model, row.status, row.category_id));
    }
}

export default CarRepository;