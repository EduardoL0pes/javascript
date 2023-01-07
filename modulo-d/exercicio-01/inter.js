function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var tempo = new Date()
    var agora = tempo.getHours()
    msg.innerHTML = 'Agora são exatamente ' + agora + 'hrs'
    if (agora >= 00 && agora < 12) {
        //Dia
        img.src = 'manha1.jpg'
        document.body.style.background = 'lightskyblue'
    } else if (agora >= 12 && agora < 18) {
        //tarde
        img.src = 'tarde1.jpg'
        document.body.style.background = '#422043'
    } else {
        //noite
        img.src = 'noite1.jpg'
        document.body.style.background = 'gray'
    }

}