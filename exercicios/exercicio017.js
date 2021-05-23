// Converta a função no seguinte trecho de código em Arrow Function:
// const nome = "Kamila";
// const idade = 26;
// function mostraUsuario(nome = 'Kamila', idade = 18) {
// return { nome, idade };
// }
// mostraUsuario(nome, idade);
// mostraUsuario(nome);

const nome = "Kamila";
const idade = 26;
const mostraUsuario = (nome = 'Kamila', idade = 18) => ({nome, idade });

mostraUsuario(nome, idade);
mostraUsuario(nome);

//console.log(mostraUsuario())