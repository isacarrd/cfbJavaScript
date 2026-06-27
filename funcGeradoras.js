/* // Exercício 3.1: Gerador de IDs Sequenciais
function* geradorDeIds() {
  let contador = 1
  while (true) {
    yield contador++
  }
}
const id = geradorDeIds()
console.log(id.next().value)
console.log(id.next().value) */

/* // Exercício 3.2: Semáforo
function* semaforo() {
  yield "Verde"
  yield "Amarelo"
  yield "Vermelho"
}
const sinal = semaforo()
console.log(sinal.next().value)
console.log(sinal.next().value)
console.log(sinal.next().value) */

/* // Exercício 3.3: Gerador de Números Pares
function* gerarPares(max) {
  for (let cont = 0; cont <= max; cont++){
    if (cont % 2 === 0) {
      yield cont
    }
  }
}
const pares = gerarPares(4)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value) */

/* // Exercício 3.4: Paginação Simulada (Iterando Array)
function* paginarArray(array) {
  for (let ay of array) {
    yield ay
  }
}
const itens = paginarArray(["A", "B"]);
console.log(itens.next().value)
console.log(itens.next().value) */

/* // Exercício 3.5: Contagem Regressiva
function* contagemRegressiva(inicio) {
  for (let contador = inicio; contador >= 0; contador--){
    yield contador
  }
}
const contagem = contagemRegressiva(2);
console.log(contagem.next().value)
console.log(contagem.next().value)
console.log(contagem.next().value) */