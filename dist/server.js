"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);



const PORT = process.env.PORT || 3333; //Configuração para deploy no heroku 

_app2.default.listen(PORT, () => {
    console.log(`√ Express rodando na porta : ${PORT}`)
})
