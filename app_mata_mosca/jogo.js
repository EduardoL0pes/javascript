var altura = 0
var largura = 0

function ajusteTamanhoPalco() {
    altura = window.innerHeight
    largura = window.innerWidth

    //console.log(altura, largura)
}
ajusteTamanhoPalco()

function posicaoRandomica() {
    var posicaoX = Math.floor(Math.random() * largura) - 90  //calcula o valor do palco do jogo definido anteriormente gerando valores aleatorios para que as moscas não vazem da tela do usuario
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    console.log(posicaoX, posicaoY)  //para fazer debug se tudo esta funcionando corretamente

    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio()  //alteração do atributo 'mosquito1' para chamada da função tamanhoAleatorio no **passo3**
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3) //random - cria numeros aleatorios de 0 ate +/- 3   //floor - retira a fração do numero tornando inteiro
    
    switch(classe) {

        case 0: 
            return('mosquito1')

        case 1: 
            return('mosquito2')

        case 2:
            return('mosquito3')
    }
}