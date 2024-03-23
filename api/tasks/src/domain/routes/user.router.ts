import { Router } from "express";
import { UserRepository } from "../repository/user.repository";
import { UserService } from "../service/user.service";
import { UserController } from "../controller/user.controller";

const userRoutes = Router()

const userRepository: UserRepository = new UserRepository();
const userService: UserService = new UserService(userRepository);
const userController: UserController = new UserController(userService);

userRoutes.post('', userController.create.bind(userController))
userRoutes.get('/:id', userController.findById.bind(userController))
userRoutes.get('', userController.findAll.bind(userController))
userRoutes.put('/:id', userController.update.bind(userController))
userRoutes.delete('/:id', userController.delete.bind(userController))

export { userRoutes }