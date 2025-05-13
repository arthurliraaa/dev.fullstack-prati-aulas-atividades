let professor = {
    nome: 'Arthur',
    disciplina: 'Física',
    notas: {
        aluno1: [2, 5],
        aluno2: [3, 2] ,
    }
}

let somaNotas = 0
let numeroEstudantes = 0

for (let estudante in professor.notas) {
    somaNotas += professor.notas[estudante]
    ? professor.notas[estudante].reduce((acc, nota) => acc + nota, 0)/professor.notas[estudante].length 
    : professor.notas[estudante]
    numeroEstudantes++
}

let media = somaNotas / numeroEstudantes
console.log(`A média das notas dos alunos é: ${media}`)
if (media >= 3) {
    console.log( `${professor.nome} está aprovado`)
}else {
    console.log( `${professor.nome} está reprovado`)
}

