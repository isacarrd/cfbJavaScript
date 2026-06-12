// Exercício 3.1: Extraindo Chaves
// const listaChaves = []
// const carro = { marca: "Ford", modelo: "Ka", ano: 2020 }
// for (let car in carro) {
//   listaChaves.push(car)
// }
// console.log(listaChaves)

// Exercício 3.2: Contagem de Propriedades
// const apiResponse = { id: 1, name: "Leanne", email: "Sincere@april.biz" }
// let contador = 0
// for (let res in apiResponse) {
//   if (res) {
//     contador++
//   }
// }
// console.log(contador)

// Exercício 3.3: Filtro de Notas
// const notas = { matematica: 8, historia: 5, fisica: 9, artes: 6 }
// const novasNotas = {}
// for (let nt in notas) {
//   if (notas[nt] >= 7) {
//     novasNotas[nt] = notas[nt]
//   }
// }
// console.log(novasNotas)

// Exercício 3.4: Formatando String de Configuração
// GEMINI: bastava criar um array vazio antes do for, adicionar os itens com .push e no console usar o .join
// const config = { tema: "dark", idioma: "pt-BR" }
// let c
// for (let conf in config) {
//   if (conf) {
//     c = `${conf}: ${config[conf]}`
//     console.log(c)
//   }
// }

// Exercício 3.5: Clonando Objeto Manualmente -> OBS: COMO POSSO ADICIONÁ-LO NUMA STRING COMO FOI MANDADO?
// GEMINI: com JSON.stringfy(original)
// const original = { a: 1, b: 2 }
// let novoObjeto = {}
// for (let or in original) {
//   if (or) {
//     novoObjeto[or] = original[or]
//   }
// }
// console.log(novoObjeto)
