import { Schema, model, Document } from "mongoose";


interface CarInterface extends Document {
    marca: string,
    modelo: string,
    versao: string,
    ano: number,
    quilometragem: number,
    tipoCambio: string,
    precoVenda: number
}




const CarSchema = new Schema({
    marca: String,
    modelo: String,
    versao: String,
    ano: Number,
    quilometragem: Number,
    tipoCambio: String,
    precoVenda: Number

},
    {
        timestamps: true

    })

export default model<CarInterface>('Car', CarSchema)