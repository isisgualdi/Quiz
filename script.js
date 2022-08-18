function verificar() {
    let resposta = formulario.opção.value
    document.getElementById('teste').innerHTML = resposta
    if(resposta == "Descartes") {
        document.getElementById('teste').innerHTML = 'Sua resposta está correta'
    } else {
        document.getElementById('teste').innerHTML = 'Sua resposta está incorreta'
    }
}
