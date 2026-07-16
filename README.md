<h1> 🚀 Meus exercícios de JavaScript!</h1>

Materiais extraídos das aulas do CFB Cursos, disponível nesta playlist: <a href="https://youtube.com/playlist?list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&si=-NNE3HMXr8x6yZIr"> Curso de JavaScript</a>.

**Prompt:**

```
Estou revisitando a estrutura básica de JavaScript para refrescar a memória, desejo fazer 5 exercícios de cada tópico que será passado nos próximos prompts.

A estrutura de exercícios será: situação problema, teste e resposta esperada. A cada problema resolvido irei lhe passar um arquivo com o que foi feito por mim para ser avaliado.

Lista {numero da lista}, 5 exercícios de cada:
 - Tópico 
 - Tópico 
 - Tópico 
 - ...
```

- Cada lista está em ordem crescente, _Lista 1, Lista 2_...
- Estou utilizando o Gemini e o NotebookLM.

<br>

<h2> 🛠️ Exercícios: </h2>

### Operador Spread (`...`)

**Exercício 1.1: Mesclando Turmas**

* **Situação Problema:** Você tem duas listas de alunos cadastrados em turnos diferentes (manhã e tarde) e precisa criar uma única lista com todos os alunos do dia para um evento. Use o spread operator para juntá-las.
* **Teste:** `manha = ["Ana", "João"]`, `tarde = ["Maria", "Pedro"]`
* **Resposta Esperada:** `["Ana", "João", "Maria", "Pedro"]`

**Exercício 1.2: Atualizando o Perfil do Usuário**

* **Situação Problema:** Um usuário atualizou seu perfil no aplicativo. Você tem o objeto original dele e precisa criar um **novo** objeto que mantenha todas as informações antigas, mas adicione a propriedade `status: "ativo"` e sobrescreva a `idade` para o novo valor.
* **Teste:** `usuario = { nome: "Carlos", idade: 28, email: "c@c.com" }`, nova idade: `30`.
* **Resposta Esperada:** `{ nome: "Carlos", idade: 30, email: "c@c.com", status: "ativo" }`

**Exercício 1.3: Quebrando uma String**

* **Situação Problema:** Para criar um componente de animação letra por letra (tipo "máquina de escrever"), você precisa transformar uma palavra (string) em um array onde cada posição é uma letra.
* **Teste:** `palavra = "React"`
* **Resposta Esperada:** `["R", "e", "a", "c", "t"]`

**Exercício 1.4: Encontrando o Maior Valor**

* **Situação Problema:** Você precisa achar a temperatura máxima registrada em uma semana. O método `Math.max()` do JavaScript aceita apenas números separados por vírgula, não um array inteiro. Resolva isso usando spread.
* **Teste:** `temperaturas = [22, 28, 35, 19, 31]`
* **Resposta Esperada:** `35`

**Exercício 1.5: Cópia Segura (Evitando Mutação)**

* **Situação Problema:** No React, alterar um array original (mutação) pode causar bugs de renderização. Você tem um carrinho de compras. Crie uma cópia exata dele usando spread e, em seguida, adicione "Uva" **apenas na cópia**, deixando o original intacto.
* **Teste:** `carrinho = ["Maçã", "Banana"]`
* **Resposta Esperada:** Cópia = `["Maçã", "Banana", "Uva"]`, Original = `["Maçã", "Banana"]`

---

### Loop `for` (Tradicional)

**Exercício 2.1: Multiplicação em Massa**

* **Situação Problema:** Devido a uma regra de negócio, todos os preços de um array de produtos sofrerão um aumento de 10%. Use um loop `for` clássico (com índice) para criar um novo array com os preços atualizados.
* **Teste:** `precos = [100, 200, 300]`
* **Resposta Esperada:** `[110, 220, 330]`

**Exercício 2.2: Ordem Inversa**

* **Situação Problema:** Você recebeu um log de mensagens antigas, mas precisa exibi-las na tela da mais recente (última) para a mais antiga (primeira). Crie um loop `for` que leia o array de trás para frente.
* **Teste:** `mensagens = ["Oi", "Tudo bem?", "Sim"]`
* **Resposta Esperada:** `["Sim", "Tudo bem?", "Oi"]` (retornado em um novo array ou impresso na ordem correta).

**Exercício 2.3: Busca Otimizada**

* **Situação Problema:** Verifique se um determinado ID (ex: 404) existe no sistema. O loop deve parar IMEDIATAMENTE (usando `break`) assim que encontrar o valor, para economizar processamento.
* **Teste:** `ids = [10, 25, 404, 99, 100]`, alvo: `404`
* **Resposta Esperada:** Retornar/imprimir `true` (e garantir na lógica que os números 99 e 100 não cheguem a ser lidos).

**Exercício 2.4: Gerador de Tabuada**

* **Situação Problema:** Um app de matemática para crianças precisa gerar a tabuada de um número X (de 1 a 10). Crie um `for` que gere esses valores e os guarde em um array.
* **Teste:** Número `7`
* **Resposta Esperada:** `[7, 14, 21, 28, 35, 42, 49, 56, 63, 70]`

**Exercício 2.5: Somando Apenas os Pares**

* **Situação Problema:** Dado um array de números aleatórios, use o `for` clássico para percorrer o array e somar **apenas** os números que são pares.
* **Teste:** `numeros = [1, 2, 3, 4, 5, 6]`
* **Resposta Esperada:** `12` (pois 2 + 4 + 6 = 12)

---

### Loop `for...in`

**Exercício 3.1: Extraindo Chaves**

* **Situação Problema:** Você recebeu um objeto de um carro, mas precisa saber exatamente quais foram os campos preenchidos. Use `for...in` para gerar um array contendo apenas os nomes das chaves (propriedades) do objeto.
* **Teste:** `carro = { marca: "Ford", modelo: "Ka", ano: 2020 }`
* **Resposta Esperada:** `["marca", "modelo", "ano"]`

