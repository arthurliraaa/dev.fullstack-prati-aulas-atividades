// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

let prompt = require('prompt-sync')()

while (true){ // loop infinito caso o usuário não escolha a opção de sair
    console.log('Escolha uma opção:') // exibe as opções
    console.log('1. Dizer Olá')
    console.log('2. Dizer boa noite')
    console.log('3. Dizer bom dia')
    console.log('4. Sair')

    let opcao = Number(prompt('Digite a opção desejada: ')) // escolher a opção

    switch (opcao) { // estrutura switch-case para verificar a opção escolhida
        case 1: // caso o usuário escolha a opção 1, o programa exibe "Olá"
            console.log("Olá! 👋");
            break; 
        case 2:
            console.log("Boa noite! 🌙");
            break;
        case 3:
            console.log("Bom dia! ☀️");
            break;
        case 4:
            console.log('Saindo do programa...'); // caso o usuário escolha a opção 4, o programa informa que está saindo
            break;
        default:
            console.log('Opção inválidae! Por favor, escolha uma opção válida.');
            continue; // caso o usuário escolha uma opção inválida, o loop continua
    }
        if (opcao <= 4) {
            break; // caso o usuário escolha uma opção válida, o loop é encerrado
        }
}
