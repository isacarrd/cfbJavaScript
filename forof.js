// Exercício 4.1: Soma do Carrinho
// const valores = [15.50, 20.00, 30.50]
// let valor = 0
// for (let val of valores) {
//   valor += val
// }
// console.log(valor.toFixed(2))

// Exercício 4.2: Filtrando Palavras Longas
// const palavras = ["sol", "chuva", "tempestade", "mar", "montanha"]
// let pal5 = []
// for (let pala of palavras) {
//   if (pala.length > 5) {
//     pal5.push(pala)
//   }
// }
// console.log(pal5)

// Exercício 4.3: Contagem de Vogais
// GEMINI: seria melhor criar um array de vogais (a, e, i, o u) e verificar no if com .includes!
// const frase = "javascript é incrivel"
// let contagem = 0
// for (let fr of frase) {
//   if (fr === 'a' || fr === 'e' || fr === 'e' || fr === 'i' || fr === 'o' || fr === 'u') {
//     contagem++
//     console.log(fr)
//   }
// }
// console.log(contagem)

// Exercício 4.4: Padronização de Nomes
// const nomes = ["ana", "calors", "bia"]
// const nomesForm = []
// for (let nm of nomes) {
//   let formatacao = nm.charAt(0).toUpperCase() + nm.slice(1)
//   nomesForm.push(formatacao)
// }
// console.log(nomesForm)

// Exercício 4.5: Busca em Array de Objetos
// GEMINI: o enunciava que queria apenas o PRIMEIRO produto, ou seja, quando achasse, o resto não seria mais lido. Uso do break!
// const produtos = [{ nome: "Teclado", estoque: 5 }, { nome: "Mouse", estoque: 0 }, { nome: "Monitor", estoque: 2 }]
// for (let prod of produtos) {
//   if (prod.estoque === 0) {
//     console.log(prod.nome)
//   }
// }