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
  expect(response.body.data.list).to.have.property('name');

  // captura o valor do campo name
  const nomeLista = response.body.data.list.name;

  // adiciona ao array
  nomesListas.push(nomeLista);

  // exibe todos os nomes salvos até agora
  cy.log("Nomes capturados:");
  nomesListas.forEach((nome, index) => {
    cy.log(`${index + 1}: ${nome}`);
  });
});

Then("o status code deve ser diferente de 200", () => {
  expect(response.status).to.not.eq(200);
  cy.log('Status retornado:', response.status);
});
