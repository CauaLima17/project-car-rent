import EmployeeController from '../controllers/EmployeeController.js';
import express from 'express';

const EmployeeRouter = express.Router();

EmployeeRouter.get('/', EmployeeController.getAll);

export default EmployeeRouter;