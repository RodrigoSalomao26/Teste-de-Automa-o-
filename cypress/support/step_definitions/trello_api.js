const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

let response;
let nomesListas = [];

Given("que envio um GET para o endpoint de actions com ID válido", () => {
  cy.request('GET', 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a')
    .then((res) => {
      response = res;
    });
});

Given("que envio um GET para o endpoint de actions com ID inválido", () => {
  cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/actions/idInvalido123',
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

When("recebo a resposta", () => {
  expect(response).to.not.be.null;
});

Then("o status code deve ser 200", () => {
  expect(response.status).to.eq(200);
});

Then("o campo \"list.name\" deve estar presente e ser exibido", () => {
  const nomesListas = [];

    // função recursiva para percorrer o objeto
    function coletarNomes(obj) {
      for (const chave in obj) {
        if (chave === "name") {
          nomesListas.push(obj[chave]);
        }
        if (typeof obj[chave] === "object" && obj[chave] !== null) {
          coletarNomes(obj[chave]);
        }
      }
    }

    // percorre toda a resposta
    coletarNomes(response.body.data);

    // exibe todos os nomes encontrados
    cy.log("Nomes capturados:");
    nomesListas.forEach((nome, index) => {
      cy.log(`${index + 1}: ${nome}`);
    });

    // valida que pelo menos um campo name foi encontrado
    expect(nomesListas.length).to.be.greaterThan(0);
  });

Then("o status code deve ser diferente de 200", () => {
  expect(response.status).to.not.eq(200);
  cy.log('Status retornado:', response.status);
});
