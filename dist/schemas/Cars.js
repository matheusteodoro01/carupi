"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');















const CarSchema = new (0, _mongoose.Schema)({
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

exports. default = _mongoose.model('Car', CarSchema)