**Exercício 3.2: Contagem de Propriedades**

* **Situação Problema:** Um objeto de resposta de API chegou dinamicamente e você não sabe o tamanho dele. Crie um contador que utilize `for...in` para descobrir quantas propriedades existem dentro desse objeto.
* **Teste:** `apiResponse = { id: 1, name: "Leanne", email: "Sincere@april.biz" }`
* **Resposta Esperada:** `3`

**Exercício 3.3: Filtro de Notas**

* **Situação Problema:** Você tem um boletim em formato de objeto. Crie um **novo objeto** contendo apenas as matérias (e suas respectivas notas) onde o aluno tirou nota igual ou maior que 7. Use `for...in`.
* **Teste:** `notas = { matematica: 8, historia: 5, fisica: 9, artes: 6 }`
* **Resposta Esperada:** `{ matematica: 8, fisica: 9 }`

**Exercício 3.4: Formatando String de Configuração**

* **Situação Problema:** Você precisa exibir as configurações atuais do usuário em uma única string contínua, no formato "chave: valor, chave: valor". (Pode desconsiderar a vírgula no último item se quiser simplificar).
* **Teste:** `config = { tema: "dark", idioma: "pt-BR" }`
* **Resposta Esperada:** `"tema: dark, idioma: pt-BR"`

**Exercício 3.5: Clonando Objeto Manualmente**

* **Situação Problema:** Sem usar o Spread Operator nem `Object.assign`, use o `for...in` para iterar sobre um objeto e copiar manualmente suas chaves e valores para um novo objeto vazio.
* **Teste:** `original = { a: 1, b: 2 }`
* **Resposta Esperada:** `novoObjeto = { a: 1, b: 2 }` (devem ter o mesmo conteúdo, mas ocupando espaços diferentes na memória).

---

### Loop `for...of`

**Exercício 4.1: Soma do Carrinho**

* **Situação Problema:** O `for...of` é excelente para iterar arrays diretamente pelos valores. Calcule o total a pagar de um carrinho de compras usando este loop.
* **Teste:** `valores = [15.50, 20.00, 30.50]`
* **Resposta Esperada:** `66.00`

**Exercício 4.2: Filtrando Palavras Longas**

* **Situação Problema:** Percorra um array de palavras com `for...of` e guarde em um novo array apenas as palavras que possuem mais de 5 letras.
* **Teste:** `palavras = ["sol", "chuva", "tempestade", "mar", "montanha"]`
* **Resposta Esperada:** `["tempestade", "montanha"]`

**Exercício 4.3: Contagem de Vogais**

* **Situação Problema:** Como as strings em JavaScript também são iteráveis, você pode usar o `for...of` nelas. Descubra quantas vogais (a, e, i, o, u) existem em uma frase.
* **Teste:** `frase = "javascript é incrivel"` (ignore acentos para simplificar, verifique apenas as letras base: a, e, i, o, u).
* **Resposta Esperada:** `6` (a, a, i, i, e) - *Nota: o 'é' pode ser ignorado no teste básico, conte apenas as vogais sem acento.*

**Exercício 4.4: Padronização de Nomes**

* **Situação Problema:** Você tem uma lista de nomes todo em letras minúsculas. Use `for...of` para iterar e criar uma nova lista onde todos os nomes estejam com a primeira letra maiúscula (Capitalized).
* **Teste:** `nomes = ["ana", "carlos", "bia"]`
* **Resposta Esperada:** `["Ana", "Carlos", "Bia"]`

**Exercício 4.5: Busca em Array de Objetos**

* **Situação Problema:** Em um array de objetos (onde cada objeto é um produto), use o `for...of` para encontrar o nome do PRIMEIRO produto que está com estoque zerado (`estoque === 0`).
* **Teste:** `produtos = [{nome: "Teclado", estoque: 5}, {nome: "Mouse", estoque: 0}, {nome: "Monitor", estoque: 2}]`
* **Resposta Esperada:** `"Mouse"`
---

### Funções (Básicas / Sem Retorno / Procedurais)
**Exercício 1.1: Boas-vindas ao Sistema**

* **Situação Problema:** Crie uma função chamada `inicializarApp` que, quando executada, exibe uma mensagem fixa simulando a inicialização bem-sucedida de um sistema no terminal de logs.
* **Teste:** Executar `inicializarApp()`
* **Resposta Esperada:** No console: `"Sistema inicializado com sucesso. Aguardando autenticação..."`

**Exercício 1.2: Alerta de Falha Crítica**

* **Situação Problema:** Crie uma função chamada `emitirAlertaConexao` que avisa o time de desenvolvimento que a comunicação com o servidor falhou.
* **Teste:** Executar `emitirAlertaConexao()`
* **Resposta Esperada:** No console: `"ERRO CRÍTICO: Falha na conexão com o servidor de dados!"`

**Exercício 1.3: Divisor de Logs**

* **Situação Problema:** Para fins de organização visual nos testes do terminal, crie uma função chamada `imprimirDivisor` que apenas renderiza uma linha contendo exatamente 20 hifens (`-`).
* **Teste:** Executar `imprimirDivisor()`
* **Resposta Esperada:** No console: `"--------------------"`

**Exercício 1.4: Notificação de Sessão Expirada**

* **Situação Problema:** Desenvolva a função `notificarTimeout` para alertar em tela/console que o tempo limite de inatividade do usuário foi atingido.
* **Teste:** Executar `notificarTimeout()`
* **Resposta Esperada:** No console: `"Sessão expirada por inatividade. Por favor, refaça o login."`

**Exercício 1.5: Logs de Persistência**

* **Situação Problema:** Crie uma função `confirmarSalvamentoLocal` que simula o encerramento de um processo de gravação de dados em cache/memória do dispositivo.
* **Teste:** Executar `confirmarSalvamentoLocal()`
* **Resposta Esperada:** No console: `"Modificações gravadas com sucesso no armazenamento local."`

---

### Funções com Retorno (`return`)
**Exercício 2.1: Conversão Cambial Fixa**

