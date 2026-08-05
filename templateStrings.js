/* // Exercício 3.1: Formatador de Endereços
const cliente = { rua: "Av. Paulista", numero: 1000, cidade: "São Paulo" }
console.log(`Endereço de entrega: ${cliente.rua}, nº ${cliente.numero} - ${cliente.cidade} `) */

/* // Exercício 3.2: Lógica Condicional Embutida (Ternário)
const fatura = { id: 405, status: "paga" }
console.log(`Fatura ${fatura.id}: ${fatura.status == "paga" ? "CONCLUÍDO" : "PENDENTE"}`) */

/* // Exercício 3.3: Executando Funções na Interpolação
function aplicarDesconto(preco) {
  let desconto = 0.10 * preco
  return preco - desconto
}
let valor = 200
console.log(`Preço original: R$${valor}. Preço com desconto: R$${aplicarDesconto(valor)}`) */

/* // Exercício 3.4: Construindo HTML Dinâmico Multi-linhas
const post = { titulo: "Aprendendo JS", autor: "Admin", likes: 15 }
const templateStringHTML = `
<article>
  <h2>${post.titulo}</h2>
  <p>Escrito por: ${post.autor}</p>
  <span>${post.likes} curtidas</span>
</article>
`
console.log(templateStringHTML) */

/* // Exercício 3.5: O Desafio da Renderização de Listas
const itens = ["Arroz", "Feijão", "Carne"]
const templateStringHTML = `
<ul>
  ${itens.map((item) => `<li>${item}</li>`).join('')}
</ul>
`
console.log(templateStringHTML) */