function debounce(fn, delay) {
  let timeoutId;

  return function(...args) {
    // Se já havia um timeout pendente, cancela
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Agenda a execução da função após delay
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Função que será executada
function minhaFuncao() {
  console.log("Executou!", new Date().toLocaleTimeString());
}

// Cria a versão debounceada com delay de 1000 ms (1 segundo)
const funcDebounced = debounce(minhaFuncao, 1000);

// Simula chamadas rápidas
funcDebounced();
funcDebounced();
funcDebounced();
// Só executa "Executou!" 1 segundo após a última chamada
