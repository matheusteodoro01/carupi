require('dotenv').config()
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';


declare var process: {
    env: {
        DATABASE_URL: string
    }
}

class App {

    public express: express.Application



    public constructor() {
        this.express = express()
        this.middlewares()
        this.database()
        this.routes()
    }


    private middlewares(): void {
        this.express.use(cors())
        this.express.use(express.json())
    }

    private database(): void {
        mongoose.connect(process.env.DATABASE_URL)


        .then(data => {
            console.log("√ Mogo DB conectado")
        })
        .catch(error => {
            console.log(`Erro ao conectar Mongo em ${process.env.DATABASE_URL}`)
        })
        useNewUrlParser: true


    }

    private routes(): void {
        this.express.use(routes)


    }


}

export default new App().express