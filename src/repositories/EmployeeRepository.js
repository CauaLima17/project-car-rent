import Employee from "../models/Employee.js";
import DBInterface from "../config/DBInterface.js";

const EmployeeRepository = {

    async findAll() {
        const rows = await DBInterface.query("SELECT * FROM employee");
        return rows.map(row => new Employee(row.id, row.name, row.email, row.tel, row.sector))
    }
} 

export default EmployeeRepository