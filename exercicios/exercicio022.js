// A partir do objeto e utilizando o operador spread: Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Ana.
// Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Campinas.

const usuario = {
    nome: 'Mary',
    idade: 22,
    endereco: {
    cidade: 'São Paulo',
    uf: 'SP',
    pais: 'Brasil',
    }
};
const usuario2 = { ...usuario, nome: 'Ana' };

const usuario3 = { ...usuario, cidade: 'Campinas' };

console.log(usuario2);
console.log(usuario3);