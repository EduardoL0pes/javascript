function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var sano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (sano.value.length == 0 || Number(sano.value) > ano) {
    window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(sano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crianca-menino1.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-homem1.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-homem1.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'idoso1.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crianca-menina.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-mulher.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-mulher.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        //res.style.textAlign = 'center'  para centralizar o texto pelo JS
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}