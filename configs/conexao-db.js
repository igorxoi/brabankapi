const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: '3.88.15.189',
    port: 3306,
    user: 'igorigor',
    password: 'bcd127',
    database: 'brabank'
})

module.exports = conexao