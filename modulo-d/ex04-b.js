var agora = new Date()    //Para pegar a hora atual do sistema que esta executando o node.js
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 5 && hora <= 12) {
    console.log('Bom dia!')
} else if (hora >= 13 && hora <= 18) {
    console.log('Boa tarde!')
} else if (hora >= 19 && hora <= 23) {
    console.log('Boa noite!')
} else if (hora >= 00 && hora <= 4) {
    console.log('Boa Madrugada!')
}