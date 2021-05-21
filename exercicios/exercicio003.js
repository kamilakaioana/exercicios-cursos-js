//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Kotlin" e retorna um booleano true/false caso exista ou não.


function possuirHabilidade(skills) {

    let buscandoHabilidade =  skills.indexOf("Kotlin")
    
    if(buscandoHabilidade === -1){
        return false
    } else{
        return true
    }
   
}
var skills = ["Java", "Javascript", "Kotlin", "ReactJS", "React Native"];
possuirHabilidade(skills); 
