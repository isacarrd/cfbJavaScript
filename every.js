/* // Exercício 3.1: Validação de Maioridade em Grupo
const idades = [22, 25, 19, 30]
console.log(idades.every((idade)=> idade >= 18)) */

/* // Exercício 3.2: Formulário Totalmente Preenchido
const campos = ["Maria", "maria@email.com", "123456", ""]
console.log(campos.every((campo) => campo !== "")) */

/* // Exercício 3.3: Verificação de Estoque Completo
const inventario = [
  { item: "A", estoque: 10 },
  { item: "B", estoque: 5 }
]
const estoques = inventario.every((item) => item.estoque > 0)
console.log(estoques) */

/* // Exercício 3.4: Sistema de Permissões
const usuariosAtivos = [
  { nome: "Ana", admin: true },
  { nome: "Leo", admin: false }
]
console.log(usuariosAtivos.every((usuario) => usuario.admin === true)) */

/* //Exercício 3.5: A Pegadinha do Array Vazio
const pendencias = []
console.log(pendencias.every(num => num > 10)) */