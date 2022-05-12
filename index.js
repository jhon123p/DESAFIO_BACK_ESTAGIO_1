const rotas = require('./src/Router')
const express = require('express')
const app = express()

app.use(express.json())
app.use(rotas)

/*app.get('/',(req,res)=>{
    return res.json({message:"okay"})
})*/


app.listen(1234,()=>{
    console.log("SERVIDOR RODANDO NO LINK http://localhost:1234")
})

module.exports = rotas