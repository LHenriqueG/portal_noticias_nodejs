const express = require('express') //recuperando a biblioteca do express
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express() //executando a função do módulo que é retornado
app.set('view engine', 'ejs')
app.set('views' , './app/views')

app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator())

consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app)

module.exports = app