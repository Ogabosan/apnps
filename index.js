const express = require('express')
const app = express()

app.get('/', function(req,res){

     res.send("Olá, Nobre Gabriel Mathias")


})
app.get('/mensagensinha', function(req,res){
     res.send("Esta mensagem aqui é automatica")
})

app.get('/sobre', function(req,res){
     res.send("Esta pagina está sendo desenvolvida pelo Gabriel")
})


app.get('/layout', function(req,res){
     res.send("Este é o novo layout")
})

app.listen(3000, function(){

     console.log("conexão inicializada na porta 3000")


})
