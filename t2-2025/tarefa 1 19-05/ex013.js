// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

let prompt = require('prompt-sync')()

let soma =0 // variável para armazenar a soma dos números
let contador = 0 // variável para contar quantos números foram digitados
let numero =1 // variável para armazenar o número digitado pelo usuário
while (numero != 0){ // loop para solicitar números até que o usuário digite 0
    numero = Number(prompt('Digite um número:'))
    if (numero != 0){ // se o número digitado for diferente de 0
        soma += numero // soma o número digitado
        contador++ // incrementa o contador
    }
}
console.log('A média aritmética é: '+(soma/contador)) // exibe a média aritmética
// a média aritmética é a soma dos números dividido pela quantidade de números digitados