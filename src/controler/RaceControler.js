class RaceControler{
    constructor(RaceService){
        this.RaceService = RaceService
    }
    create(req,res){
        const corrida = req.body      // requisiçao corpo if nome
        const corridaNova = this.RaceService.create(corrida)
        res.status(201).json(corridaNova)       //dados nova corrida
    }
    delete(req,res){
        const corrida = req.body.id
        const deleteCorrida = this.RaceService.delete(corrida)
        res.status(301).json(deleteCorrida)

    }
}
module.exports = RaceControler