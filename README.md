# Teste-de-Automação
Este repositório contém um conjunto de testes automatizados end-to-end desenvolvidos com Cypress e Cucumber Preprocessor, utilizando a sintaxe Gherkin para cenários de teste.

🛠️ Passo a passo de instalação

Instalar Node.js

Baixe e instale a versão LTS do Node.js em nodejs.org.

----------------

Verifique se está instalado:

bash
node -v
npm -v
Criar o projeto Cypress

------------------

No terminal, dentro da pasta do projeto:

bash
npm init -y

Instalar Cypress e dependências

-----------

Instale o Cypress:

bash
npm install cypress --save-dev

------------

Instale o cucumber-preprocessor e bundler:

bash
npm install @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor --save-dev
Configurar o cypress.config.js

--------------

Estrutura de pastas

cypress/features/ → arquivos .feature (cenários em Gherkin).

cypress/support/step_definitions/ → arquivos .js com implementação dos steps.

cypress/support/e2e.js → pode ser vazio ou importar comandos globais.

----------

▶️ Execução dos testes
Abrir o runner do Cypress

bash
npx cypress open
Escolha E2E Testing.

Selecione o navegador.

Os arquivos .feature vão aparecer na lista.

Rodar todos os testes de uma vez (headless)

bash
npx cypress run
Isso executa todos os cenários (login.feature, cadastro.feature, carrinho.feature, pesquisaproduto.feature, trello_api.feature etc.).

Os resultados aparecem no terminal e podem ser exportados em relatórios.

Rodar um teste específico

bash
npx cypress run --spec "cypress/features/trello_api.feature"
Substitua pelo caminho do .feature desejado.
