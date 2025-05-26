class Node{
    constructor(valor){
        this.value = value;
        this.next = null;
    }   
}

class Stack{
    constructor(){
        this.top = null; // Inicia a pilha com o topo nulo
    }
    push(value){
        let newNode = new Node(value); // Cria um novo nó com o valor fornecido
        newNode.next = this.top; // O novo nó aponta para o topo atual
        this.top = newNode; // O topo agora é o novo nó
    }
    pop(){
        if(!this.top)  return null; // Se a pilha estiver vazia, retorna nulo
        
        let poppedValue = this.top.value; // Armazena o valor do topo
        this.top = this.top.next; // O topo agora é o próximo nó
        return poppedValue; // Retorna o valor do nó removido
    }

    peek(){
        if(!this.top) return null; // Se a pilha estiver vazia, retorna nulo
        return this.top.value; // Retorna o valor do topo
    }

    isEmpty(){
        return this.top === null; // Retorna verdadeiro se o topo for nulo, indicando que a pilha está vazia
    }

}

function Stack(){
    this.items = []; // Inicializa a pilha como um array vazio
    this.top = -1

    this.push = function(elemnt){
        this.top++
        this.items[this.top] = elemnt; // Adiciona o elemento ao topo da pilha
    }

    this.pop = function(){
        if(this.top <0 ) return null
        let element = this.items[this.top]; // Armazena o elemento do topo
        this.top--; // Decrementa o topo
        return element; // Retorna o elemento removido
    }
}