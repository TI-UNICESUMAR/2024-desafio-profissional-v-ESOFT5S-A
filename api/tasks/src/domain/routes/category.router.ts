import { Router } from "express";
import { CategoryRepository } from "../repository/category.repository";
import { CategoryService } from "../service/category.service";
import { CategoryController } from "../controller/category.controller";
import ValidationRequest from "../middlewares/validation.request";
import { CreateCategorySchema } from "../dtos/create-category.dto";
import { UpdateCategorySchema } from "../dtos/update-category.dto";

const categoryRoutes = Router()

const categoryRepository: CategoryRepository = new CategoryRepository();
const categoryService: CategoryService = new CategoryService(categoryRepository);
const categoryController: CategoryController = new CategoryController(categoryService);

categoryRoutes.post('', (req, res, next) => ValidationRequest.body(req, res, next, CreateCategorySchema), categoryController.create.bind(categoryController))
categoryRoutes.get('/:id', ValidationRequest.paramsId, categoryController.findById.bind(categoryController))
categoryRoutes.get('', categoryController.findAll.bind(categoryController))
categoryRoutes.put('/:id', ValidationRequest.paramsId, (req, res, next) => ValidationRequest.body(req, res, next, UpdateCategorySchema), categoryController.update.bind(categoryController))
categoryRoutes.delete('/:id', ValidationRequest.paramsId, categoryController.delete.bind(categoryController))
categoryRoutes.get('/user/:id', ValidationRequest.paramsId, categoryController.findAllByUser.bind(categoryController))

export { categoryRoutes }
