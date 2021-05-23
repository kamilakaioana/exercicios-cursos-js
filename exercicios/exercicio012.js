// A partir do seguinte vetor e utilizando o filter Crie uma variáveis que tenha apenas os usuários
// que trabalham no Google e com mais de 18 anos:
const usuarios = [
    { nome: 'Hiago', idade: 26, empresa: 'Instagram' },
    { nome: 'Luan', idade: 15, empresa: 'Google' },
    { nome: 'Maria', idade: 40, empresa: 'Google' },
    ];

    const filter = usuarios.filter(function(item){
        return item.idade >= 18 && item.empresa === "Google"
    })

    console.log(filter)
  