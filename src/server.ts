import app from './app'



const PORT = process.env.PORT || 3333; //Configuração para deploy no heroku 

app.listen(PORT, () => {
    console.log(`√ Express rodando na porta: ${PORT}`)
})
