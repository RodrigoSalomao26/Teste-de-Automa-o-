import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de produtos", () => {
  cy.visit("https://automationexercise.com/products");
});

When("eu pesquiso por {string}", (produto) => {
  cy.get('input#search_product', { timeout: 10000 })
    .should('be.visible')
    .type(produto);
  cy.get('button#submit_search').click();
});

Then("devo visualizar o produto {string}", (produto) => {
  cy.contains(produto).should("be.visible");
});

Then("nenhum produto deve ser exibido", () => {
  cy.get('.product-image-wrapper').should('not.exist');
});



