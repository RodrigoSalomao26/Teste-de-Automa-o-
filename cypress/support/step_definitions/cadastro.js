import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de cadastro", () => {
  cy.visit("https://www.automationexercise.com/login");
});

When("eu preencho o formulário de cadastro com dados aleatórios", () => {
  const randomNumber = Math.floor(Math.random() * 10000);
  const nomeUsuario = `teste${randomNumber}`;
  const email = `teste${randomNumber}@teste.com.br`;
  const senha = `teste${randomNumber}`;

  cy.get('input[data-qa="signup-name"]').type(nomeUsuario);
  cy.get('input[data-qa="signup-email"]').type(email);
  cy.get('button[data-qa="signup-button"]').click();

  cy.get('input[data-qa="password"]').type(senha);
  cy.get('select[data-qa="days"]').select("21");
  cy.get('select[data-qa="months"]').select("June");
  cy.get('select[data-qa="years"]').select("1999");
  cy.get('input[data-qa="first_name"]').type("Teste");
  cy.get('input[data-qa="last_name"]').type("Automação");
  cy.get('input[data-qa="address"]').type("Rua Exemplo, 123");
  cy.get('input[data-qa="state"]').type("SP");
  cy.get('input[data-qa="city"]').type("São Paulo");
  cy.get('input[data-qa="zipcode"]').type("01000-000");
  cy.get('input[data-qa="mobile_number"]').type("11999999999");

  cy.get('button[data-qa="create-account"]').click();
});

Then('o sistema deve mostrar "Account Created!"', () => {
  cy.contains("Account Created!").should("be.visible");
});

When("eu tento cadastrar com um email já usado", () => {
  const nomeUsuario = "teste7628";
  const emailExistente = "teste7628@teste.com.br";

  cy.get('input[data-qa="signup-name"]').type(nomeUsuario);
  cy.get('input[data-qa="signup-email"]').type(emailExistente);
  cy.get('button[data-qa="signup-button"]').click();
});

Then('o sistema deve mostrar "Email Address already exist!"', () => {
  cy.contains("Email Address already exist!").should("be.visible");
});
