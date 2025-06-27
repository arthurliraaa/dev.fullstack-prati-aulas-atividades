function agruparVendasPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    if (acc[venda.cliente]) {
      acc[venda.cliente] += venda.total;
    } else {
      acc[venda.cliente] = venda.total;
    }
    return acc;
  }, {});
}
const vendas = [
  { cliente: "João", total: 100 },
  { cliente: "Maria", total: 200 },
  { cliente: "João", total: 150 },
  { cliente: "Ana", total: 300 },
  { cliente: "Maria", total: 100 },
];

const totalPorCliente = agruparVendasPorCliente(vendas);

console.log(totalPorCliente);
/* Saída:
{
  João: 250,
  Maria: 300,
  Ana: 300
}
*/
