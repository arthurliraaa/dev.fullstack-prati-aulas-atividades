// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

let prompt = require('prompt-sync')()
let numero =  Number(prompt('Digite um número inteiro: ')) // lê um número inteiro do usuário

if (numero % 2 === 0) {
    console.log(` O número ${numero} é par`) // verifica se o número é par
    // se o resto da divisão por 2 for igual a 0, então é par
}else { // se não, é ímpar
    // se o resto da divisão por 2 for diferente de 0, então é ímpar
    console.log(`O número ${numero} é ímpar`) 
}
