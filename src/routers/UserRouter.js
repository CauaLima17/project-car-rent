import express from 'express';
import UserController from '../controllers/UserController.js';

const UserRouter = express.Router();

UserRouter.get('/', UserController.getAll);
UserRouter.get('/:id', UserController.getById);
UserRouter.post('/', UserController.register);

export default UserRouter;