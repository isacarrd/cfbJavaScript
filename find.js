/* // Exercício 2.1: Busca por ID Único
const usuarios = [
  { id: 1, nome: "Alice" },
  { id: 2, nome: "Bob" },
  { id: 3, nome: "Carlos" }]
const id = usuarios.find((usuario) => usuario.id == 2)
console.log(id) */

/* // Exercício 2.2: O Primeiro Produto Esgotado
const produtos = [
  { nome: "Teclado", qtd: 5 },
  { nome: "Mouse", qtd: 0 },
  { nome: "Monitor", qtd: 0 }]
const prodEsgotado = produtos.find((produto) => produto.qtd == 0)
console.log(prodEsgotado) */

/* // Exercício 2.3: Buscando por Domínio de Email
const emails = ["user@gmail.com", "admin@empresa.com", "rh@empresa.com"]
const emailEmpresarial = emails.find((email) => email.includes('empresa.com'))
console.log(emailEmpresarial) */

/* // Exercício 2.4: Limite de Temperatura
const temperaturas = [35, 42, 50, 85, 90, 40]
const tempCritico = temperaturas.find((temp) => temp > 80)
console.log(tempCritico) */

/* // Exercício 2.5: Busca Inexistente (Comportamento Padrão)
const tarefas = ["Estudar", "Treinar", "Ler"]
const nada = tarefas.find((taref) => taref == "Dormir")
console.log(nada) */