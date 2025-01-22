import CarController from "../controllers/CarController.js";
import express from 'express';

const CarRouter = express.Router();

CarRouter.get('/', CarController.getAll);

export default CarRouter;