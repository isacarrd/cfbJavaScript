/* // Exercício 2.1: Multiplicador Personalizado
const criarMultiplicador = (numX) => {
  return function (numY) {
    return numX * numY
  }
}
const dobrar = criarMultiplicador(2);
console.log(dobrar(5)) */

/* // Exercício 2.2: Saudação por Período
const configurarSaudacao = (perDia) => {
  return function (nome) {
    return `${perDia}, ${nome}!`
  }
}
const saudarTarde = configurarSaudacao("Boa tarde")
console.log(saudarTarde("João"))
 */

/* // Exercício 2.3: Contador Privado
const criarContador = () => {
  let contador = 0
  return function () {
    contador++
    return contador
  }
}
const meuContador = criarContador()
console.log(meuContador(), meuContador()) */

/* // Exercício 2.4: Validador de Senhas com Tamanho Flexível
const criarValidadorSenha = (tamanhoMinimo) => {
  return function (senha) {
    return senha.length >= tamanhoMinimo ? true : false
  }
}
const validarOitoChars = criarValidadorSenha(8);
console.log(validarOitoChars("12345")) */

/* // Exercício 2.5: Formatador de Moedas
const definirMoeda = (simbMoeda) => {
  return function (valor) {
    return `${simbMoeda} ${valor}`
  }
}
const emDolar = definirMoeda("$")
console.log(emDolar(50)) */