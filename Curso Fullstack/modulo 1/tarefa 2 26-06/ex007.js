function ordenarNomesPorPreco(produtos) {
  // Ordena os produtos por preço crescente
  let produtosOrdenados = produtos.slice().sort((a, b) => a.preco - b.preco);

  // Retorna só os nomes dos produtos ordenados
  return produtosOrdenados.map(produto => produto.nome);
}
const produtos = [
  { nome: "Camiseta", preco: 29.9 },
  { nome: "Calça", preco: 99.9 },
  { nome: "Boné", preco: 19.9 },
  { nome: "Tênis", preco: 149.9 },
];

const nomesOrdenados = ordenarNomesPorPreco(produtos);

console.log(nomesOrdenados);
// Saída: ["Boné", "Camiseta", "Calça", "Tênis"]
