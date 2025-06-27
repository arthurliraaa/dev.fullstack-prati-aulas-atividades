function memoize(fn) {
  const cache = {};

  return function(...args) {
    // Criar uma chave única com base nos argumentos (stringify simples)
    const key = JSON.stringify(args);

    if (cache[key] !== undefined) {
      // Retorna resultado cacheado
      return cache[key];
    }

    // Calcula resultado, armazena no cache e retorna
    const resultado = fn.apply(this, args);
    cache[key] = resultado;
    return resultado;
  };
}
// Função simples (ex: fatorial)
function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

const fatorialMemo = memoize(fatorial);

console.log(fatorialMemo(5)); // Calcula e retorna 120
console.log(fatorialMemo(5)); // Retorna instantâneo do cache: 120
