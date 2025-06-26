function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = '5'
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora < 5) {
        //Cuidado porai neste horário
        img.src = 'madrugada.png'
        document.body.style.background = 'black'

    } else if (hora < 12) {
        //bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'

    } else if (hora < 18) {
        //boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'

    } else if (hora <= 23) {
        //boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}