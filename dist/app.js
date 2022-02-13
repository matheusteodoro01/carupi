"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('dotenv').config()
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);








class App {

    



     constructor() {
        this.express = _express2.default.call(void 0, )
        this.middlewares()
        this.database()
        this.routes()
    }


     middlewares() {
        this.express.use(_cors2.default.call(void 0, ))
        this.express.use(_express2.default.json())
    }

     database() {
        _mongoose2.default.connect(process.env.DATABASE_URL)


        .then(data => {
            console.log("√ Mogo DB conectado")
        })
        .catch(error => {
            console.log(`Erro ao conectar Mongo em ${process.env.DATABASE_URL}`)
        })
        useNewUrlParser: true


    }

     routes() {
        this.express.use(_routes2.default)


    }


}

exports. default = new App().express