* **Situação Problema:** Você precisa converter valores de dólar para real baseado em uma taxa fixa de mercado de `5.50`. Crie uma função `converterDolarParaReal` que receba o valor em dólar e **retorne** o valor final calculado.
* **Teste:** `converterDolarParaReal(10)`
* **Resposta Esperada:** `55`

**Exercício 2.2: Verificação de Campo Vazio**

* **Situação Problema:** Crie uma função `isCampoVazio` que receba uma string de entrada (como o input de um formulário) e retorne um booleano (`true` se a string estiver vazia ou contiver apenas espaços, e `false` caso contrário).
* **Teste:** `isCampoVazio("   ")`
* **Resposta Esperada:** `true`

**Exercício 2.3: Calculadora de Cupom de Desconto**

* **Situação Problema:** Um e-commerce está aplicando uma campanha promocional de 15% de desconto fixo. Crie a função `aplicarCupom15` que recebe o valor bruto da compra e retorna o valor líquido com o desconto deduzido.
* **Teste:** `aplicarCupom15(200)`
* **Resposta Esperada:** `170`

**Exercício 2.4: Validador de Maioridade**

* **Situação Problema:** Para restringir o acesso a certas áreas, crie uma função `podeAcessarConteudo` que recebe a idade do usuário e retorna `true` se ele tiver 18 anos ou mais, ou `false` se for menor de idade.
* **Teste:** `podeAcessarConteudo(17)`
* **Resposta Esperada:** `false`

**Exercício 2.5: Formatador de Nomes de Arquivos**

* **Situação Problema:** Crie uma função chamada `gerarNomeArquivoTemp` que recebe o ID numérico de um relatório e retorna uma string padronizada no formato: `"temp_id_[NUMERO].json"`.
* **Teste:** `gerarNomeArquivoTemp(104)`
* **Resposta Esperada:** `"temp_id_104.json"`

---

### Funções Parametrizadas + REST (`...args`)
**Exercício 3.1: Média Escolar Dinâmica**

* **Situação Problema:** Um professor pode lançar quantas notas quiser no sistema. Crie uma função `calcularMediaAluno` que recebe o nome do aluno como primeiro parâmetro e, usando o operador REST, recolhe todas as notas inseridas a seguir. A função deve calcular a média e retornar uma frase formatada.
* **Teste:** `calcularMediaAluno("Carlos", 8, 9, 7)`
* **Resposta Esperada:** `"O aluno Carlos teve média 8"`

**Exercício 3.2: Gerador de Rotas Hierárquicas**

* **Situação Problema:** Crie uma função `construirCaminhoUrl` para gerar endpoints dinâmicos. Ela deve receber a URL base do servidor como primeiro parâmetro e um número indefinido de subdiretórios (slugs) via REST, retornando a rota completa unida por barras `/`.
* **Teste:** `construirCaminhoUrl("https://api.com", "v1", "usuarios", "perfil")`
* **Resposta Esperada:** `"https://api.com/v1/usuarios/perfil"`

**Exercício 3.3: Acumulador de Gastos Variáveis**

* **Situação Problema:** Crie uma função `somarDespesasSemanais` que recebe uma quantidade livre de lançamentos financeiros via operador REST e retorna o valor total somado de todas as despesas passadas.
* **Teste:** `somarDespesasSemanais(50, 120.50, 30)`
* **Resposta Esperada:** `200.5`

**Exercício 3.4: Prefixador de Logs em Lote**

* **Situação Problema:** Crie uma função `registrarLogsEmLote` que recebe a tag de severidade do log (ex: `"ERROR"`) no primeiro parâmetro e uma lista dinâmica de mensagens de erro via REST. Ela deve retornar um novo array contendo todas as mensagens prefixadas pela tag informada.
* **Teste:** `registrarLogsEmLote("ERROR", "Falha de rede", "Timeout de requisição")`
* **Resposta Esperada:** `["[ERROR] Falha de rede", "[ERROR] Timeout de requisição"]`

**Exercício 3.5: Filtro Combinado de Tags**

* **Situação Problema:** Crie a função `formatarFiltrosBusca` que recebe a categoria principal de busca e uma quantidade indefinida de sub-filtros (tags) via REST. O retorno deve ser uma string única onde todos os elementos estão separados por um hífen centralizado (`-`).
* **Teste:** `formatarFiltrosBusca("Eletrônicos", "Teclado", "Sem Fio", "Mecânico")`
* **Resposta Esperada:** `"Eletrônicos - Teclado - Sem Fio - Mecânico"`

---

### Funções Anônimas / Arrow Functions

**Exercício 4.1: Arrow Function de Linha Única (Fahrenheit)**

* **Situação Problema:** Crie uma Arrow Function compacta (com retorno implícito, sem o uso de chaves `{}` ou da palavra `return`) associada a uma constante chamada `converterCelsiusParaFahrenheit` para realizar o cálculo matemático `(C * 9/5) + 32`.
* **Teste:** `converterCelsiusParaFahrenheit(25)`
* **Resposta Esperada:** `77`

**Exercício 4.2: Callback em Filtro de Arrays**

* **Situação Problema:** Dado um array de IDs de transações, utilize o método nativo `.filter()` do JavaScript combinado com uma **função anônima** interna para retornar apenas os identificadores numéricos que forem maiores do que `100`.
* **Teste:** Filtrar o array `[50, 101, 200, 99]` utilizando a função anônima dentro do método.
* **Resposta Esperada:** `[101, 200]`

**Exercício 4.3: Arrow Function para Formatação Monetária**

* **Situação Problema:** Crie uma arrow function de retorno implícito chamada `formatarMoedaBRL` que receba um número e devolva uma string contendo o prefixo realístico `"R$ "` acompanhado do valor com duas casas decimais fixas.
* **Teste:** `formatarMoedaBRL(45.9)`
* **Resposta Esperada:** `"R$ 45.90"`

