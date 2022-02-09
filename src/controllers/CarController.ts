import { Request, Response } from "express";
import Car from '../schemas/Cars'






class CarController {

    public async index(req: Request, res: Response): Promise<Response> {
        await Car.find()
            .then(data => {
                return res.json(data)
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })

        return res.status(500)

    }

    public async create(req: Request, res: Response): Promise<Response> {

        await Car.create(req.body)
            .then(data => {
                return res.json(data)
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })

        return res.status(500)
    }

    public async update(req: Request, res: Response): Promise<Response> {


        const { id } = req.params;
        const { marca, modelo, versao, ano, quilometragem, tipoCambio, precoVenda } = req.body

        await Car.findByIdAndUpdate(id, {
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

    public async delete(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        await Car.findByIdAndDelete(id)

            .then(data => {
                return res.json({ message: `${id} exluido com sucesso!` })
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })
        return res.status(500)

    }
}


export default new CarController