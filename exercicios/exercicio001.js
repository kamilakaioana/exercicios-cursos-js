// Crie uma função que dado o objeto a seguir:

var endereco = {
  rua: "Rua da luz",
  numero: 123,
  bairro: "Jardim das Flores",
  cidade: "Curitiba",
  uf: "PR",
};

function mostrarFrase(endereco) {
  let frase = `A Luana vive em ${endereco.cidade} - ${endereco.uf}, no ${endereco.bairro}, na ${endereco.rua} nº ${endereco.numero}`;
  return frase;
}
 console.log(mostrarFrase(endereco));