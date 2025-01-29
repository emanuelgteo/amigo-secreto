//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function exibirAmigo(amigo, acao) {
    
    if (acao == 'adicionado') {
        let amigoExibido = document.createElement('li');
        amigoExibido.innerHTML = amigo;
        document.getElementById('listaAmigos').appendChild(amigoExibido);
    } else if (acao == 'sorteado') {
        document.getElementById('li-resultado').innerHTML = amigo;
    }
}

function desabilitarBotao(botao) {
    let botoes = document.getElementsByTagName('button');
    if (botao == 'adicionar') {
        botoes[0].disabled = true;
    } else if (botao == 'sortear') {
        botoes[1].disabled = true;
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

let houveSorteio = false;
function sortearAmigo() {
    if (listaAmigos.length <= 1 && houveSorteio == false) {
        alert('Não há amigos suficientes para sortear!');
    } else {
        let numAleatorio = parseInt(Math.random()*listaAmigos.length) + 1;
        let amigo = listaAmigos[numAleatorio-1];
        exibirAmigo(amigo, 'sorteado');
        desabilitarBotao('adicionar');
        houveSorteio = true;

        let indice = listaAmigos.indexOf(amigo);
        listaAmigos.splice(indice, 1);
        
        if (listaAmigos == 0) {
            desabilitarBotao('sortear');
        }
    }
}