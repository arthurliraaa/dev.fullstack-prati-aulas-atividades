// let fruitList = Array()
// let nameList = ['Arthur','Kanneman','Killua']

// fruitList[0] = 'maça'
// fruitList[1] = 'banana'
// // fruitList['Vermelhas'] = 'morango'

// // console.table(fruitList)
// // console.table(nameList)

// // for (let i = 0; i < nameList.length; i++) {
// //     console.log(nameList[i])
// // }

// fruitList.push('laranja') // Adiciona um elemento no final do array
// fruitList.unshift('pera') // Adiciona um elemento no início do array
// fruitList.pop() // Remove o último elemento do array
// fruitList.shift() // Remove o primeiro elemento do array
// fruitList.splice(1, 1) // Remove o elemento na posição 1 do array
// fruitList.splice(0, 0, 'uva') // Adiciona o elemento 'uva' na posição 0 do array
// let resultado = fruitList.indexOf('uva') // Retorna o índice do elemento 'banana' no array

// console.log(resultado) // Exibe o índice do elemento 'banana' no array
// console.table(fruitList)

// Crie um array chamando 'numeros' contendo 10 valroes numéricos à sua escolha
// Use métodos de array para calcular:
// Asoma de todos os elementos
// A média de todos os elementos
//Gere um novo array com os números pares que contenha apenas os núemros pares de numeros
// Imprima no console
// O array original 'numero'
// A soma
// A média
// o array pares

// let numeros = Array(10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
// let pares = Array()
// let soma = 0
// let media = 0

// for(let i = 0; i < numeros.length; i++){
//     soma += numeros[i]
//     if(numeros[i] % 2 == 0){
//         pares.push(numeros[i])
//     }
// }

// media = soma/numeros.length

// const numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
// const media = soma / numeros.length

// const pares = numeros.filter(num => num % 2 === 0)

// console.table(numeros)
// console.log(media)
// console.log(soma)
// console.table(pares)

// Ordene o array numero em ordemo crescente antes de calcular a soma e a media

// let numeros = [3, 2 ,7, 19, 6, 4, 2, 10]

// for( let i = 0; i < numeros.length; i++){ 
//     for(let j = 0; j < numeros.length; j++){
//         if(numeros[i] < numeros[j]){
//             let temp = numeros[i]
//             numeros[i] = numeros[j]
//             numeros[j] = temp
//         }
//     }

// }

// console.table(numeros)

// Arrays muldidimensionais

let matriz = []

for(let i = 0; i < 3; i++){
    matriz[i] = []
    for(let j = 0; j < 3; j++){
        matriz[i][j] = 10
    }
}

console.table(matriz)