const readline = require('readline');

// Interface para ler dados do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para fazer perguntas sequenciais
function perguntar(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
    });
  });
}

async function calculadora() {
  try {
    const num1 = parseFloat(await perguntar("Digite o primeiro número: "));
    const operacao = await perguntar("Digite a operação (+, -, *, /): ");
    const num2 = parseFloat(await perguntar("Digite o segundo número: "));

    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Erro: um dos valores não é um número válido.");
    } else {
      switch (operacao) {
        case "+":
          resultado = num1 + num2;
          break;
        case "-":
          resultado = num1 - num2;
          break;
        case "*":
          resultado = num1 * num2;
          break;
        case "/":
          if (num2 === 0) {
            console.log("Erro: divisão por zero.");
            rl.close();
            return;
          }
          resultado = num1 / num2;
          break;
        default:
          console.log("Operação inválida.");
          rl.close();
          return;
      }

      console.log(`Resultado: ${resultado}`);
    }
  } catch (err) {
    console.log("Ocorreu um erro:", err);
  } finally {
    rl.close();
  }
}

calculadora();
