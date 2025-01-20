import { query } from "express";
import connection from "./DBConnect.js";

const DBInterface = {
    async query(sql, params){
        try {
            const results = await connection.query(sql, params);
        }catch(err){
            console.error("Erro no banco de dados: ", err.message);
            throw err;
        };
    }
};

export default DBInterface;