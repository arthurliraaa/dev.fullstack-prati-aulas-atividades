class Node {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

// Receita de bolo


class car{
    constructor(nome,cor) {
        this.nome = nome;
        this.cor = cor;
    }
}

let car1 = new car('Fusca', 'azul')
let car2 = new car('Civic', 'preto')

console.log(car1)
console.log(car2)

// ------------------ // ------------------ // ------------------ // ------------------ //

let car3 = {
    nome: 'Fusca',
    cor: 'azul' 
}

let car4 ={
    nome: 'Civic',
    cor: 'preto'
}

console.log(car3)
console.log(car4)