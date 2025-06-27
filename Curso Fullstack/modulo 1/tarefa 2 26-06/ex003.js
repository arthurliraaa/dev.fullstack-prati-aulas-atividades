// Entrada
let frase = "olá olá mundo mundo exemplo apenas teste apenas";

// Separar a frase em palavras
let palavras = frase.split(" ");

// Array para armazenar palavras únicas
let palavrasUnicas = [];

// Percorrer cada palavra
for (let i = 0; i < palavras.length; i++) {
  let palavraAtual = palavras[i];
  let contador = 0;

  // Contar quantas vezes a palavra aparece
  for (let j = 0; j < palavras.length; j++) {
    if (palavras[j] === palavraAtual) {
      contador++;
    }
  }

  // Se apareceu só uma vez, adiciona ao array de únicas
  if (contador === 1) {
    palavrasUnicas.push(palavraAtual);
  } else {
    // senão, não faz nada 
  }
}

// Exibir o resultado
console.log("Palavras que aparecem apenas uma vez:");
console.log(palavrasUnicas);
