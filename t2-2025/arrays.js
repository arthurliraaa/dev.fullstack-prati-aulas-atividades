let fruitList = Array()
let nameList = ['Arthur','Kanneman','Killua']

fruitList[0] = 'maça'
fruitList[1] = 'banana'
// fruitList['Vermelhas'] = 'morango'

// console.table(fruitList)
// console.table(nameList)

// for (let i = 0; i < nameList.length; i++) {
//     console.log(nameList[i])
// }

fruitList.push('laranja') // Adiciona um elemento no final do array
fruitList.unshift('pera') // Adiciona um elemento no início do array
fruitList.pop() // Remove o último elemento do array
fruitList.shift() // Remove o primeiro elemento do array
fruitList.splice(1, 1) // Remove o elemento na posição 1 do array
fruitList.splice(0, 0, 'uva') // Adiciona o elemento 'uva' na posição 0 do array
let resultado = fruitList.indexOf('uva') // Retorna o índice do elemento 'banana' no array

console.log(resultado) // Exibe o índice do elemento 'banana' no array
console.table(fruitList)