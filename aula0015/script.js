function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[erro] Os dados acima não estão corretos!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bebemenino.png')
        } else if (idade < 21) {
            //Jovem 
            img.setAttribute('src', 'jovemhomem.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adultohomem.png')
        } else {
            //idoso
            img.setAttribute('src', 'idoso.png')
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bebemenina.png')
        } else if (idade < 21) {
            //Jovem 
            img.setAttribute('src', 'jovemmulhér.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'mulhéradulta.png')
        } else {
            //idoso
            img.setAttribute('src', 'idosa.png')
        }
    }
    res.style.textAlign = 'Center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}

