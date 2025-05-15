// const promt = require('prompt-sync')();

// let valor1 = parseFloat(promt('Digite o primeiro valor: '));	 
// let valor2 = parseFloat(promt('Digite o segundo valor: '));
// let operacao = promt('Digite a operação desejada (+, -, *, /): ');
// let resultado = 0;

// if (operacao === '+') {
//     resultado = valor1 + valor2;
// }
// else if (operacao === '-') {
//     resultado = valor1 - valor2;
// } else if (operacao === '*') {
//     resultado = valor1 * valor2;
// } else if (operacao === '/') {
//     resultado = valor1 / valor2;{
//       if (valor2 !== 0) {
//         console.log('Erro: Divisão por zero não é permitida!');
//         resultado = 'Indefinido';
//       }
//     }
// } else {
//     console.log('Operação inválida!');
//     resultado = 'Indefinido';
// }

// if (resultado !== 'Indefinido') {
//     console.log('O resultado é: ' + resultado);
// }

// console.log('O resultado é: ' + resultado);

// console.log('Obrigado por usar a calculadora!');
// console.log('Até a próxima!');

// console.log("Enzo Gabriel".length)
// console.log("Enzo Gabriel".charAt(0))
// console.log("Enzo Gabriel".indexOf('i'))
// console.log("Enzo Gabriel".replace('Enzo', 'Guilherme'))
// console.log("Enzo Gabriel".toUpperCase())
// console.log("Enzo Gabriel".toLowerCase())
// console.log("Enzo Gabriel".substring(1,3))
// console.log("Enzo Gabriel".split(' '))
// console.log("Enzo Gabriel" + "!".trim())

// console.log(Math.ceil(5.1))
// console.log(Math.floor(5.9))
// console.log(Math.round(5.5))
// console.log(Math.random())
// console.log(Math.sqrt(25))
// console.log(Math.pow(2, 3))
// console.log(Math.cbrt(27))
// console.log(Math.abs(-5))

// let date = new Date()
// console.log(date.getDate())
// console.log(date.getMonth()+1)
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.toString()) 

// let date1 = new Date('2025, 7, 5')
// let date2 = new Date('2002, 7 ,5')

// console.log(date1.toString())
// console.log(date2.toString())

// console.log(date1.getTime())
// console.log(date2.getTime())

// let diferenca = date1.getTime() - date2.getTime()
// console.log(diferenca)

// let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
// console.log(dias)

// function reverseString(str){
//     return str.split('').reverse().join('')
// }

// console.log(reverseString('Hello World!'))

// //Formatem uma data
// let date = new Date('2025, 7, 5')

// console.log(date.toLocaleDateString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' }))

// let date = new Date()

// function formatDate(date){
//     let day = date.getDate().toString().padStart(2, '0')
//     let month = (date.getMonth() + 1).toString().padStart(2, '0')
//     let year = date.getFullYear()
//     return `${day}/${month}/${year}`
// }
// console.log(formatDate(date))

// let date = new Date()

// function formatDate(date){
//     return (date.getDate().toString().padStart(2,'0') + '/' + (date.getMonth()+ 1).toString().padStart(2,'0') + '/' + date.getFullYear())
// }

// console.log(formatDate(date))

//gerar numero randomino entre dois valores

// function randomBetween(min,max){
//     return Math.floor(Math.random() *  (max - min + 1) +min)

// }

// console.log(randomBetween(1,18))

//Contme as vogais em um string

function countVowels(str){
    let vowels = str.match(/[aeiou]/gi)
    return vowels ? vowels.length : 0
}

console.log(countVowels('Grêmio tetra campeão da libertadores'))