// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let prompt = require('prompt-sync')()

let valor1 = Number(prompt('Digte o valor do primeiro número:'))
let valor2 = Number(prompt('Digte o valor do primeiro número:'))

if(valor1 <valor2){ // Se o valor1 for menor que o valor2 ele vai imprimi na ordem crescnte de valor 1 para o valor 2
    console.log(`Os valor em ordem crescente é: ${valor1} e ${valor2}`) 
}else if(valor1>valor2){ //cso não ele vai imprimir o valor 2 primeiro e depois o valor 1
    console.log(`Os valor em ordem crescente é: ${valor2} e ${valor1}`)
}else{
    console.log('Valor inválido')
}