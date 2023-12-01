function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // criança
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade >= 12 && idade < 18) {
                // jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade >= 18 && idade < 60) {
                // adulto
                img.setAttribute('src', 'homemadulto.png')
            } else if (idade >= 60) {
                // velho
                img.setAttribute('src', 'velhohomem.png')
            } else {
                window.alert('[ERROR] Verifique os dados e tente novamente!')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // criança
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade >= 12 && idade < 18) {
                // jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade >= 18 && idade < 60) {
                // adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else if (idade >= 60) {
                // velho
                img.setAttribute('src', 'mulhervelha.png')
            } else {
                window.alert('[ERROR] Verifique os dados e tente novamente!')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}