/* // Exercício 4.1: Dobrando Valores
const numeros = [2, 4, 6]
const numDobrado = numeros.map((num) => {
  return num*2
})
console.log(numDobrado) */

/* // Exercício 4.2: Extraindo Propriedades de Objetos
const usuarios = [
  {
    nome: "Alice",
    idade: 25
  },
  {
    nome: "Bruno",
    idade: 30
  }
]
const apenasUsu = usuarios.map((usu) => {
  return usu.nome
})
console.log(apenasUsu) */

/* // Exercício 4.3: Formatando Strings
const palavras = ["javascript", "react", "node"]
const palMaiu = palavras.map((pal) => {
  return pal.toUpperCase()
})
console.log(palMaiu) */

/* // Exercício 4.4: Conversão de Temperaturas (Lote)
const celsius = [0, 20, 30]
const celToFah = celsius.map((celsiu) => {
  return (celsiu * 9/5 ) + 32
})
console.log(celToFah) */

/* // Exercício 4.5: Adicionando Status ao Produto
const produtos = [
  {
    id: 1,
    nome: "Mouse"
  },
  {
    id: 2,
    nome: "Teclado"
  }
]
const produtosEstoque = produtos.map((prods) => {
  return {...prods, emEstoque: true}
})
console.log(produtosEstoque) */