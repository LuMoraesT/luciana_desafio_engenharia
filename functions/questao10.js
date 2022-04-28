
const util = require('../utils')

const resposta = (codigosDeBarra) => {
    let invalidos = []

    for (let i = 0; i < codigosDeBarra.length; i++) {
        if(!util.validaTipo(codigosDeBarra[i]) || !util.validaJoiaCO(codigosDeBarra[i]) || !util.validaVendedor(codigosDeBarra[i])){
            invalidos.push(codigosDeBarra[i])
        }
    }  

    console.log(" ")
    console.log("Questão 10 #######");
    console.log(" ")
    console.log("Pacotes Inválidos:")
    console.log(" ")
    for(let i = 0; i < invalidos.length; i++){
        console.log(invalidos[i])
    }
}

module.exports.resposta = resposta;