import OrderController from "../controllers/OrderController.js";
import express from 'express';

const OrderRouter = express.Router();

OrderRouter.get('/', OrderController.getAll);
OrderRouter.post('/', OrderController.create);

export default OrderRouter