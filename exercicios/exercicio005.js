// Dado o vetor escreva uma função que produza o resultado requerido:

var usuarios = [
  {
    nome: "Luara",
    habilidades: ["Javascript", "ReactNative", "ReactJS", "Redux"],
  },

  {
    nome: "Joana",
    habilidades: ["Kotlin", "TypeScript", "Elixir", "FireStore"],
  },
  {
    nome: "Kaio",
    habilidades: ["JavaScript", "ReactJs", "NextJs", "AdonisJs"],
  },
];

function imprimirFrase(pessoas) {
  for (let usuario of pessoas) {
    console.log(`A ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(", ")}`);
  }
}
 
imprimirFrase(usuarios)