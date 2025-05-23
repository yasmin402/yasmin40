// 1. Soma apenas dos números pares
function somaPares(array) {
  return array.reduce((acc, num) => {
    if (num % 2 === 0) {
      return acc + num;
    }
    return acc;
  }, 0);
}

// 2. Retorna palavras com mais de 4 letras
function palavrasComMaisDe4Letras(arrayPalavras) {
  return arrayPalavras.filter(palavra => palavra.length > 4);
}

// 3. Conta quantas vezes um número aparece no array
function contarNumero(array, numero) {
  return array.reduce((contador, num) => (num === numero ? contador + 1 : contador), 0);
}

// 4. Multiplica todos os elementos do array por um número
function multiplicarArray(array, multiplicador) {
  return array.map(num => num * multiplicador);
}

// 5. Inverte a ordem das palavras na frase
function inverterPalavras(frase) {
  return frase.split(' ').reverse().join(' ');
}