/* // Exercício 1.1: Controle de Acesso VIP
const usuario = {
  nome: "Lucas",
  nivel: "membro"
}
const acessosPermitidos = ["admin", "moderador", "vip"]
const acessoConcedido = acessosPermitidos.some((acc) => acc == usuario.nivel)
console.log("Acesso concedido: " + acessoConcedido) */

/* // Exercício 1.2: Alerta de Estoque Crítico
const estoque = [
  { nome: "Placa de Vídeo", qtd: 15, min: 10 },
  { nome: "Processador", qtd: 4, min: 5 },
  { nome: "Memória", qtd: 20, min: 10 }
]
// console.log(estoque.filter((ele) => ele.qtd < ele.min)) // Só testando
const estoqueCritico = estoque.some((prod) => prod.qtd < prod.min)
console.log("Há um produto com estoque crítico: " + estoqueCritico)
 */

/* // Exercício 1.3: Validação de Formulário Dinâmico
const camposFormulario = [
  { campo: "nome", valor: "Ana", obrigatorio: true },
  { campo: "telefone", valor: "", obrigatorio: false },
  { campo: "email", valor: "", obrigatorio: true }
]
const campos = camposFormulario.some((campo) => { 
  if (campo.obrigatorio && campo.valor === "") {
    return true
  } else {
    return false
  }
})
console.log(campos) */

/* //Exercício 1.4: Busca de Termos Proibidos
const mensagem = "O professor passou um trabalho idiota hoje"
const palavroes = ["merda", "idiota", "burro"]
const arrayMensagem = mensagem.split(' ')
const mensagemFitrada = arrayMensagem.some((msg) => {
  return palavroes.includes(msg)
})
console.log(mensagemFitrada) */

/* // Exercício 1.5: Conflito de Horários na Agenda
const consultas = [
  { inicio: 9, fim: 10 },
  { inicio: 13, fim: 14 }
]
const paciente = { novoInicio: 13, novoFim: 14 }
const consultaMarcada = consultas.some((cons) => cons.inicio == paciente.novoInicio || cons.fim == paciente.novoFim)
console.log(consultaMarcada) */