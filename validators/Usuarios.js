const {check, body } = require('express-validator')

const usuarioDao = require('../models/Usuarios')

class Usuarios{

    static validacoes(){
        return[
            check('nome').isLength({ min: 5, max: 100 })
                .withMessage('Campo nome deve ter entre 5 e 100 caracteres'),
            check('email').isEmail()
                .withMessage('Deve ser um email valido'),
            check('cpf').isNumeric()
                .withMessage('Cpf deve ser apenas números'),
            check('sexo').isLength({ min: 1, max: 1 })
                .withMessage('Deve conter apenas um caracter (M ou F)'),
            check('senha').isLength({ min: 6, max: 10 })
                .withMessage('A senha deve ter entre 6 e 10 caracteres'),
            body('email').custom(email => {
                return usuarioDao.buscarPorEmail(email)
                    .then(retorno => {
                        if(retorno){
                            return Promise.reject('Email já cadastrado')
                        }
                    })
            })
        ]
    }
}

module.exports = Usuarios