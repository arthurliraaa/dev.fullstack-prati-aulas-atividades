// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

let prompt = require('prompt-sync')()

let numero = Number(prompt('Digte um numero para ver a tabuada: '))
for (let i =1; i<10; i++){ // loop para calcular a tabuada
    console.log(`${numero} x ${i} = ${numero*i}`)
}