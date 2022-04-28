const resposta = (codigosDeBarra) => {
    let pacotesSulBrinquedos = []

    for (let i = 0; i < codigosDeBarra.length; i++) {
        const detalhe = codigosDeBarra[i].match(/.{1,3}/g)
        const codigoBrinquedo = "888"

        if(detalhe[4] == codigoBrinquedo && Number(detalhe[0]) >= 100 && Number(detalhe[0]) <= 199){
            pacotesSulBrinquedos.push(codigosDeBarra[i])
        }
    } 

    console.log(" ")
    console.log("Questão 3 #######");
    console.log(" ")
    console.log("Pacotes do tipo brinquedos e com origem a Região Sul:")

    if(pacotesSulBrinquedos.length <= 0){
        console.log("Nenhum pacote com esta característica.")
    }
    for(let i = 0; i < pacotesSulBrinquedos.length; i++){
        console.log(pacotesSulBrinquedos[i])
    }
    console.log(" ")
    



}

module.exports.resposta = resposta;