// A partir do seguinte vetor e utilizando o find Crie uma variável que procura por um usuário que trabalhe na empresa Lenovo: undefined

const usuarios = [
    { nome: 'Hiago', idade: 26, empresa: 'Instagram' },
    { nome: 'Luan', idade: 15, empresa: 'Google' },
    { nome: 'Maria', idade: 40, empresa: 'Google' },
    ];

const find = usuarios.find(function(item){
    return item.empresa === "Lenovo"
})

console.log(find)