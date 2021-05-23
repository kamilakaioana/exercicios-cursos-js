// A partir do seguinte vetor Multiplique a idade de todos usuários por dois e depois realize um filtro 
// nos usuários que possuem no máximo 50 anos:
const usuarios = [
    { nome: 'Hiago', idade: 26, empresa: 'Instagram' },
    { nome: 'Luan', idade: 15, empresa: 'Google' },
    { nome: 'Maria', idade: 40, empresa: 'Google' },
    ];

const resultado = usuarios
    .map(item => {
        return item.idade * 2;
    })
    .filter(function(item){
        return item <= 50 
    })

    

console.log(resultado)