**Exercício 4.4: Executor Dinâmico de Operações (Callback)**

* **Situação Problema:** Crie uma função tradicional chamada `executarCalculo` que aceita dois números e uma função de callback no terceiro parâmetro. Ao invocar `executarCalculo`, passe uma **arrow function anônima** no argumento do callback para efetuar a multiplicação dos dois números passados.
* **Teste:** `executarCalculo(4, 5, (a, b) => a * b)`
* **Resposta Esperada:** `20`

**Exercício 4.5: Arrow Function com Operador Ternário**

* **Situação Problema:** Crie uma arrow function chamada `obterStatusEstoque` que verifique a quantidade de um produto. Utilizando a sintaxe de retorno implícito acoplada a um **operador ternário**, a função deve retornar `"Disponível"` se a quantidade for maior que zero, e `"Esgotado"` caso contrário.
* **Teste:** `obterStatusEstoque(0)`
* **Resposta Esperada:** `"Esgotado"`

---

### Arrow Function (Casos Específicos)

**Exercício 1.1: Retorno Implícito de Objeto**

* **Situação Problema:** Você precisa criar uma função para cadastrar usuários rapidamente. Crie uma arrow function chamada `criarUsuario` que recebe `nome` e `email`. Ela deve usar o retorno implícito (sem a palavra `return`) para devolver um objeto com essas propriedades. *(Dica: lembre-se do uso dos parênteses ao redor das chaves).*
* **Teste:** `criarUsuario("Ana", "ana@email.com")`
* **Resposta Esperada:** `{ nome: "Ana", email: "ana@email.com" }`

**Exercício 1.2: Arrow Function com Parâmetro Único**

* **Situação Problema:** Crie uma arrow function chamada `saudarUsuario` que recebe apenas um parâmetro (`nome`). Como há apenas um parâmetro, omita os parênteses em volta dele na declaração. A função deve retornar a string `"Olá, [nome]!"`.
* **Teste:** `saudarUsuario("Lucas")`
* **Resposta Esperada:** `"Olá, Lucas!"`

**Exercício 1.3: Arrow Function sem Parâmetros**

* **Situação Problema:** Crie uma arrow function chamada `obterAnoAtual` que não recebe nenhum parâmetro e retorna o número `2026` (ou o ano que preferir).
* **Teste:** `obterAnoAtual()`
* **Resposta Esperada:** `2026`

**Exercício 1.4: Arrow Function em Sort (Ordenação)**

* **Situação Problema:** Você tem um array de pontuações e precisa ordená-lo do maior para o menor. Use o método `.sort()` passando uma arrow function diretamente dentro dele para definir a regra de ordenação.
* **Teste:** `[10, 50, 20, 80].sort(...)`
* **Resposta Esperada:** `[80, 50, 20, 10]`

**Exercício 1.5: Arrow Function com Parâmetro Padrão**

* **Situação Problema:** Crie uma arrow function chamada `calcularDesconto` que recebe `valor` e `taxa`. Se a `taxa` não for passada no momento da chamada, ela deve assumir o valor padrão de `0.10` (10%).
* **Teste:** `calcularDesconto(100)`
* **Resposta Esperada:** `10` (pois 100 * 0.10)

---

### Funções Aninhadas (Closures)

**Exercício 2.1: Multiplicador Personalizado**

* **Situação Problema:** Crie uma função chamada `criarMultiplicador` que recebe um número `x`. Ela deve retornar uma **nova função** que recebe um número `y` e retorna a multiplicação de `x * y`.
* **Teste:** `const dobrar = criarMultiplicador(2); dobrar(5)`
* **Resposta Esperada:** `10`

**Exercício 2.2: Saudação por Período**

* **Situação Problema:** Crie uma função `configurarSaudacao` que recebe um período do dia (ex: `"Bom dia"`). Ela deve retornar uma função que recebe o nome de uma pessoa e junta os dois.
* **Teste:** `const saudarTarde = configurarSaudacao("Boa tarde"); saudarTarde("João")`
* **Resposta Esperada:** `"Boa tarde, João!"`

**Exercício 2.3: Contador Privado**

* **Situação Problema:** Crie uma função `criarContador`. Dentro dela, declare uma variável `contador = 0`. A função deve retornar outra função que, quando chamada, incrementa o contador em 1 e retorna o valor atualizado.
* **Teste:** `const meuContador = criarContador(); meuContador(); meuContador();` (chamar duas vezes)
* **Resposta Esperada:** Na primeira chamada retorna `1`, na segunda retorna `2`.

**Exercício 2.4: Validador de Senhas com Tamanho Flexível**

* **Situação Problema:** Crie uma função `criarValidadorSenha` que recebe o `tamanhoMinimo`. Ela retorna uma função que testa se uma senha informada tem o tamanho exigido, retornando `true` ou `false`.
* **Teste:** `const validarOitoChars = criarValidadorSenha(8); validarOitoChars("12345")`
* **Resposta Esperada:** `false`

**Exercício 2.5: Formatador de Moedas**

* **Situação Problema:** Crie uma função `definirMoeda` que recebe o símbolo da moeda (`"R$"` ou `"$"`). Ela retorna uma função que recebe um valor numérico e devolve a string formatada.
* **Teste:** `const emDolar = definirMoeda("$"); emDolar(50)`
* **Resposta Esperada:** `"$ 50"`

---

### Funções Geradoras (`function*` e `yield`)

**Exercício 3.1: Gerador de IDs Sequenciais**

* **Situação Problema:** Crie uma função geradora chamada `geradorDeIds`. Ela deve ter um loop infinito (`while(true)`) que devolve (com `yield`) números inteiros sequenciais começando em 1.
* **Teste:** `const id = geradorDeIds(); id.next().value; id.next().value;`
* **Resposta Esperada:** A primeira chamada devolve `1`, a segunda devolve `2`.

**Exercício 3.2: Semáforo**

