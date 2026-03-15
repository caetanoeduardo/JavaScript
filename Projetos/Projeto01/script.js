function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`  
    if (hora >= 0 && hora < 12) {
        img.src = 'estilo/imagens/pexels-morning.png'
        document.body.style.background = '#e2e2a6'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'estilo/imagens/pexels-afternoon.png'
        document.body.style.background = '#b3d9fa'
    } else {
        img.src = 'estilo/imagens/pexels-night.png'
        document.body.style.background = '#1d1d43'}
}

