/*function saudar(a){
    console.log(a)
}
saudar('Olá Mundo!!!')*/
/*function xicaras() {
    let farinha = 4
    let acucar = 3
    let txicaras = 12
    let resultado7 = ((acucar * txicaras) / farinha)
    console.log('A proporção de açucar é ' + resultado7)
}
xicaras()*/
function xicaras(farinha, acucar, txicaras) {    
    let resultado7 = ((acucar * txicaras) / farinha)
    //console.log('A proporção de açucar é ' + farinha)
    return resultado7
}
let x = xicaras(4, 3, 12)
console.log('A proporção de açucar é ', x)