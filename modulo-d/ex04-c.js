var agora = new Date()
var diaSem = agora.getDay()   //Dia da semana do sistema

/* 
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

//console.log(diaSem)

switch(diaSem) {    //Switch é bom para se usar com dados pontuais como por exemplo esse exercício     abaixo.
    case 0:
        console.log('Domingo')
        break  //O break é Obrigatório senão irá da erro na hora da execução.
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia Inválido!')
        break  //Nesse caso o break é opcional, mas para eventuais erros vou deixar.
}