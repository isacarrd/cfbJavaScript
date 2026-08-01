/* // Exercício 4.1: O Dicionário Bilíngue
const mapa = new Map
mapa.set("Dog", "Cachorro")
mapa.set("Fish", "Peixe")
mapa.set("Ball", "Bola")
mapa.set("Cat", "Gato")
if (mapa.has("Dog")) {
  console.log(`Tradução: ${mapa.get("Dog")}`)
} else {
  console.log("Nada achado.")
} */

/* // Exercício 4.2: Referência de Metadados (Objetos como Chave)
const user1 = { id: 10 }
const user2 = { id: 20 }
const mapa = new Map
mapa.set(user1,"Administrador")
mapa.set(user2, "Administrador")
console.log(mapa.get(user1)) */

/* // Exercício 4.3: Contador de Frequência Otimizado -> esse foi esquisitokkk
const string = "banana"
const mapa = new Map
for (let st of string) {
  if (!mapa.has(st)) {
    mapa.set(st, 1)
  } else {
    mapa.set(st, mapa.get(st) + 1)
  }
}
console.log(mapa) */

/* // Exercício 4.4: Conversor de Sistema (Map para Array)
const modulo = new Map([ 
  ['tema', 'escuro'],
  ['idioma', 'pt-BR']
])
console.log([...modulo]) */

// Exercício 4.5: Sistema de Cache Simples (Memoization) -> achei o enunciado bem confuso
const cache = new Map

function calculoDemorado(valor) {
  if (cache.has(valor)) {
    return cache.get(valor)
  } else {
    let calculo = valor * valor
    cache.set(valor, calculo)
    return `Calculado agora: ${calculo}`
  }
}
console.log(calculoDemorado(5))
