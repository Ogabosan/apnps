const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')
const { urlencoded } = require('body-parser')

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))

app.get('/', function(req,res){

     res.send("Olá, Nobre Gabriel Mathias")
})

app.listen(3000, function(){

     console.log("conexão inicializada na porta 3000")
})
