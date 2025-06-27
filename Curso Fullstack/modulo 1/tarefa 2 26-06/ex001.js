// É importante importar a ferramenta 'readline-sync' que nos ajuda a perguntar coisas no terminal.
const readlineSync = require('readline-sync');

/**
 * Esta função verifica se uma data é real e válida.
 * Ela recebe o dia, o mês e o ano.
 * Retorna 'true' se a data existe de verdade e 'false' se não.
 */

function ehDataValida(dia, mes, ano) {
    // Primeiro, checa se o mês está entre 1 e 12.
    if (mes < 1 || mes > 12) {
        return false; // Se não estiver, a data já é inválida.
    }
    // Depois, checa se o dia está entre 1 e 31.
    if (dia < 1 || dia > 31) {
        return false; // Se não estiver, a data já é inválida.
    }

    let diasNoMes; // Uma variável para guardar quantos dias aquele mês específico tem.

    // Se o mês for fevereiro (mês 2)...
    if (mes === 2) {
        // Precisamos verificar se o ano é bissexto!
        // Um ano é bissexto se (é divisível por 4 E não é divisível por 100) OU é divisível por 400.
        const isAnoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
        diasNoMes = isAnoBissexto ? 29 : 28; // Se for bissexto, fevereiro tem 29 dias, senão, 28.
    }
    // Se o mês for abril (4), junho (6), setembro (9) ou novembro (11)...
    else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        diasNoMes = 30; // Esses meses têm 30 dias.
    }
    // Para todos os outros meses (janeiro, março, maio, julho, agosto, outubro, dezembro)...
    else {
        diasNoMes = 31; // Esses meses têm 31 dias.
    }

    // Por fim, verificamos se o dia que o usuário digitou é menor ou igual ao número de dias que o mês realmente tem.
    return dia <= diasNoMes;
}

// A função 'question' do readlineSync pede uma entrada e espera a resposta.
const inputDia = readlineSync.question("Digite o dia (ex: 15): ");
const inputMes = readlineSync.question("Digite o mes (ex: 03): ");
const inputAno = readlineSync.question("Digite o ano (ex: 2024): ");

// As entradas vêm como texto, então precisamos transformá-las em números inteiros.
const dia = parseInt(inputDia);
const mes = parseInt(inputMes);
const ano = parseInt(inputAno);

// Vamos checar se o que o usuário digitou realmente virou um número.
if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
    console.log("Erro! Por favor, digite APENAS números para o dia, mês e ano.");
} else {
    // Se tudo for número, chamamos nossa função para validar a data.
    if (ehDataValida(dia, mes, ano)) {
        console.log(`A data ${dia}/${mes}/${ano} é uma data VÁLIDA. :)`);
    } else {
        console.log(`A data ${dia}/${mes}/${ano} NÃO é uma data válida. :(`);
    }
}