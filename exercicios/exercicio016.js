// Converta a função no seguinte trecho de código em Arrow Function:
// const usuario = { nome: 'Kamila', idade: 26 };
// function mostraIdade(usuario) {
// return usuario.idade;
// }
// mostraIdade(usuario);

const usuario = { nome: 'Kamila', idade: 26 };
const mostraIdade = ((usuario) => {
return usuario.idade;
})
mostraIdade(usuario);

//console.log(usuario)