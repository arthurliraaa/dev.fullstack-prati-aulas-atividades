// Converte array de pares para objeto
function paresParaObjeto(pares) {
  const obj = {};
  for (let i = 0; i < pares.length; i++) {
    const chave = pares[i][0];
    const valor = pares[i][1];
    obj[chave] = valor;
  }
  return obj;
}

// Converte objeto para array de pares
function objetoParaPares(obj) {
  const pares = [];
  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  return pares;
}
const arrayDePares = [
  ['nome', 'João'],
  ['idade', 30],
  ['cidade', 'São Paulo']
];

const obj = paresParaObjeto(arrayDePares);
console.log(obj);
// { nome: 'João', idade: 30, cidade: 'São Paulo' }

const pares = objetoParaPares(obj);
console.log(pares);
// [ ['nome', 'João'], ['idade', 30], ['cidade', 'São Paulo'] ]
