const util = require('../utils')

const resposta = (codigosDeBarra) => {
    let vendedores = []

    for (let i = 0; i < codigosDeBarra.length; i++){
        const detalhe = codigosDeBarra[i].match(/.{1,3}/g)
        if(!util.validaTipo(codigosDeBarra[i]) || !util.validaJoiaCO(codigosDeBarra[i]) || !util.validaVendedor(codigosDeBarra[i])){
            continue
        }

        if(vendedores.filter(e => e.codigo == detalhe[3]).length > 0){
            const index = vendedores.findIndex((obj => obj.codigo == detalhe[3]))

            vendedores[index].qtd += 1
        }else{
            vendedores.push({codigo: detalhe[3], qtd:1 })

        }
    }
     

    console.log(" ");
    console.log("Questão 5 #######");
    console.log(" ")
    for(let i = 0; i < vendedores.length; i++){
        console.log(`Vendedor código ${vendedores[i].codigo}: ${vendedores[i].qtd} pacotes.`)
    }
    console.log(" ");
    

}

module.exports.resposta = resposta;