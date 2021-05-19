//Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function pares(x, y) {
  
  let numerosPares = [];
  for (let i = x; i <= y; i++) {
    if (i % 2 === 0) {
      numerosPares.push(i);
    }
  }
  console.log(numerosPares);
}
pares(32, 321);
