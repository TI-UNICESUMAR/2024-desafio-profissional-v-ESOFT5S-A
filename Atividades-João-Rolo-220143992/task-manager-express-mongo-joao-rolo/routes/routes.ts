import { Router } from 'express'
import userController from '../controller/user-controller'
import taskController from '../controller/task-controller'
import categoryController from '../controller/category-controller'

const routes = Router()
routes.post('/user', userController.create)
routes.get('/user/:id', userController.findByID)
routes.post('/task', taskController.createTask)
routes.post('/category', categoryController.create.bind(categoryController))
routes.get('/login', userController.userLogin.bind(userController))
routes.get('/task-detail/:id',taskController.findById)



export {
    routes
}