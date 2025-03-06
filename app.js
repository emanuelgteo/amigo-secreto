//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let listaAmigos = [];
let listaBotoes = document.getElementsByTagName('button');
let botoes = {
    adicionar: listaBotoes[0],
    sortear: listaBotoes[1],
    limpar: listaBotoes[2]
}

// Função que exibe os amigos adicionados e os sorteados
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
    botao.disabled = true;
}

function habilitarBotao(botao) {
    botao.disabled = false;
}

function adicionarAmigo() {
    
    let amigo = document.getElementById('amigo').value;
    
    // Validação de dados
    if (amigo == '') {
        alert('Insira um nome válido');
    } else if (listaAmigos.includes(amigo)) {
        alert('Nome repetido! Favor especificar');
    } else {
        // Acrescenta o input à lista de amigos adicionados
        listaAmigos.push(amigo);
        exibirAmigo(amigo, 'adicionado');
    }
}
// Variável que conta o número de sorteios já realizados
let sorteios = 0

function sortearAmigo() {
    // Caso seja o primeiro sorteio e não tenha sido cadastrado pelo menos 2 pessoas:
    if (listaAmigos.length <= 1 && sorteios == 0) {
        alert('Não há amigos suficientes para sortear!');
    } else {
        sorteios++;
        // Sorteio e exbição do nome na página HTML
        let numAleatorio = parseInt(Math.random()*listaAmigos.length) + 1;
        let amigo = listaAmigos[numAleatorio-1];
        exibirAmigo(amigo, 'sorteado');
        // Manipulação de botões para evitar novo sorteio antes de limpar o nome sorteado
        habilitarBotao(botoes.limpar);
        desabilitarBotao(botoes.sortear);
        
        // Após o primeiro sorteio, nao será possível adicionar mais nomes à lista
        if (sorteios == 1) {
            desabilitarBotao(botoes.adicionar);
        }

        // Retira o nome sorteado da lista de amigos, para que não haja repetição de nomes no sorteio
        let indice = listaAmigos.indexOf(amigo);
        listaAmigos.splice(indice, 1);

    } 
}

function limparNome() {
        // Limpa o nome sorteado e habilita o botão Sortear, caso ainda haja nomes na lista
        document.getElementById('li-resultado').innerHTML = "";
        desabilitarBotao(botoes.limpar);
        if (listaAmigos.length > 0) {
            habilitarBotao(botoes.sortear);
        } else {
            alert('Fim do sorteio!')
        }

}