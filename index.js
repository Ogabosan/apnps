const express = require('express')
const app = express()

app.get('/', function(req,res){

     res.send("Olá, Nobre Gabriel Mathias")


})
app.get('/mensagem', function(req,res){
     res.send("Esta mensagem aqui é automatica")
})

app.listen(3000, function(){

     console.log("conexão inicializada na porta 3000")


})