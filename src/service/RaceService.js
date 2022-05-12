class RaceService{
    constructor(database){
        this.raceRef = database.ref('Races') //ref = referencia de dados
    }
    create(corrida) {
        const nome = corrida.id;
        const id = corrida.nome;
        const dataIn = corrida.dataIn
        const dataFi = corrida.dataFi
        const link = corrida.link

        const DataIn = dataIn.split("/")
        console.log(DataIn)
        const DiaIn = DataIn[0]
        const MesIn = DataIn[1]
        const AnoIn = DataIn[2]

        const DataFi = dataFi.split("/")
        console.log(DataFi)
        const DiaFi = DataFi[0]
        const MesFi = DataFi[1]
        const AnoFi = DataFi[2]

        const Datain = new Date(AnoIn,MesIn,DiaIn)
        const Datafi = new Date(AnoFi,MesFi,DiaFi)

        
        if(Datafi <= Datain  ){
            throw new Error("Datas invalidas")
        }


        if(!nome || !id  || dataFi === dataIn)  {
            throw new Error("campos incompletos");
        }
        try{
            this.raceRef.child(id).set({nome,dataIn,dataFi,link})
            return corrida; 
        }catch(error){
            throw new Error(error.message);
        }

    }

    delete(id){        
        this.raceRef.child(id).remove()
        return "CORRIDA DELETADA"

    }
} 
module.exports = RaceService

/*Não deve ser permitido o cadastro com datas inválidas: 
Ex:
=> Data de encerramento ser antes da data de início
=> datade início ser antes do dia atual,
=> data de encerramento ser igual a data de início.*/