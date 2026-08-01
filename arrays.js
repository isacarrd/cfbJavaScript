/* // Exercício 3.1: A Linha de Produção (Pipeline)
const operacoes = [
  (valor) => {
    let res = 0
    res = valor + 10
    return res
  },
  (valor) => {
    let res = 0
    res = valor * 2
    return res
  },
  (valor) => {
    let res = 0
    res = valor - 5
    return res
  }
]
let valor = 5
for (let operacao of operacoes) {
  valor = operacao(valor)
}
console.log(valor) */

/* // Exercício 3.2: O Motor de Validação
const senha = "senha forte"
const regras = [
  (password) => {
    let boolean
    if (password.length >= 6) {
      boolean = true
    } else {
      boolean = false
    }
    return boolean
  },
  (password) => {
    return !password.includes(" ")
  }
]
if (regras[0](senha) && regras[1](senha)) {
  console.log("Aprovada")
  return true
} else {
  console.log("Recusada")
  return false
} */

/* // Exercício 3.3: Despachante Aleatório
const feiticos = [
  () => {
    return "Fogo!"
  }, 
  () => {
    return "Gelo!"
  },
  () => {
    return "Raio!"
  },
  () => {
    return "Cura!"
  },
  () => {
    return "Vento!"
  },
]
const numeroAleatorio = Math.floor(Math.random() * feiticos.length)
console.log(feiticos[numeroAleatorio]()) */

/* // Exercício 3.4: Ações Condicionais em Lote
const idsPermitidos = [2, 3]
const objetosId = [
  {
    id: 1,
    executar() {
      return `Executandooo id:${this.id}`
    }
  },
  {
    id: 2,
    executar() {
      return `Executandooo id:${this.id}`
    }
  },
  {
    id: 3,
    executar() {
      return `Executandooo id:${this.id}`
    }
  },
  {
    id: 4,
    executar() {
      return `Executandooo id:${this.id}`
    }
  }
]
const filtrandoObjetosIds = objetosId.filter(
  (obj) => 
    idsPermitidos.includes(obj.id)
)
const varreduraCompleta = filtrandoObjetosIds.forEach((obj) => console.log(obj.executar())) */

/* // Exercício 3.5: Transformação em Matriz (Array 2D)
const tabuleiro = [
  [1, 0, 1],
  [0, 2, 0],
  [1, 0, 1]
]
const transformacao = tabuleiro.map((item) => item.map((ite) => ite == 0 ? "vazio" : ite))
console.log(transformacao) */