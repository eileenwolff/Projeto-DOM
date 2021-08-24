import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js';

  const criarTarefa = (evento) => {
  evento.preventDefault();

  const lista = document.querySelector('[data-list]'); // selecionando a ul
  const input = document.querySelector('[data-form-input]'); // selecionando o input
  const valor = input.value; // atribuindo o valor do input à variável
  
  const tarefa = document.createElement('li'); // criando um item da lista
  tarefa.classList.add('task') // adicionando a classe css ao item da lista

  const conteudo = `<p class="content">${valor}</p>`; // definindo como o conteudo aparece

  tarefa.innerHTML = conteudo; // definindo o item da lista como o conteudo
  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());
  lista.appendChild(tarefa); // adicionando o item da lista à lista
  
  input.value = " "; // definindo o valor de string para o input
}

const novaTarefa = document.querySelector('[data-form-button]'); //selecionando o botão

novaTarefa.addEventListener('click', criarTarefa); // adicionando o evento de click no botão e a ação de chamar a função para criar a tarefa