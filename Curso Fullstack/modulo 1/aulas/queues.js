class Node{
    constructor(value) {
        this.value = value; // O valor do nó é definido pelo parâmetro fornecido
        this.next = null; // O próximo nó é inicialmente nulo
    }
}	

class Queue{
    constructor(){
        this.front = null; // Inicia a fila com o início nulo
        this.rear = null;  // Inicia a fila com o final nulo
        this.size = 0;   // Inicia a fila com o tamanho 0 
    }

    enqueue(value){
        let newNode = new Node(value) // Cria um novo nó com o valor fornecido
        if(this.rear){ // Se a fila não estiver vazia, o próximo do final atual aponta para o novo nó
            this.rear.next = newNode // O próximo do nó final atual é o novo nó
        }

        this.rear = newNode; // O novo nó se torna o final da fila
        if(!this.front){
            this.front = newNode; // Se a fila estava vazia, o novo nó é também o início
        }
        this.size++; // Incrementa o tamanho da fila
    }
}