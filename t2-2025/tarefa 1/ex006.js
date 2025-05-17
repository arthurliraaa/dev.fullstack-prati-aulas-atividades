// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let prompt = require('prompt-sync')()

while(true){ // loop infinito
    let a = Number(prompt('Digite o lado A:'))
    let b = Number(prompt('Digite o valor de B:'))
    let  c = Number(prompt('Digte o valor de C:'))
    if( a < b + c && b < a + c && c <a+ b){
    console.log('✅Os lados formam um triângulo:')
        if (a === b && b === c){ // verifica se todos os lados são iguais
        console.log('Triângulo equilátero')
        }else if (a !== b && b !== c){ // verifica se todos os lados são diferentes
        console.log('Triângulo escaleno')
        }else if( a === b || a === c || b === c){ // verifica se dois lados são iguais
        console.log('Triângulo isósceles')
    }
    break;
    }else{
    console.log('❌Os lados não forma um triângulo, tente novamente')
    }
}

