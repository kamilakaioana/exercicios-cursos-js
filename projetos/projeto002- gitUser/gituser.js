// Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
// nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github
// adicione um indicador de carregamento em tela no lugar da lista apenas enquanto a requisição estiver acontecendo:
// adicione uma mensagem de erro em tela caso o usuário no Github não exista.


let elementoInput = document.querySelector('input')
let elementoBotao = document.querySelector('#inserir')
let elementoDivLista = document.querySelector('#lista') 

let encontrarRepositorios = function(usuario){
  return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();
      xhr.open('GET', `https://api.github.com/users/${usuario}/repos`);
      xhr.send(null);

      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4) {
          if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText));
          }else{
            reject(' Error 404 - Erro na requisição')
          }
        }
      }
  });
}

function pesquisar(){
  apagarTela()
  exibirMensagemCarregando()
  let valor = elementoInput.value;

  
  encontrarRepositorios(valor)
  .then(function(response){
    apagarTela()

    exibirRepositorios(response);

  })
  .catch(function (error){
    window.alert(error)
    apagarTela()
    limparCampo();
    
  })

}

function apagarTela(){
  elementoDivLista.innerHTML = '';
}

function limparCampo(){
  elementoInput.value = '';
}

function exibirMensagemCarregando(){
  let elementoLista = document.createElement('ul');
  let elementoItemDaLista = document.createElement('li');
  let carregando = document.createTextNode("carregando...");

  elementoItemDaLista.appendChild(carregando)
  elementoLista.appendChild(elementoItemDaLista)
  elementoDivLista.appendChild(elementoLista)
  
}
function exibirRepositorios(repositorios){
  
  let elementoLista = document.createElement('ul');
  
  repositorios.forEach(repositorio => {
    
    
    let elementoItemDaLista = document.createElement('li');
    let nomeRepositorio = document.createTextNode(repositorio.name);
    elementoItemDaLista.appendChild(nomeRepositorio)
    elementoLista.appendChild(elementoItemDaLista)
    
    
  })
  elementoDivLista.appendChild(elementoLista)
  limparCampo();
  
}

elementoBotao.addEventListener('click', pesquisar)












 