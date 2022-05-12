const bancoDeDados = require('../bancoDados')
const Service = require("../service/RaceService")
const Controler = require('../controler/RaceControler')
const RaceService = new Service(bancoDeDados)
const RaceControler = new Controler(RaceService)


const{Router}= require('express')
const rotas = Router()


rotas.post('/Races',(req,res)=>{ 
    return RaceControler.create(req,res)
})

rotas.delete('/Races',(req,res)=>{
    return RaceControler.delete(req,res)
})




module.exports = rotas