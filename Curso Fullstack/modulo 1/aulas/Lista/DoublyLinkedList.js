class Node{
  constructor(valor){
    this.valor = valor
    this.anterior = null
    this.proximo = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null
  }

  inserirInicio(valor){
    let novo = new Node(valor)
    novo.proximo = this.head
    if(this.head){
      this.head.anterior = novo
    }
    this.head = novo
  }

  inserirFim(valor){

  }
  inserirFrente(valor){

  }
  inserirAtras(valor){

  }
}