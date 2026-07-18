/* // Exercício 3.1: Apenas os Positivos
const numeros = [-5, 10, -2, 42, 0]
const maioresZero = numeros.filter((num) => num > 0)
console.log(maioresZero) */

/* // Exercício 3.2: Nomes Curtos
const nomes = ["Ana", "Fernando", "Bia", "Guilherme"]
const tresLetras = nomes.filter((nome) => nome.length <= 3)
console.log(tresLetras) */

/* // Exercício 3.3: Produtos em Estoque
const estoque = [
  { nome: "Caderno", qtd: 5 },
  { nome: "Caneta", qtd: 0 },
  { nome: "Borracha", qtd: 10 }
]
const quantMaiorZero = estoque.filter((quant) => quant.qtd > 0)
console.log(quantMaiorZero) */

/* // Exercício 3.4: Usuários Premium
const usuarios = [
  { id: 1, plano: "free" },
  { id: 2, plano: "premium" },
  { id: 3, plano: "premium" }
]
const planoPremium = usuarios.filter((plano) => plano.plano == "premium")
console.log(planoPremium) */

/* // Exercício 3.5: Sistema de Busca Simples
const linguagens = ["JavaScript", "Python", "Java", "C++", "TypeScript"]
const termoBusca = "Java"
const buscaLing = linguagens.filter((lang) => lang.includes(termoBusca))
console.log(buscaLing) */