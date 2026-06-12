// Exercício 2.1: Multiplicação em Massa
// const precos = [100, 200, 300]
// const desconto = 0.10
// for (let cont = 0; cont < precos.length; cont++){
//   const valor = precos[cont]
//   const valorArray = aumentoCalc(valor)
//   console.log(valorArray)
// }
// function aumentoCalc(valor) {
//   const aumento = valor * desconto
//   return aumento + valor
// }

// Exercício 2.2: Ordem Inversa -> obs: esse me pegou um pouco, explique pra mim como resolver este undefined!
// era só botar o -1 no mensagens.length
// const mensagens = ["Oi", "Tudo bem?", "Sim"]
// for (let cont = mensagens.length -1 ; cont >= 0; cont--){
//   console.log(mensagens[cont])
// }

// Exercício 2.3: Busca Otimizada
// const ids = [10, 25, 404, 99, 100]
// for (let id = 0; id < ids.length; id++){
//   if (ids[id] === 404) {
//     console.log(ids[id], true)
//     break
//   }
// }
// SEGUNDO MEIO QUE FIZ
// const ids = [10, 25, 404, 99, 100]
// for (let id = 0; id < ids.length && ids[id] !== 404; id++){
//   console.log(ids[id], true)
// }

// Exercício 2.4: Gerador de Tabuada
// GEMINI: "O próprio contador do for pode ser o seu número multiplicador."
// const valorFinal = []
// let numero = 8
// let valoresTabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let contador = 0; contador < valoresTabuada.length; contador++){
//   valorFinal.push(numero * valoresTabuada[contador])
// }
// console.log(valorFinal)

// Exercício 2.5: Somando Apenas os Pares
// GEMINI: "Rodar um reduce inteiro a cada ciclo de um for exige muito processamento. Você pode resolver isso de forma muito mais simples acumulando o valor direto em uma variável."
// const numeros = [1, 2, 3, 4, 5, 6]
// const pares = []
// let somaPar
// for (let cont = 0; cont < numeros.length; cont++){
//   if (numeros[cont] % 2 == 0) {
//     pares.push(numeros[cont])
//     somaPar = pares.reduce((acc, item) => {
//       return acc + item
//     }, 0)
//   }
// }
// console.log(somaPar)

/* 
Sugestão do gemini (ex 2.5)
const numeros = [1, 2, 3, 4, 5, 6]
let somaPar = 0
for (let cont = 0; cont < numeros.length; cont++){
  if (numeros[cont] % 2 == 0) {
    somaPar += numeros[cont]
  }
}
console.log(somaPar) */