// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let prompt = require ('prompt-sync')()

let soma = 0
for (let i = 0; i < 5; i++){ // loop para solicitar 5 números 
    let numero = Number(prompt('Digite um número:')) 
    soma += numero // soma os números digitados
}
console.log('A soma total é: '+soma)