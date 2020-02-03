//importações
const app = require('./configs/custom-express')

//coloca o servidor para ouvir na porta 3000
app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})