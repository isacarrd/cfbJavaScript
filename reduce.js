/* // Exercício 1.1: O Fechamento de Caixa
const caixa = [
  { id: 1, valor: 150.50, cancelada: false },
  { id: 2, valor: 300.00, cancelada: true },
  { id: 3, valor: 50.25, cancelada: false }
]
const faturamentoTotal = caixa.reduce((acc, item) => {
  if (!item.cancelada) {
    return acc + item.valor
  }
  return acc
}, 0)
console.log(faturamentoTotal) */

/* // Exercício 1.2: Agrupador de Produtos
const produtos = [
  { nome: "Mouse", setor: "TI" },
  { nome: "Caderno", setor: "Papelaria" },
  { nome: "Teclado", setor: "TI" }
]
const produtosResumidos = produtos.reduce((acc, item) => {
  if (!acc[item.setor]) {
    acc[item.setor] = []
  }
  acc[item.setor].push(item.nome)
  return acc
}, {})

console.log(produtosResumidos) */

/* // Exercício 1.3: Apurador de Votos
const votos = ["React", "Vue", "Angular", "React", "React", "Vue"]
const votosContados = votos.reduce((acc, item) => {
  const repeticoes = votos.filter((voto) => voto === item).length // o filter cria uma 'sublista' com os itens que são iguais ao item atual e o length conta quantos elementos cada sublista possui
  acc[item] = repeticoes
  return acc
}, {}) // o {} indica que o resultado será um objeto
console.log(votosContados) */

/* // Exercício 1.4: O Maior Salário (Comparação Acumulada)
const funcionarios = [
  { nome: "Ana", salario: 4500 },
  { nome: "Carlos", salario: 6000 },
  { nome: "Bia", salario: 5200 }
]
const maiorSalario = funcionarios.reduce((acc, item) => {
  return item.salario > acc.salario ? item : acc
})
console.log(maiorSalario) */

/* // Exercício 1.5: Planificando o Estoque
const galpoes = [
  [10, 20],
  [30, 40],
  [50, 60]
]
const galpaoResumido = galpoes.reduce((acc, item) => {
  let todosItens = []
  acc.forEach((ite) => todosItens.push(ite))
  item.forEach((ite) => todosItens.push(ite))
  return todosItens
})
const galpaoSomado = galpaoResumido.reduce((acc, item) => {
  return acc + item
})
console.log(galpaoSomado)
 */