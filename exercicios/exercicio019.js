// A partir de um objeto, Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis

const empresa = {
    nome: 'COAMO',
    endereco: {
      cidade: 'Campo Mourão',
      estado: 'PR',
    }
};

const {nome, endereco:{cidade, estado}} = empresa;

console.log(nome); // COAMO
console.log(cidade); // Campo Mourão
console.log(estado); // PR