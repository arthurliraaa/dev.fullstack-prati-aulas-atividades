// Importamos a ferramenta 'readline-sync' para fazer perguntas e ler as respostas no terminal.
const readlineSync = require('readline-sync');

// Parte do Jogo de Adivinhação 

// 1. Gerar um número secreto aleatório entre 1 e 100.
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
console.log("Bem-vindo ao Jogo de Adivinhação!");
console.log("Tente adivinhar o número secreto entre 1 e 100.");

let tentativas = 0; // Uma caixinha para contar quantas vezes tentou.
let palpite = 0;    // Uma caixinha para guardar o palpite a cada rodada.

// O loop continua ENQUANTO o seu palpite for DIFERENTE do número secreto.
while (palpite !== numeroSecreto) {
    tentativas++; // Aumentamos a contagem de tentativas a cada vez que o loop roda.

    // Perguntamos ao usuário qual é o palpite.
    const inputPalpite = readlineSync.question(`Tentativa ${tentativas}: Diga o seu palpite? `);

    // Transformamos o texto do palpite em um número.
    palpite = parseInt(inputPalpite);

    // Verificamos se o que foi digitado é um número válido.
    if (isNaN(palpite)) {
        console.log("Isso não é um número válido! Por favor, digite um número.");
        continue; // Volta para o início do loop sem contar como uma tentativa "real" de adivinhação.
    }

    // 3. Dar dicas: "mais alto" ou "mais baixo".
    if (palpite < numeroSecreto) {
        console.log("Muito baixo!");
    } else if (palpite > numeroSecreto) {
        console.log("Muito alto!");
    }
    // Se o palpite for igual ao numeroSecreto, o loop vai parar na próxima checagem do 'while'.
}

// Quando o loop termina, significa que você acertou!
console.log(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas!`);
console.log("Fim do jogo.");