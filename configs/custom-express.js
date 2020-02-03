//importações
const express = require('express')
const consign = require('consign')
// const bodyParser = require('body-parser')

//evoca o express
const app = express()

customExpress = () => {

    //fala que a nossa aplicação apenas vão receber json 
    app.use(express.json())

    //estamos colocando todos os arquivos da pasta controller dentro da pasta app
    consign()
        .include('controllers')
        .include('models')
        .into(app)

    return app
}

module.exports = customExpress()


//estamos fazendo a requisição para os usuarios
//const usuarioController = require('./controllers/usuarios')

//estamos evocando o usuarioController passando o app
//usuarioController(app);