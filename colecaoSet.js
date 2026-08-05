/* // Exercício 2.1: Sistema de Tags Limpo
const tagsPost = ["javascript", "html", "css", "javascript", "react", "html"]
// Correção do GEMINI -> não está retornando um array definitivo, e só seria Array se [...new Set(tagsPost)]
const tag = new Set([...tagsPost])
console.log(tag) */

/* // Exercício 2.2: Contagem de Letras Únicas
const teste = new Set("PARALELEPIPEDO")
console.log(teste.size) */

/* // Exercício 2.3: Interseção de Amizades (Match)
const userA = ["Bia", "Carlos", "Daniel", "Ester"]
const userB = ["Carlos", "Ester", "Felipe", "Bia"]

const userASet = new Set(userA)

// Correção do GEMINI -> não precisa do operador ternário, pois o .filter() espera um true ou false enquanto o .has() devolve um booleano, sendo assim: const usersFiltrados = userB.filter((user) => userASet.has(user))
const usersFiltrados = userB.filter((user) => {
  return userASet.has(user) ? user : ""
})
console.log(usersFiltrados) */

/* // Exercício 2.4: O Sorteio Justo
let contador = 0
const sorteio = new Set()
while (sorteio.size < 5) {
  contador = Math.floor(Math.random() * 10)
  sorteio.add(contador)
}
console.log(sorteio) */

/* // Exercício 2.5: Visitantes do Final de Semana
const IPSabado = ["IP-1", "IP-2", "IP-3"]
const IPDomingo = ["IP-2", "IP-3", "IP-4", "IP-5"]

const IPSFDS = IPSabado.concat(IPDomingo)

// Correção do GEMINI -> não está retornando um array definitivo, e só seria Array se [...new Set(IPSFDS)]
const ipsTotais = new Set(IPSFDS)
console.log(ipsTotais) */