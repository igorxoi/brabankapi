const conexao = require('../configs/conexao-db')

class Usuarios {

    lista(){
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM usuario'

            conexao.query(sql, (erro, retorno) => {
                if(erro){
                    reject('Erro ao consultar: ' + erro)
                    return 
                }
                console.log('consultado com sucesso')
                resolve(retorno)
            })
        })
    }

    insere(usuario){
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO usuario SET ?"

            conexao.query(sql, usuario, (erro, retorno) => {
                erro ? reject("Erro ao inserir" + erro) : resolve({id: retorno.insertId, ...usuario})
            })
        })
    }

    buscarPorEmail(email){
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM usuario WHERE email = ?"

            conexao.query(sql, email, (erro, retorno) => {
                if(erro){
                    reject("Erro ao consultar" + erro)
                }else{
                    const usuario = retorno[0]
                    resolve(usuario)
                    // if(usuario){
                    //     console.log('Usuário encontrado')
                    //     resolve(usuario)
                    // }else{
                    //     console.log('Usuário não encontrado')
                    //     reject({erro: 'Usuário não encontrado'})
                    // }
                }
            })
        })
    }
}

module.exports = new Usuarios()