* **Situação Problema:** Crie uma função geradora chamada `semaforo`. Ela deve emitir (yield) a sequência `"Verde"`, `"Amarelo"` e `"Vermelho"`, e então a função termina.
* **Teste:** `const sinal = semaforo(); sinal.next().value; sinal.next().value; sinal.next().value;`
* **Resposta Esperada:** Respectivamente: `"Verde"`, `"Amarelo"`, `"Vermelho"`.

**Exercício 3.3: Gerador de Números Pares**

* **Situação Problema:** Crie um gerador chamado `gerarPares` que recebe um número máximo. Ele deve emitir apenas os números pares de 0 até esse máximo.
* **Teste:** `const pares = gerarPares(4); pares.next().value; pares.next().value; pares.next().value;`
* **Resposta Esperada:** Respectivamente: `0`, `2`, `4`.

**Exercício 3.4: Paginação Simulada (Iterando Array)**

* **Situação Problema:** Crie um gerador `paginarArray` que recebe um array como parâmetro. Ele deve emitir um elemento do array por vez a cada chamada do `next()`.
* **Teste:** `const itens = paginarArray(["A", "B"]); itens.next().value; itens.next().value;`
* **Resposta Esperada:** Respectivamente: `"A"`, `"B"`.

**Exercício 3.5: Contagem Regressiva**

* **Situação Problema:** Crie um gerador `contagemRegressiva` que recebe um número de início e usa um loop para emitir (yield) os valores em ordem decrescente até 0.
* **Teste:** `const contagem = contagemRegressiva(2); contagem.next().value; contagem.next().value; contagem.next().value;`
* **Resposta Esperada:** Respectivamente: `2`, `1`, `0`.

---

### Método MAP

**Exercício 4.1: Dobrando Valores**

* **Situação Problema:** Dado um array de números, use o método `.map()` (passando uma arrow function) para criar um novo array onde cada valor é o dobro do original.
* **Teste:** `const numeros = [2, 4, 6]`
* **Resposta Esperada:** `[4, 8, 12]`

**Exercício 4.2: Extraindo Propriedades de Objetos**

* **Situação Problema:** Você tem uma lista de usuários (array de objetos). Use o `.map()` para extrair apenas os nomes dos usuários e colocá-los em um novo array de strings.
* **Teste:** `const usuarios = [{nome: "Alice", idade: 25}, {nome: "Bruno", idade: 30}]`
* **Resposta Esperada:** `["Alice", "Bruno"]`

**Exercício 4.3: Formatando Strings**

* **Situação Problema:** Um sistema recebeu palavras em letras minúsculas. Use o `.map()` para retornar um novo array com todas as palavras transformadas em letras maiúsculas.
* **Teste:** `const palavras = ["javascript", "react", "node"]`
* **Resposta Esperada:** `["JAVASCRIPT", "REACT", "NODE"]`

**Exercício 4.4: Conversão de Temperaturas (Lote)**

* **Situação Problema:** Você tem um array com temperaturas em graus Celsius. Use o `.map()` para criar um novo array com essas temperaturas convertidas para Fahrenheit. *(Fórmula: (C * 9/5) + 32)*.
* **Teste:** `const celsius = [0, 20, 30]`
* **Resposta Esperada:** `[32, 68, 86]`

**Exercício 4.5: Adicionando Status ao Produto**

* **Situação Problema:** Você tem um array de produtos (`{ id, nome }`). Use o `.map()` para retornar os mesmos objetos, mas adicionando uma nova propriedade `emEstoque: true` a todos eles.
* **Teste:** `const produtos = [{id: 1, nome: "Mouse"}, {id: 2, nome: "Teclado"}]`
* **Resposta Esperada:** `[{id: 1, nome: "Mouse", emEstoque: true}, {id: 2, nome: "Teclado", emEstoque: true}]`

---

### O Contexto de Execução (`this`)

**Exercício 1.1: O Método do Objeto**

* **Situação Problema:** Crie um objeto chamado `contaBancaria` com as propriedades `titular` (string) e `saldo` (número). Adicione um método chamado `exibirExtrato` (usando uma função tradicional, não arrow function). Dentro desse método, use o `this` para retornar a frase: `"O saldo de [titular] é R$ [saldo]"`.
* **Teste:** `console.log(contaBancaria.exibirExtrato())`
* **Resposta Esperada:** A string com os dados formatados referenciando o próprio objeto.

**Exercício 1.2: O Problema do Escopo (Arrow Function resolve)**

* **Situação Problema:** Crie um objeto `estudante` com a propriedade `nome: "Carlos"`. Adicione um método `estudar()`. Dentro desse método, crie um `setTimeout`. O `setTimeout` deve disparar uma **Arrow Function** após 1 segundo (1000ms), imprimindo `this.nome + " está estudando"`. *(Dica: Se você usasse uma função tradicional dentro do setTimeout, o `this` apontaria para a janela do navegador e retornaria undefined).*
* **Teste:** `estudante.estudar()`
* **Resposta Esperada:** Após 1 segundo: `"Carlos está estudando"`.

**Exercício 1.3: `this` em Classes**

* **Situação Problema:** Crie uma classe `Produto`. O construtor deve receber `nome` e `preco` e atribuí-los usando `this`. Crie um método `aplicarDesconto(taxa)` que atualiza o `this.preco` descontando o valor da taxa e retorna o novo preço.
* **Teste:** `const p1 = new Produto("Notebook", 3000); p1.aplicarDesconto(0.10); console.log(p1.preco)`
* **Resposta Esperada:** `2700`

**Exercício 1.4: Emprestando Métodos (`call` / `bind`)**

* **Situação Problema:** Crie uma função solta no arquivo chamada `apresentar()`, que retorna `"Meu nome é " + this.nome`. Crie um objeto `usuario = { nome: "Fernanda" }`. Use o método `.call()` ou `.bind()` para executar a função `apresentar` forçando o `this` a ser o objeto `usuario`.
* **Teste:** `apresentar.call(usuario)`
* **Resposta Esperada:** `"Meu nome é Fernanda"`

