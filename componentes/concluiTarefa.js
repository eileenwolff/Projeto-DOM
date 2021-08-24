const BotaoConclui = () => {

  const botaoConclui = document.createElement('button'); // criando o botão concluir
  botaoConclui.classList.add('check-button'); // adicionando estilo ao botão
  botaoConclui.innerText = 'concluir'; // adicionando o texto do botão
  botaoConclui.addEventListener('click', concluirTarefa) // evento de clique do botao que concluir a tarefa

  return botaoConclui; // retornando o botao para ser usado fora do escopo

}

const concluirTarefa = (evento) => {

  const botaoConclui = evento.target; // verificando qual dos botões foi clicado
  const tarefaCompleta = botaoConclui.parentElement; // atribuindo o pai do botão clicado a uma variável
  tarefaCompleta.classList.toggle('done'); // ligando o estilo de rabisco
}

export default BotaoConclui;