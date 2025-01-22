import Car from "../models/car.js";
import DBInterface from "../config/DBInterface.js";

const CarRepository = {
    async findAll(){
        const rows = await DBInterface.query("SELECT * FROM cars")
        return rows.map(row => new Car(row.id, row.is_rented, row.brand, row.model, row.category_id, row.user_id));
    }
}

export default CarRepository;