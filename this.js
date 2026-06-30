/* // Exercício 1.1: O Método do Objeto
const contaBancaria = {
  titular: "Pedro",
  saldo: 40,
  exibirExtrato: function () {
    return `O saldo de ${this.titular} é R$${this.saldo}`
  }
}

console.log(contaBancaria.exibirExtrato()) */

/* // Exercício 1.2: O Problema do Escopo (Arrow Function resolve)
const estudante = {
  nome: "Carlos",
  estudar: function () {
    setTimeout(() => {
      console.log(`${this.nome} está estudando`)
    }, 1000)
  }
}
estudante.estudar() */

/* // Exercício 1.3: this em Classes
class Produto{
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  aplicarDesconto(taxa) {
    let desconto = this.preco * taxa
    return this.preco -= desconto
  }
}
const p1 = new Produto("Notebook", 3000); p1.aplicarDesconto(0.10); console.log(p1.preco) */

/* // Exercício 1.4: Emprestando Métodos (call / bind)
function apresentar() {
  return console.log(`Meu nome é ${this.nome}.`)
}
const usuario = {
  nome: "Fernanda",
}
// apresentar.call(usuario)
// com .bind()
const apresenta = apresentar.bind(usuario)
const apresentaTudo = apresenta() */

/* // Exercício 1.5: Objeto com Múltiplas Propriedades
const carrinho = {
  itens: [10, 20, 30],
  calcularTotal: function () {
    const total = this.itens.reduce((acc, item) => {
      return acc + item
    }, 0)
    return total
  }
}
console.log(carrinho.calcularTotal()) */