**Exercício 1.5: Objeto com Múltiplas Propriedades**

* **Situação Problema:** Crie um objeto `carrinho` com uma propriedade `itens` (um array de preços: `[10, 20, 30]`). Crie um método `calcularTotal` que usa o `this.itens` em conjunto com um `.reduce()` para retornar a soma total dos produtos.
* **Teste:** `carrinho.calcularTotal()`
* **Resposta Esperada:** `60`

---

### Eventos com `addEventListener()`

**Exercício 2.1: Clique Simples**

* **Situação Problema:** No HTML, crie um `<button id="btn-salvar">Salvar</button>`. No JS, capture esse elemento e adicione um ouvinte de evento para o `click` que imprima `"Dados salvos com sucesso!"` no console.
* **Ação:** Clicar no botão.
* **Resposta Esperada:** Log da mensagem no console.

**Exercício 2.2: Evento de Teclado e Captura de Valor**

* **Situação Problema:** Crie um `<input type="text" id="campo-busca">`. No JS, adicione um evento de `keyup`. Toda vez que uma tecla for solta, imprima no console o valor atual do campo. *(Dica: acesse o valor através de `event.target.value`)*.
* **Ação:** Digitar "React" no input.
* **Resposta Esperada:** O console imprime "R", "Re", "Rea", "Reac", "React".

**Exercício 2.3: Interações de Mouse (Hover)**

* **Situação Problema:** Crie uma `<div id="caixa">Passe o mouse</div>` (coloque um pouco de CSS básico para ter tamanho e cor). Adicione um evento `mouseenter` para mudar a cor de fundo (ex: `caixa.style.backgroundColor = "red"`) e um evento `mouseleave` para voltar à cor original.
* **Ação:** Passar e tirar o mouse de cima da div.
* **Resposta Esperada:** A cor da caixa alterna visualmente.

**Exercício 2.4: Prevenção de Comportamento Padrão (`preventDefault`)**

* **Situação Problema:** Crie um formulário simples `<form id="meu-form"><button type="submit">Enviar</button></form>`. Adicione um evento de `submit` ao formulário. Use `event.preventDefault()` para impedir que a página recarregue e imprima `"Envio bloqueado para validação"`.
* **Ação:** Clicar no botão Enviar.
* **Resposta Esperada:** A página NÃO recarrega e o console exibe a mensagem.

**Exercício 2.5: Escutador de Evento Único**

* **Situação Problema:** Crie um botão `<button id="btn-desconto">Pegar Desconto</button>`. Adicione um evento de clique. Quando clicado, imprima `"Cupom: JAVASCRIPT10"`. O detalhe: esse evento deve funcionar **apenas uma vez**. Após o primeiro clique, você deve remover o evento usando `removeEventListener` (ou passar a opção `{ once: true }` no próprio addEventListener).
* **Ação:** Clicar no botão 3 vezes.
* **Resposta Esperada:** O console imprime a mensagem apenas no primeiro clique.

---

### Interrompendo a Propagação (`stopPropagation`)
**Exercício 3.1: Protegendo o Botão de Fechar**

* **Situação Problema:** Crie uma `<div id="modal">` e, dentro dela, um `<button id="btn-fechar">X</button>`. Adicione um evento de clique ao modal que imprima `"Clicou no fundo do modal"`. Adicione um evento de clique ao botão que imprima `"Fechando modal"` e use `event.stopPropagation()`.
* **Ação:** Clicar apenas no botão X.
* **Resposta Esperada:** Apenas `"Fechando modal"` aparece no console (o log do fundo do modal não deve ser disparado).

**Exercício 3.2: Menu Dropdown e o Body**

* **Situação Problema:** Adicione um evento de clique no `document.body` que imprima `"Fechando todos os menus"`. Crie um `<div id="menu-usuario">Menu</div>` e adicione um clique a ele que imprima `"Abrindo opções do usuário"` e pare a propagação.
* **Ação:** Clicar no menu de usuário.
* **Resposta Esperada:** Apenas o menu abre, o body ignora o clique.

**Exercício 3.3: Lista de Tarefas (Concluir vs Deletar)**

* **Situação Problema:** Crie uma `<li id="tarefa">Comprar pão <button id="btn-deletar">Apagar</button></li>`. O clique na `<li>` inteira deve imprimir `"Tarefa marcada como concluída"`. O clique no botão deve imprimir `"Tarefa apagada"` e parar a propagação.
* **Ação:** Clicar no botão de apagar.
* **Resposta Esperada:** A tarefa é apagada sem ser marcada como concluída acidentalmente.

**Exercício 3.4: Cartão de Produto Expandido**

* **Situação Problema:** Crie um `<article id="card">` contendo uma `<img id="foto-produto">`. Clicar no card imprime `"Navegando para a página do produto"`. Clicar na imagem deve imprimir `"Abrindo galeria de fotos em tela cheia"` e interromper a propagação.
* **Ação:** Clicar na imagem.
* **Resposta Esperada:** O clique não vaza para o cartão.

**Exercício 3.5: Duplo Stop (Prevenção Total)**

* **Situação Problema:** Crie um link `<a href="https://google.com" id="link-especial"><div>Clique aqui</div></a>`. Ao clicar na `div` interna, capture o evento. Você deve impedir que a página navegue para o Google e também impedir que o clique suba para o link usando simultaneamente `preventDefault()` e `stopPropagation()`. Imprima `"Ação completamente neutralizada"`.
* **Ação:** Clicar na div.
* **Resposta Esperada:** Nenhuma navegação ocorre e a mensagem aparece.

---

### Relação dos Elementos no DOM
**Exercício 4.1: Subindo para o Pai (`parentNode` / `parentElement`)**

* **Situação Problema:** Crie `<div class="alerta"><span id="fechar-alerta">X</span></div>`. No JS, selecione apenas o `span`. A partir do span, acesse o elemento pai dele (a div) e aplique o estilo `.style.display = "none"` para esconder tudo.
* **Ação:** Executar o script.
* **Resposta Esperada:** O elemento `div.alerta` inteiro desaparece da tela.

