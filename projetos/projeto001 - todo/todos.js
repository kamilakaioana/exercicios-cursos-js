let elementoLista = document.querySelector('#app ul');
let elementoInput = document.querySelector('#app input');
let elementoBotao = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('listar_todos')) || []; 

function renderTodos (){
  elementoLista.innerHTML = '';

    for(todo of todos){
      let elementoTodo = document.createElement('li');
      let todoTexto = document.createTextNode(todo);

      let elementoLink = document.createElement('a');

      elementoLink.setAttribute('href', '#');

      let pos = todos.indexOf(todo);
      elementoLink.setAttribute('onclick', 'deleteTodo(' + pos + ')');

      let linkTexto = document.createTextNode('Excluir');

      elementoLink.appendChild(linkTexto);
      elementoTodo.appendChild(todoTexto);
      elementoTodo.appendChild(elementoLink);
      elementoLista.appendChild(elementoTodo);
    }
}

renderTodos();
  
function addTodo(){
  let todoTexto = elementoInput.value;

  todos.push(todoTexto);
  elementoInput.value = '';
  renderTodos();
  salvarNoStorage();
}

elementoBotao.onclick = addTodo;

function deleteTodo(pos){
  todos.splice(0, 1); //(posição, item).
  renderTodos();
  salvarNoStorage()
}

function salvarNoStorage(){
  
  localStorage.setItem('listar_todos', JSON.stringify(todos));
}