// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let prompt = require('prompt-sync')()

let compra = Number(prompt('Digite o número de maçãs que deseja comprar:'))
if (compra <12){ // verifica se o número de maçãs é menor que 12
    let valor = compra *0.30 // calcula o valor total
    console.log('O valor total da compra é R$'+valor)
}else if(compra >= 12){ // verifica se o número de maçãs é maior ou igual a 12
    let valor = compra*0.25 // calcula o valor total
    console.log('O valor total da compra é R$'+valor)
}else{
    console.log('Número inválido, tente novamente')
}