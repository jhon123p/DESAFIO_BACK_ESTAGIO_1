const Racerotas = require('./RaceRota') 
const{Router}= require('express')    
const rotas = Router()             
rotas.use(Racerotas)


rotas.get('/',function(req,res){
    res.send("servidor teste")    
    
})

module.exports = rotas              









/*para declarar e criar uma rota
1= criando uma const {Router} = require("express")
2= cria um variavel "_rotas" onde ela vai receber a funçao Router
3 = rotas.get

*/