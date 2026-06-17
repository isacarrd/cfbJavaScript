// Exercício 3.1: Média Escolar Dinâmica
/* function calcularMediaAluno(nome, ...valores) {
  let media = 0
  let resultado = 0
  for(let val of valores) {
    media += val
    resultado = media/valores.length
  }
  return `O aluno ${nome} teve média ${resultado}`
}
console.log(calcularMediaAluno("Carlos", 8, 9, 7)) */

// Exercício 3.2: Gerador de Rotas Hierárquicas
/* function construirCaminhoUrl(...url) {
  return url.join("/")
}
console.log(construirCaminhoUrl("https://api.com", "v1", "usuarios", "perfil")) */

// Exercício 3.3: Acumulador de Gastos Variáveis
/* function somarDespesasSemanais(...valores) {
  let despesas = 0
  for (let val of valores) {
    despesas += val
  }
  return despesas
}
console.log(somarDespesasSemanais(50, 120.50, 30)) */

// Exercício 3.4: Prefixador de Logs em Lote
/* function registrarLogsEmLote(severidade, ...mensagemErro) {
  const mensagem = mensagemErro.map((msg) => {
    return `[${severidade}] ${msg}`
  })
  return mensagem
}
console.log(registrarLogsEmLote("ERROR", "Falha de rede", "Timeout de requisição")) */

// Exercício 3.5: Filtro Combinado de Tags
/* function formatarFiltrosBusca(categoria, ...tags) {
  return `${categoria} - ${tags.join(" - ")}`
}
console.log(formatarFiltrosBusca("Eletrônicos", "Teclado", "Sem Fio", "Mecânico")) */