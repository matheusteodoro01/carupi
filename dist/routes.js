"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _CarController = require('./controllers/CarController'); var _CarController2 = _interopRequireDefault(_CarController);


const routes = _express.Router.call(void 0, )

routes.get('/cars', _CarController2.default.index) // Listar
routes.post('/car', _CarController2.default.create) // Cadastar
routes.put('/car/:id', _CarController2.default.update) // Editar
routes.delete('/car/:id', _CarController2.default.delete) // Deletar

exports. default = routes