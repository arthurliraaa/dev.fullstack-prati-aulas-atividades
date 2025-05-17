let i = 1
let prompt = require('prompt-sync')()
let numero = Number(prompt('Digite um número que desjesa ver a tabuda: '))
console.log(`Tabuada do ${numero}`)
while (i <= 10) {
    let resultado = numero * i
    console.log(`${numero} x ${i} = ${resultado}`)
    i++
}