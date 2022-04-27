const resposta = (codigosDeBarra) => {
    let centroOeste = 0
    let nordeste = 0
    let norte = 0
    let sudeste = 0
    let sul = 0

    for (let i = 0; i < codigosDeBarra.length; i++) {
        const detalhe = codigosDeBarra[i].match(/.{1,3}/g)
        if (Number(detalhe[1]) >= 100 && Number(detalhe[1]) <= 199) {
            sul++
        }else if(Number(detalhe[1]) >= 001 && Number(detalhe[1]) <= 099){
            sudeste++
        }else if(Number(detalhe[1]) >= 400 && Number(detalhe[1]) <= 499){
            norte++
        }else if(Number(detalhe[1]) >= 300 && Number(detalhe[1]) <= 399){
            nordeste++
        }else if(Number(detalhe[1]) >= 201 && Number(detalhe[1]) <= 299){
            centroOeste++
        }
    }   

    console.log("Questão 1 #######");
    console.log(`Região Centro-oeste: ${centroOeste} pacotes`)
    console.log(`Região Nordeste: ${nordeste} pacotes`)
    console.log(`Região Norte: ${norte} pacotes`)
    console.log(`Região Sudeste: ${sudeste} pacotes`)
    console.log(`Região Sul: ${sul} pacotes`)

}

module.exports.resposta = resposta;