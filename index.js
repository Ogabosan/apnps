const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')
const { urlencoded } = require('body-parser')
const { getMaxListeners } = require('process')

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))

app.get('/', function(req,res){

     res.render('index.ejs', {})
})

app.get('/usuarios', function(req,res){

     res.render('usuarios.ejs', {usuarios: [
          {nome:'Gabreil', email: 'Ogabosan@gmail.com'},
          {nome:'Vitoria', email: 'vitoria@gmail.com'},
          {nome:'micael', email: 'micael@gmail.com'},
          {nome:'Julia', email: 'julia@gmail.com'},
          {nome:'Junior', email: 'junior@gmail.com'},
          {nome:'Mariana', email: 'mariana@gmail.com'}
     ]})
})

app.listen(3000, function(){

     console.log("conexão inicializada na porta 3000")
})
