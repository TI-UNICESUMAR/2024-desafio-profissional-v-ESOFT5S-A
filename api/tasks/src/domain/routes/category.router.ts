import { Router } from "express";
import { CategoryRepository } from "../repository/category.repository";
import { CategoryService } from "../service/category.service";
import { CategoryController } from "../controller/category.controller";

const categoryRoutes = Router()

const categoryRepository: CategoryRepository = new CategoryRepository();
const categoryService: CategoryService = new CategoryService(categoryRepository);
const categoryController: CategoryController = new CategoryController(categoryService);

categoryRoutes.post('', categoryController.create.bind(categoryController))
categoryRoutes.get('/:id', categoryController.findById.bind(categoryController))
categoryRoutes.get('', categoryController.findAll.bind(categoryController))
categoryRoutes.put('/:id', categoryController.update.bind(categoryController))
categoryRoutes.delete('/:id', categoryController.delete.bind(categoryController))

export { categoryRoutes }
