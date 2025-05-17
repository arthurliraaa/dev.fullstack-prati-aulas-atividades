// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

let prompt = require('prompt-sync')()
let idade = Number(prompt('Digite a sua idade: ')) // entrada de idade

if (idade >= 0 && idade <= 12){
    console.log('Você é uma criança') // Caso a idade esteja entre 0 e 12 ele responde que é uma criança
}else if (idade >= 13 && idade <= 17){
    console.log('Você é um adolescente') // Caso a idade esteja entre 13 e 17 ele responde que é um adolescente
}else if (idade >=18 && idade <=59){
    console.log('Você é um adulto') // Caso a idade esteja entre 18 e 59 ele responde que é um adulto
}else {
    console.log('Você é um idoso')// Caso coloque uma idade superior as demais ele responde que é um idoso
}