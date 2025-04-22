const promt =  requerie('prompt-sync')();

let valor1 = parseFloat(promt('Digite o primeiro valor: '));	 
let valor2 = parseFloat(promt('Digite o segundo valor: '));
let operacao = promt('Digite a operação desejada (+, -, *, /): ');
let resultado = 0;

if (operacao === '+') {
    resultado = valor1 + valor2;
}
else if (operacao === '-') {
    resultado = valor1 - valor2;
} else if (operacao === '*') {
    resultado = valor1 * valor2;
} else if (operacao === '/') {
    resultado = valor1 / valor2;{
      if (valor2 !== 0) {
        console.log('Erro: Divisão por zero não é permitida!');
        resultado = 'Indefinido';
      }
    }
} else {
    console.log('Operação inválida!');
    resultado = 'Indefinido';
}

if (resultado !== 'Indefinido') {
    console.log('O resultado é: ' + resultado);
}

console.log('O resultado é: ' + resultado);

console.log('Obrigado por usar a calculadora!');
console.log('Até a próxima!');