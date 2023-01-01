/*var idade = 12
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade >= 16 && idade < 18 || idade > 65) {
        console.log('Voto opcional')                         //Modo Completo
    }else if (idade >= 18) { 
        console.log('Voto Obrigatório')
    }
} */

var idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('não vota')                                 //Modo Simplificado
} else if (idade < 18 || idade > 65) {
    console.log('Voto Opcional')
} else {
    console.log('Voto Obrigatório')
}