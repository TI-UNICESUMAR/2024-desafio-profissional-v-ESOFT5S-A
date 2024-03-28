import { Router } from "express";
import { UserRepository } from "../repository/user.repository";
import { UserService } from "../service/user.service";
import { UserController } from "../controller/user.controller";
import ValidationRequest from "../middlewares/validation.request";
import { UpdateUserSchema } from "../dtos/update-user.dto";
import { LoginUserSchema } from "../dtos/login-user.dto";
import { CreateUserSchema } from "../dtos/create-user.dto";

const userRoutes = Router()

const userRepository: UserRepository = new UserRepository();
const userService: UserService = new UserService(userRepository);
const userController: UserController = new UserController(userService);

userRoutes.post('', (req, res, next) => ValidationRequest.body(req, res, next, CreateUserSchema), userController.create.bind(userController))
userRoutes.post('/auth', (req, res, next) => ValidationRequest.body(req, res, next, LoginUserSchema), userController.auth.bind(userController))
userRoutes.get('/:id', ValidationRequest.paramsId, userController.findById.bind(userController))
userRoutes.get('', userController.findAll.bind(userController))
userRoutes.put('/:id', ValidationRequest.paramsId, (req, res, next) => ValidationRequest.body(req, res, next, UpdateUserSchema), userController.update.bind(userController))
userRoutes.delete('/:id', ValidationRequest.paramsId, userController.delete.bind(userController))

export { userRoutes }