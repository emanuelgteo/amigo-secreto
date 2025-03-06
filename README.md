<h1 align="center"> Amigo Secreto </h1>

Este projeto foi construído para apresentar duas principais funções: adicionar os amigos à lista e realizar o sorteio do amigo secreto.

<h2>1) Adicionar Amigos</h2>

**- Função Principal:** Inclui os valores fornecidos no input da página HTML em uma lista<br>

**- Exibição de Nomes:** Para poder exibir estes nomes na página, foi criada uma função auxiliar que cria um elemento `<li>` para cada novo nome adicionado à lista de sorteio<br>

**- Validação de Dados:** Foram realizadas 2 implementações:
 - Exibe alerta ao usuário ao clicar no botão de "Adicionar" sem antes ter digitado um nome no input
 - Exibe alerta ao usuário caso seja digitado um nome no input que já está na lista de amigos. Função pensada para evitar confusões no jogo ao utilizar nomes iguais

 <h2>2) Sortear Amigos</h2>

 **- Função Principal:** Gera um número aleatório no intervalo determinado entre 0 e o tamanho da lista de amigos adicionados. Em seguida, utiliza-se esse número como o índice para buscar um elemento da lista de amigos que será exibido na página.<br>

 **- Exibição de Nomes:** Diferentemente da função de adicionar amigos, optei por incluir um elemento `<li>` diretamente no HTML da página e então modificá-lo com Javascript a partir do elemento escolhido da lista.<br>

 **- Sorteios Múltipos:** A estrutura definida para a exibição de nomes foi pensada de forma que um único nome apareça na página a cada vez que o botão Sortear for apertado. Assim que um nome é selecionado, este elemento será removido da lista de amigos e será possível apertá-lo novamente para sortear mais um participante, até que todos as pessoas sejam sorteadas.<br>

 **- Validação de Dados:** Foram realizadas 3 implementações:
  - Exibe alerta caso não haja nenhum nome na lista de amigos ou apenas 1 amigo adicionado (se não houve nenhum sorteio ainda)
  - Bloqueio do botão *Adicionar* após o primeiro sorteio (atribuído o disabled com JS e alterado o CSS após desabitação do botão)
  - Bloqueio do botão *Sortear* após o sorteio de todos os jogadores (atribuído o disabled com JS e alterado o CSS após desabitação do botão)

<h2>3) Limpar Amigos</h2>

**- Função Principal:** Limpa o nome da pessoa que acabou de ser sorteada. Esta implementação foi pensada como complemento ao sistema de sorteios múltiplos, para evitar que o nome da pessoa sorteada anteriormente fique visível à nova pessoa que realizará o próximo sorteio.

**- Manipulação de Botões:** O botão *Limpar* estará desativado até que seja feito um sorteio válido. 
Então, o botão de *Sortear* ficará desativado até que o botão *Limpar* seja clicado.

Observação: **Este botão não constava no código HTML pré-definido do desafio original**, sendo criado como uma funcionalidade adicional do projeto. <br>
Para o desenvolvimento do CSS deste novo elemento, utilizou-se a cor amarela presente na imagem de cabeçalho e variações de tom para os estados *hover* e *disabled*. Também estilizou-se um novo container que engloba os botões *Sortear* e *Limpar*, com o objetivo de centralizá-los na página.