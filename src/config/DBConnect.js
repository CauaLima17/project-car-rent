import mysql from 'mysql';
import util from "util";

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'car_rent'
}

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.log("Erro na conexão com o banco: ", err.message);
    process.exit(1)
  }

  console.log("Erro na conexão com o banco: ", err.message);
});

connection.query = util.promisify(connection.query).bind(connection)

export default connection;