const util = require('../utils')

const resposta = (codigosDeBarra) => {
    let validos = []
    let invalidos = []

    for (let i = 0; i < codigosDeBarra.length; i++) {
        if(util.validaTipo(codigosDeBarra[i]) && util.validaJoiaCO(codigosDeBarra[i]) && util.validaVendedor(codigosDeBarra[i])){
            validos.push(codigosDeBarra[i])
        }else {
            invalidos.push(codigosDeBarra[i])
        }
    }  

    console.log(" ")
    console.log("Questão 2 #######");
    console.log(" ")
    console.log("Pacotes Válidos:")
    for(let i = 0; i < validos.length; i++){
        console.log(validos[i])
    }

    console.log(" ")
    console.log("Pacotes Inválidos:")
    for(let i = 0; i < invalidos.length; i++){
        console.log(invalidos[i])
    }
    

}

module.exports.resposta = resposta;