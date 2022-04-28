
const validaTipo = (codigoDeBarra) => {
    const detalhe = codigoDeBarra.match(/.{1,3}/g)
    const tiposValidos = ["001", "111", "333", "555", "888"]

    if(tiposValidos.includes(detalhe[4])){
        return true
    }else {
        return false
    }
}
module.exports.validaTipo = validaTipo;

const validaJoiaCO = (codigoDeBarra) => {
    const detalhe = codigoDeBarra.match(/.{1,3}/g)
    const codigoJoia = "001"

    if(detalhe[4] == codigoJoia && Number(detalhe[0]) >= 201 && Number(detalhe[0]) <= 299){
        return false
    }else{
        return true
    }
}
module.exports.validaJoiaCO = validaJoiaCO;

const validaVendedor = (codigoDeBarra) => {
    const detalhe = codigoDeBarra.match(/.{1,3}/g)
    const vendedoresInativos = ["367"]

    if(vendedoresInativos.includes(detalhe[3])){
        return false
    }else {
        return true
    }
}
module.exports.validaVendedor = validaVendedor;