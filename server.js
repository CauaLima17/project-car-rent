import app from "./src/app.js";
import dotenv from 'dotenv';
import CarRouter from "./src/routers/CarRouter.js";

dotenv.config();

app.use('/carros', CarRouter)

app.listen(process.env.PORT, () => {
    console.log('Servidor conectado com sucesso')
});
