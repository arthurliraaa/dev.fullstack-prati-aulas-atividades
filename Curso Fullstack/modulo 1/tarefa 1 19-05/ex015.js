// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

// fibonacci é uma sequência de números onde cada número é a soma dos dois anteriores
// 1 + 1 = 2 -> 1+2 = 3 -> 2+3 = 5 -> 3+5 = 8 -> 5+8 = 13 -> 8+13 = 21

let a = 1
let b = 1
for ( let i = 0; i< 10 ; i++){ // loop for que vai de 0 a 10
    console.log(a)
    let c = a+ b // soma os dois números anteriores
    a = b // o número anterior se torna o atual
    b = c // o número atual se torna o próximo
}


