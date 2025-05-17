//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let prompt = require('prompt-sync')()

let nota = Number(prompt('Digite a sua nota:'))// recebe a nota
if (nota >=0 && nota <=10){ // verefica se a nota está entre 0 10
    if (nota >= 7){ // vereficia se a nota é maior ou igual a 7
        console.log('Você foi aprovado') // se for maior ou igual a 7, o aluno é aprovado
    }else if (nota >=5 && nota <7){ //verefica se a nota é maior ou igual a 5 e se é menor que 7
        console.log('Voce está de recuperação') // caso for de acordo com a condição, o aluno está de recuperação
    }else{ // se não for nenhuma das condições anteriores, ele é reprovado
        console.log('Você foi reprovado')
    }
}else{
    console.log('A nota deve ser entre 0 e 10') // caso a nota não esteja entre 0 e 10 o programa informa que deve ser 
}