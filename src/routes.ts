import { Router } from "express";

import CarController from './controllers/CarController'


const routes = Router()

routes.get('/cars', CarController.index) // Listar
routes.post('/car', CarController.create) // Cadastar
routes.put('/car/:id', CarController.update) // Editar
routes.delete('/car/:id', CarController.delete) // Deletar

export default routes