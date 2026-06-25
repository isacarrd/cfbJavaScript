// Exercício 4.1: Arrow Function de Linha Única (Fahrenheit)
/* const converterCelsiusParaFahrenheit = (temp) => (temp * 9 / 5) + 32 
console.log(converterCelsiusParaFahrenheit(25)) */

// Exercício 4.2: Callback em Filtro de Arrays
/* const filtroNumero = function (...valores) {
  const maiorQueCem = valores.filter(function (num) {
    return num > 100
  })
  return maiorQueCem
}
console.log(filtroNumero(50, 101, 200, 99)) */

// Exercício 4.3: Arrow Function para Formatação Monetária
/* const formatarMoedaBRL = (val) => `R$ ${val.toFixed(2)}`
console.log(formatarMoedaBRL(45.9)) */

// Exercício 4.4: Executor Dinâmico de Operações (Callback)
/* function executarCalculo(val1, val2, callback) {
  return callback(val1, val2)
}
console.log(executarCalculo(4, 5, (a, b) => a * b)) */

// Exercício 4.5: Arrow Function com Operador Ternário
/* const obterStatusEstoque = (qtd) => qtd > 0 ? "Disponível" : "Esgotado" 
console.log(obterStatusEstoque(0)) */