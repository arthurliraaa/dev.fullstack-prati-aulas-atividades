//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.

let prompt = require ('prompt-sync')()

let peso = Number(prompt('Digite seu peso em kg:'))
let altura = Number(prompt('Digite sua altura em metros:'))

let imc = peso / (altura * altura) // calcula o IMC
console.log('Seu IMC é '+imc) 
if (imc <18.5){ // verifica a categoria de peso e depende do resultado imprime a categoria
    console.log('VocÊ está baixo do peso')
}else if (imc >= 18.5 && imc <24.9){
    console.log('Você está com o peso normal')
}else if (imc >=25 && imc< 29.9){
    console.log('Você está com sobrepeso')
}else if (imc >= 30 && imc < 34.9){
    console.log('Você está com obesidade grau 1')
} else if (imc >= 35 && imc < 39.9){
    console.log('Você está com obesidade grau 2')
} else {
    console.log('Você está com obesidade grau 3')
}