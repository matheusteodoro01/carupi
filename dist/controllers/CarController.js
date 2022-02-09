"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _Cars = require('../schemas/Cars'); var _Cars2 = _interopRequireDefault(_Cars);






class CarController {

     async index(req, res) {
        await _Cars2.default.find()
            .then(data => {
                return res.json(data)
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })

        return res.status(500)

    }

     async create(req, res) {

        await _Cars2.default.create(req.body)
            .then(data => {
                return res.json(data)
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })

        return res.status(500)
    }

     async update(req, res) {


        const { id } = req.params;
        const { marca, modelo, versao, ano, quilometragem, tipoCambio, precoVenda } = req.body

        await _Cars2.default.findByIdAndUpdate(id, {
            marca: marca,
            modelo: modelo,
            versao: versao,
            ano: ano,
            quilometragem: quilometragem,
            tipoCambio: tipoCambio,
            precoVenda: precoVenda
        })
            .then(data => {
                return res.json(data)
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })

        return res.status(500)

    }

     async delete(req, res) {

        const { id } = req.params;

        await _Cars2.default.findByIdAndDelete(id)

            .then(data => {
                return res.json({ message: `${id} exluido com sucesso!` })
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })
        return res.status(500)

    }
}


exports. default = new CarController