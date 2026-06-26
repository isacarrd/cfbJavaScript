/* // Exercício 1.1: Retorno Implícito de Objeto
const criarUsuario = (nome, email) => ({ nome: nome, email: email })
console.log(criarUsuario("Ana", "ana@email.com")) */

/* // Exercício 1.2: Arrow Function com Parâmetro Único
const saudarUsuario = (nome) => `Olá, ${nome}!`
console.log(saudarUsuario("Lucas")) */

/* // Exercício 1.3: Arrow Function sem Parâmetros
const obterAnoAtual = () => 2026
console.log(obterAnoAtual()) */

/* // Exercício 1.4: Arrow Function em Sort (Ordenação)
let numeros = [10, 50, 20, 80].sort((a, b) => b - a)
console.log(numeros) */

/* // Exercício 1.5: Arrow Function com Parâmetro Padrão
const calcularDesconto = (valor, taxa=0.10) => {
  return valor * taxa
}
console.log(calcularDesconto(100)) */