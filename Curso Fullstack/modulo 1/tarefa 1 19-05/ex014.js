// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

let prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um número para calcular o fatorial: '))

// fatoria é: n! = n (n-1) * (n-2  * ... * 1)

for (let i =numero -1; i >0; i--){ // loop para calcular o fatorial
    numero *=i // multiplica o número pelo próximo número menor que ele
}
console.log(`O fatorial é: ${numero}`)