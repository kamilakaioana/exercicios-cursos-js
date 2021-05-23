// A partir do seguinte vetor utilizando o map Crie uma variável que contenha todas idades dos usuários: [26, 15, 40]
const usuarios = [
    { nome: 'Hiago', idade: 26, empresa: 'Instagram' },
    { nome: 'Luan', idade: 15, empresa: 'Google' },
    { nome: 'Maria', idade: 40, empresa: 'Google' },
    ];


const array =  usuarios.map(function(item) {
  return item.idade 
})

console.log(array)