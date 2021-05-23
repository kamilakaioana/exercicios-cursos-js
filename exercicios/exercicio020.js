// Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
// separadamente

    function mostraInfo({ nome, idade }) {
        return `${nome} tem ${idade} anos.`;
        }
        mostraInfo({ nome: 'Kamila', idade: 26 })
    
  