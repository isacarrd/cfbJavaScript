/* // Exercício 2.1: Inversor Sem Array
let string = "JAVASCRIPT"
let novaString = []

for (let contador = string.length -1; contador >= 0; contador--){
  novaString.push(string[contador])
}
console.log(novaString.toString().replaceAll(',', '')) */

/* // Exercício 2.2: O Purificador de Dados
const arraySujo = [1, 2, 2, 3, 4, 4, 5]
const arrayPolido = new Set([1, 2, 2, 3, 4, 4, 5]) // Ué onde entra o spread? Não vi sentidokkk
console.log(arrayPolido) */

/* // Exercício 2.3: O Gerador de Paginação (function*)
function* paginacao(array, tamanho) {
  yield array.slice(0, tamanho)
  yield array.slice(tamanho, 4)
  yield array.slice(4)
}
const array = [1, 2, 3, 4, 5]
const iteratorPag = paginacao(array, 2)
console.log(iteratorPag.next())
console.log(iteratorPag.next())
console.log(iteratorPag.next()) */

/* // Exercício 2.4: O Objeto Customizado Iterável -> ESSE AQUI NÃO VALEU POIS NÃO APRENDI SOBRE ISSO!!! 
const playlist = {
  musicas: [
    "Track 1",
    "Track 2",
    "Track 3"
  ],
  [Symbol.iterator]: function () {
    let indice = 0;
    let self = this;
    return {
      next: function () {
        if (indice < self.musicas.length) {
          return { value: self.musicas[indice++], done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
}
for (let teste of playlist) {
  console.log(teste)
} */

// Exercício 2.5: Fusão de Iteráveis Heterogêneos -> NÃO FAREI