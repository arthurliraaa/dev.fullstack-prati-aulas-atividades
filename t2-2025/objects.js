// let professor = {
//     nome: 'Arthur',
//     disciplina: 'Física',
//     notas: {
//         aluno1: [2, 5],
//         aluno2: [3, 2] ,
//     }
// }

// let somaNotas = 0
// let numeroEstudantes = 0

// for (let estudante in professor.notas) {
//     somaNotas += professor.notas[estudante]
//     ? professor.notas[estudante].reduce((acc, nota) => acc + nota, 0)/professor.notas[estudante].length 
//     : professor.notas[estudante]
//     numeroEstudantes++
// }

// let media = somaNotas / numeroEstudantes
// console.log(`A média das notas dos alunos é: ${media}`)
// if (media >= 3) {
//     console.log( `${professor.nome} está aprovado`)
// }else {
//     console.log( `${professor.nome} está reprovado`)
// }


// function fatorial(n){
//     let calculo = 0
//     if (n === 0){
//         return 1
//     }else{
//         calculo = n * fatorial (n -1)
//         return calculo
//     }
// }

// console.log(fatorial(5))

// eletronicos
//     celulares
//     computadores
//     notebooks
// roupas


const categorias = [{
    id: 1,
    nome: "eletronicos",
    filhos: [
        {id: 2, nome: "celulares", filhos: []},
        {id: 3, nome: "computadores", filhos: [
            {id: 4, nome: "notebooks", filhos: []}
        ]},
    ]
},
{
    id: 5,
    nome: "Roupas",
    filhos: []
}
]
// explique o que é a função exibirCategorias
function exibirCategorias(categorias, nivel = 0) { // categorias é um array de objetos e nivel é um número que indica o nível de profundidade 
    for (let i = 0; i < categorias.length; i++) { // percorre o array de categorias
        const categoria = categorias[i]; // pega a categoria atual
        console.log(" ".repeat(nivel * 2) + categoria.nome); // exibe o nome da categoria com um recuo baseado no nível
        if (categoria.filhos && categoria.filhos.length > 0) { // verifica se a categoria tem filhos
            exibirCategorias(categoria.filhos, nivel + 1); // chama a função recursivamente para exibir os filhos, aumentando o nível
        }
    }
}
exibirCategorias(categorias);