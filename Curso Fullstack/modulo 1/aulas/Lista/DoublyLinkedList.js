class Node{
  constructor(valor){
    this.valor = valor
    this.anterior = null
    this.proximo = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null // Inicia a lista com o nó cabeça
    this.tail = null  // Inicia a lista com o nó cauda
    this.lenght = 0 // Inicia a lista com o tamanho 0
  }

  inserirInicio(valor){
    let novo = new Node(valor)
    if(!this.head){
      this.head = this.tail = novo
    } else{
      novo.proximo = this.head
      this.head.anterior = novo
      this.head = novo
    }
    this.lenght++
  }

  inserirFim(valor){
    let novo = new Node(valor)
    if(!this.head)
      this.head = this.tail = novo
    else{
      this.tail.proximo = novo
      novo.anterior = this.tail
      this.tail = novo
    }
    this.lenght++

  }

  inserirEm(indice,valor){
    if(indice < 0 || indice > this.lenght) throw new Error("Indice inválido") // Verifica se o indice é válido
    if(indice == 0) return this.inserirInicio(valor)
    if(indice == this.lenght) return this.inserirFim(valor)

    let atual = this.head
    for(let i=0; i<indice-1; i++){
      atual = atual.proximo
    }
    
    let novo = new Node(valor)
    let noAnterior = atual.anterior
    
    noAnterior.proximo = novo
    novo.anterior = noAnterior
    novo.proximo = atual
    atual.anterior = novo

    this.lenght++
  }

  removerEm(indice){
    if(indice < 0 || indice >= this.lenght) throw new Error("Indice inválido") // Verifica se o indice é válido
    let remover
    if(this.lenght == 1){
      remover = this.headthis.head = this.tail = null
    }else if( indice == 0){
      remover = this.head
      this.head = this.head.proximo
      this.head.anterior = null
    }else if (indice == this.lenght - 1){
      remover = this.tail
      this.tail = this.tail.anterior
      this.tail.proximo = null
    }else {
      let atual = this.head
      for(let i=0; i<indice; i++){
        atual = atual.proximo
      }
      remover = atual
      let {anterior, proximo} = atual
      anterior.proximo = proximo
      proximo.anterior = anterior
    }

    this.lenght--
  }
  inserirFrente(valor){

  }
  inserirAtras(valor){

  }
}