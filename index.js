const express = require('express')
const app = express()
const routes = require('./api-routes') //porta de entrada para as rotas

const port = 3000

routes(app) //inicializando os metodos do express

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

module.exports = app
