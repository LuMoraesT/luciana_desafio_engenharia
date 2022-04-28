const util = require('../utils')

const resposta = (codigosDeBarra) => {
    let centroOeste = []
    let nordeste = []
    let norte = []
    let sudeste = []
    let sul = []

    for (let i = 0; i < codigosDeBarra.length; i++) {
        const detalhe = codigosDeBarra[i].match(/.{1,3}/g)

        if(!util.validaTipo(codigosDeBarra[i]) || !util.validaJoiaCO(codigosDeBarra[i]) || !util.validaVendedor(codigosDeBarra[i])){
            continue
        }

        if (Number(detalhe[1]) >= 100 && Number(detalhe[1]) <= 199) {
            sul.push(codigosDeBarra[i])  
        }else if(Number(detalhe[1]) >= 001 && Number(detalhe[1]) <= 099){
            sudeste.push(codigosDeBarra[i])
        }else if(Number(detalhe[1]) >= 400 && Number(detalhe[1]) <= 499){
            norte.push(codigosDeBarra[i])
        }else if(Number(detalhe[1]) >= 300 && Number(detalhe[1]) <= 399){
            nordeste.push(codigosDeBarra[i])
        }else if(Number(detalhe[1]) >= 201 && Number(detalhe[1]) <= 299){
            centroOeste.push(codigosDeBarra[i])
        }
    }   
    
    console.log(" ");
    console.log("Questão 4 #######");
    console.log(" ")
    console.log("Pacotes Região Centro-oeste:")
    for(let i = 0; i < centroOeste.length; i++){
        console.log(centroOeste[i])
    }
    console.log(" ");
    console.log("Pacotes Região Nordeste:")
    for(let i = 0; i < nordeste.length; i++){
        console.log(nordeste[i])
    }
    console.log(" ");
    console.log("Pacotes Região Norte:")
    for(let i = 0; i < norte.length; i++){
        console.log(norte[i])
    }
    console.log(" ");
    console.log("Pacotes Região Sudeste:")
    for(let i = 0; i < sudeste.length; i++){
        console.log(sudeste[i])
    }
    console.log(" ");
    console.log("Pacotes Região Sul:")
    for(let i = 0; i < sul.length; i++){
        console.log(sul[i])
    }
    console.log(" ");
    

}

module.exports.resposta = resposta;