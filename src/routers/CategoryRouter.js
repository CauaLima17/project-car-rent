import express from 'express';
import CategoryController from '../controllers/CategoryController.js';

const CategoryRouter = express.Router();

CategoryRouter.get('/', CategoryController.getAll);
CategoryRouter.post('/', CategoryController.create)

export default CategoryRouter