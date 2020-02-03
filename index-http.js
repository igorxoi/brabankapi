const http = require('http')

//criando o servidor
const server = http.createServer((req, res) =>{
    //precisamos do res para mostras o conteudo na pagina
    res.end('<h1>Atendendo a requisição</h1>')
})

//coloca o servidor para ouvir na porta 3000
server.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000")
})