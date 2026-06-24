import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let usuario;

before(() => {
  cy.readFile('cypress/fixtures/usuario.json').then((data) => {
    usuario = data;
  });
});

Given("que estou na página de login", () => {
  cy.visit("https://automationexercise.com/login");
});

When("eu informo email e senha válidos", () => {
  cy.get('input[data-qa="login-email"]').type(usuario.email);
  cy.get('input[data-qa="login-password"]').type(usuario.senha);
  cy.get('button[data-qa="login-button"]').click();
});

Then("devo visualizar a mensagem {string}", (mensagem) => {
  cy.contains(`Logged in as ${usuario.nomeUsuario}`).should("be.visible");
});

When("eu tento logar com email e senha inválidos", () => {
  const emailInvalido = `naoexiste${Math.floor(Math.random() * 10000)}@teste.com.br`;
  const senhaInvalida = "senhaErrada123";

  cy.get('input[data-qa="login-email"]').type(emailInvalido);
  cy.get('input[data-qa="login-password"]').type(senhaInvalida);
  cy.get('button[data-qa="login-button"]').click();
});

Then("deve aparecer uma mensagem de erro", () => {
  cy.contains("Your email or password is incorrect!").should("be.visible");
});