**Exercício 4.2: Descendo para os Filhos (`children` / `firstElementChild`)**

* **Situação Problema:** Crie uma `<ul id="lista-frutas"><li>Maçã</li><li>Banana</li><li>Uva</li></ul>`. Usando o JS, selecione a `ul`. A partir dela, acesse o **primeiro elemento filho** (firstElementChild) e mude a cor do texto para `"red"`.
* **Ação:** Executar o script.
* **Resposta Esperada:** Apenas a palavra "Maçã" fica vermelha.

**Exercício 4.3: Irmão Seguinte (`nextElementSibling`)**

* **Situação Problema:** Crie um formulário com `<label id="label-email">Email:</label><input type="email">`. Selecione a `label` no JS. Use a propriedade de navegação de irmãos para encontrar o input que está imediatamente após ela e adicione a classe CSS `"erro-input"` nele.
* **Ação:** Executar o script.
* **Resposta Esperada:** O `input` recebe a nova classe dinamicamente.

**Exercício 4.4: Irmão Anterior (`previousElementSibling`)**

* **Situação Problema:** Crie o HTML: `<h2>Título</h2><p id="paragrafo-alvo">Texto</p>`. Selecione o parágrafo pelo ID. Use a navegação de irmãos para acessar o elemento que está antes dele (o `h2`) e altere o texto (`innerText`) do `h2` para `"Título Modificado"`.
* **Ação:** Executar o script.
* **Resposta Esperada:** O cabeçalho acima do parágrafo tem seu texto atualizado.

**Exercício 4.5: Busca com Escopo Fechado (`elemento.querySelector`)**

* **Situação Problema:** Crie dois artigos: `<article class="post-1"><p class="resumo">A</p></article>` e `<article class="post-2"><p class="resumo">B</p></article>`. No JS, selecione explicitamente o **segundo artigo**. Depois, em vez de usar `document.querySelector`, use o `.querySelector` a partir do artigo selecionado para encontrar o parágrafo `.resumo` apenas de dentro dele, alterando seu texto para `"Resumo atualizado"`.
* **Ação:** Executar o script.
* **Resposta Esperada:** Apenas a letra "B" vira "Resumo atualizado", o primeiro post permanece intacto.


---

### Criando Elementos (`document.createElement`)

**Exercício 1.1: O Primeiro Parágrafo**

* **Situação Problema:** Crie um arquivo HTML com uma `<div id="conteudo"></div>`. No JS, use `document.createElement` para criar uma tag `<p>`. Adicione o texto `"Olá, DOM!"` a esse parágrafo (usando `innerText` ou `textContent`) e, por fim, adicione esse parágrafo para dentro da div usando `.appendChild()`.
* **Ação:** Carregar a página.
* **Resposta Esperada:** O texto "Olá, DOM!" aparece na tela dentro da div.

**Exercício 1.2: Lista Dinâmica**

* **Situação Problema:** No HTML, crie uma `<ul id="lista-tarefas"></ul>`. No JS, crie um elemento `<li>`, adicione o texto `"Estudar JavaScript"` e insira-o dentro da `ul`.
* **Ação:** Carregar a página.
* **Resposta Esperada:** Um item de lista com o texto "Estudar JavaScript" é renderizado.

**Exercício 1.3: Inserindo uma Imagem**

* **Situação Problema:** Crie uma `<div id="galeria"></div>`. No JS, crie um elemento `<img>`. Usando as propriedades do elemento no JS, defina o `src` dele para uma URL de imagem qualquer da internet e o `alt` para `"Foto dinâmica"`. Insira a imagem na galeria.
* **Ação:** Carregar a página.
* **Resposta Esperada:** A imagem é exibida na tela.

**Exercício 1.4: Botão com Classe CSS**

* **Situação Problema:** No JS, crie um elemento `<button>`. Adicione o texto `"Clique Aqui"` e adicione a classe CSS `"btn-primario"` a ele (usando `classList.add`). Adicione o botão ao `document.body`.
* **Ação:** Inspecionar o elemento no navegador (F12).
* **Resposta Esperada:** O HTML gerado deve ser `<button class="btn-primario">Clique Aqui</button>`.

**Exercício 1.5: Construindo um Mini-Card (Aninhamento)**

* **Situação Problema:** Crie um `<article id="card-usuario"></div>`. No JS, crie um `<h2>` com o texto `"João Silva"` e um `<p>` com o texto `"Dev Front-end"`. Adicione **ambos** os elementos para dentro do `article`.
* **Ação:** Carregar a página.
* **Resposta Esperada:** O card exibe o título e o parágrafo agrupados.

---

### Removendo Filhos (`removeChild`)

**Exercício 2.1: Apagando um Item Específico**

* **Situação Problema:** Crie o HTML: `<ul id="menu"><li id="item-1">Home</li><li id="item-2">Contato</li></ul>`. No JS, selecione a `ul` (o pai) e o `li` de Contato (o filho). Use `pai.removeChild(filho)` para deletar o contato.
* **Ação:** Executar o script.
* **Resposta Esperada:** Apenas a opção "Home" permanece na tela.

**Exercício 2.2: Removendo o Primeiro Filho**

* **Situação Problema:** Crie uma `<div id="caixa-mensagens"><p>Msg 1</p><p>Msg 2</p></div>`. No JS, selecione a div pai. Use a propriedade `firstElementChild` para identificar o primeiro parágrafo e remova-o usando `removeChild()`.
* **Ação:** Executar o script.
* **Resposta Esperada:** Apenas a "Msg 2" permanece na tela.

**Exercício 2.3: Removendo o Último Filho**

* **Situação Problema:** Usando a mesma estrutura do exercício anterior (ou uma similar), selecione o pai e use a propriedade `lastElementChild` para identificar e remover o **último** elemento da lista com `removeChild()`.
* **Ação:** Executar o script.
* **Resposta Esperada:** O último elemento desaparece.

