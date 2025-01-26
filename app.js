//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function exibirAmigo(amigo, acao) {
    let amigoExibido = document.createElement('li');
    amigoExibido.innerHTML = amigo;

    if (acao == 'adicionado') {
        document.getElementById('listaAmigos').appendChild(amigoExibido);
    } else {
        document.getElementById('resultado').appendChild(amigoExibido);
    }
}

function desabilitarBotoes() {
    let botoes = document.getElementsByTagName('button');
    for (botao of botoes) {
        botao.disabled = true;
    }

}

function adicionarAmigo() {
    
    let amigo = document.getElementById('amigo').value;

    if (amigo == '') {
        alert('Insira um nome válido');
    } else if (listaAmigos.includes(amigo)) {
        alert('Nome repetido! Favor especificar');
    } else {
        listaAmigos.push(amigo);
        exibirAmigo(amigo, 'adicionado');
    }
}

function sortearAmigo() {

    let numAleatorio = parseInt(Math.random()*listaAmigos.length) + 1;
    let amigo = listaAmigos[numAleatorio-1];
    exibirAmigo(amigo, 'sorteado');
    desabilitarBotoes();

}