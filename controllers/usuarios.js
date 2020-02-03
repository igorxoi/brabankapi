//estamos colocando a função detro de uma variavel para conseguirmos exporta
const { check, validationResult } = require ('express-validator')
const UsuariosValid = require('../validators/Usuarios')

const usuarios = (app) => {   
    //rota que atende as requisições get
    app.get('/', (req, res) => {
        //se alguem bater na porta 300, enviamos isso
        res.send('Root rote')
    })

    app.get('/usuarios', (req, res) => {
        const usuarioDAO = app.models.Usuarios

        usuarioDAO.lista()
        .then(lista => {
            res.send(lista)
        })
        .catch(erro => {
            console.log(erro)
            res.status(500).send(erro)
        })
    })

    app.get('/usuarios/email/:email', (req, res) => {
        const email = req.params.email

        usuarioDAO = app.models.Usuarios

        usuarioDAO.buscarPorEmail(email)
            .then(retorno => {
                if(retorno){
                    res.send(retorno)
                }else{
                    res.status(404).send()
                }
                res.send(retorno)
            })
            .catch(erro => res.status(500).send(erro))
    })

    app.post('/usuarios', 
        //fazendo a validacao com o validationResult
            UsuariosValid.validacoes()
         ,(req, res) => {
        let usuario = req.body
        
        //validation retorna uma lista de erros
        const erros = validationResult(req)

        //vemos se a lista está vazia
        if(!erros.isEmpty()){
            res.status(400).send(erros)
            return
        }
        
        const usuarioDAO = app.models.Usuarios

        usuarioDAO.insere(usuario)
            .then(retorno => res.status(201).send(retorno))
            .catch(erro => {
                console.log(erro)
                res.status(500).send(erro)
            })
    })

}

//estamos importando a função
module.exports = usuarios