**Exercício 2.4: Botão de Limpar Lista**

* **Situação Problema:** Crie uma `<ol id="ranking"><li>1º Lugar</li><li>2º Lugar</li></ol>` e um `<button id="btn-limpar">Limpar</button>`. Adicione um evento de clique ao botão. Quando clicado, selecione o `ranking` e remova o `firstElementChild` dele.
* **Ação:** Clicar no botão limpar uma vez.
* **Resposta Esperada:** O "1º Lugar" é removido da lista.

**Exercício 2.5: Esvaziamento Completo (Loop)**

* **Situação Problema:** Crie uma `<div id="carrinho"><p>Item A</p><p>Item B</p><p>Item C</p></div>`. No JS, crie um loop `while` que verifique se o carrinho ainda possui um `firstElementChild`. Enquanto possuir, use `removeChild()` para apagá-lo.
* **Ação:** Executar o script.
* **Resposta Esperada:** A div ficará completamente vazia no HTML.

---

### Método `.filter()`

*Foco: Criar novos arrays baseados em condições lógicas, sem alterar o array original. Não precisa de HTML para este tópico.*

**Exercício 3.1: Apenas os Positivos**

* **Situação Problema:** Dado o array `const numeros = [-5, 10, -2, 42, 0]`, use o `.filter()` para retornar um novo array contendo apenas os números maiores que zero.
* **Teste:** `console.log(numerosPositivos)`
* **Resposta Esperada:** `[10, 42]`

**Exercício 3.2: Nomes Curtos**

* **Situação Problema:** Dado o array `const nomes = ["Ana", "Fernando", "Bia", "Guilherme"]`, use `.filter()` para gerar um array apenas com os nomes que tenham **3 letras ou menos**.
* **Teste:** `console.log(nomesCurtos)`
* **Resposta Esperada:** `["Ana", "Bia"]`

**Exercício 3.3: Produtos em Estoque**

* **Situação Problema:** Você tem uma lista de produtos:
`const estoque = [{nome: "Caderno", qtd: 5}, {nome: "Caneta", qtd: 0}, {nome: "Borracha", qtd: 10}]`.
Use `.filter()` para retornar apenas os objetos que possuem `qtd` maior que 0.
* **Teste:** `console.log(produtosDisponiveis)`
* **Resposta Esperada:** `[{nome: "Caderno", qtd: 5}, {nome: "Borracha", qtd: 10}]`

**Exercício 3.4: Usuários Premium**

* **Situação Problema:** Dado o array `const usuarios = [{id: 1, plano: "free"}, {id: 2, plano: "premium"}, {id: 3, plano: "premium"}]`. Filtre esse array para retornar apenas os usuários que assinam o plano "premium".
* **Teste:** `console.log(usuariosPremium)`
* **Resposta Esperada:** `[{id: 2, plano: "premium"}, {id: 3, plano: "premium"}]`

**Exercício 3.5: Sistema de Busca Simples**

* **Situação Problema:** Dado um array de linguagens `const linguagens = ["JavaScript", "Python", "Java", "C++", "TypeScript"]`. Crie uma variável `termoBusca = "Java"`. Use o `.filter()` combinado com o método `.includes()` das strings para retornar as linguagens que contenham a palavra "Java".
* **Teste:** `console.log(resultadoBusca)`
* **Resposta Esperada:** `["JavaScript", "Java"]`

---

### Removendo Diretamente (`.remove()`)

**Exercício 4.1: O Botão Autodestrutivo**

* **Situação Problema:** Crie um `<button id="btn-sumir">Me apague</button>`. Adicione um evento de clique nele. Dentro do evento, use o próprio contexto ou a variável do botão e chame `.remove()`.
* **Ação:** Clicar no botão.
* **Resposta Esperada:** O botão desaparece da tela instantaneamente.

**Exercício 4.2: Fechando um Alerta**

* **Situação Problema:** Crie uma `<div id="alerta">Erro na rede! <button id="fechar">X</button></div>`. No JS, capture o botão e a div. Ao clicar no botão, chame a função `.remove()` diretamente na variável da `div`.
* **Ação:** Clicar no "X".
* **Resposta Esperada:** O alerta inteiro desaparece.

**Exercício 4.3: Destruição Temporizada**

* **Situação Problema:** Crie um `<div id="toast">Operação realizada com sucesso!</div>`. No JS, selecione essa div e crie um `setTimeout`. Após 3 segundos (3000ms), o código deve executar `.remove()` na div.
* **Ação:** Aguardar 3 segundos após carregar a página.
* **Resposta Esperada:** O aviso de sucesso some sozinho da tela.

**Exercício 4.4: Removendo Elementos por Classe (NodeList)**

* **Situação Problema:** Crie `<p class="anuncio">Compre agora</p>`, `<p class="conteudo">Notícia real</p>` e `<p class="anuncio">Promoção</p>`. No JS, use `document.querySelectorAll('.anuncio')` para capturar todos os anúncios. Como isso retorna uma lista, você não pode usar o `.remove()` diretamente na lista. Use um `.forEach()` para percorrer a lista e aplicar o `.remove()` em cada item.
* **Ação:** Executar o script.
* **Resposta Esperada:** Apenas o parágrafo "Notícia real" sobrevive.

**Exercício 4.5: Delegação com `.target` e `.remove()`**

* **Situação Problema:** Crie uma `<ul id="lista-clicavel"><li>Item A</li><li>Item B</li></ul>`. Adicione um evento de clique na `ul`. Dentro do evento, verifique se o que foi clicado (`event.target.tagName`) foi uma `"LI"`. Se sim, aplique `.remove()` diretamente no `event.target`. *(Esta é uma técnica avançada e muito útil!)*
* **Ação:** Clicar na palavra "Item A".
* **Resposta Esperada:** Apenas o "Item A" some da tela. A `ul` continua existindo para receber novos cliques.