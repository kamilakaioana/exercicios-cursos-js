// Utilizando o operador de rest/spread (...) realize a operação:
// A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
// posição do vetor e outra variável y que recebe todo restante dos dados.
// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

const arr = [1, 2, 3, 4, 5, 6]

const [ x, ...y ] = arr; 

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]


function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3