const BotaoDeleta = () => {
  
  const botaoDeleta = document.createElement('button'); // criando botao
  botaoDeleta.innerText = 'deletar'; // definindo texto
  botaoDeleta.addEventListener('click', deletarTarefa) // adicionando evento

  return botaoDeleta;
}

const deletarTarefa = (evento) => {
  const botaoDeleta = evento.target; // botao alvo
  const tarefaDeletada = botaoDeleta.parentElement; // pai do botao alvo
  tarefaDeletada.remove();

  return botaoDeleta;
}

export default BotaoDeleta;