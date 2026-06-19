import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let produtoSelecionado;

Given("que estou na página inicial", () => {
  cy.visit("https://automationexercise.com");
});

When("eu adiciono um produto ao carrinho", () => {
  // salva o nome do primeiro produto
  cy.get('.features_items .product-image-wrapper').first().within(() => {
    cy.get('.productinfo h2').invoke('text').then((nome) => {
      produtoSelecionado = nome.trim();
    });
  });

  // simula hover para revelar o botão Add to cart
  cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');

  // clica no botão Add to cart visível
  cy.get('.features_items .product-image-wrapper')
    .first()
    .find('a.add-to-cart:visible')
    .click();

  // valida modal e clica no botão Continue Shopping (classe correta)
  cy.get('#cartModal').should('be.visible');
  cy.get('#cartModal')
    .find('button.btn.btn-success.close-modal.btn-block')
    .click({ force: true });

  // espera o modal desaparecer
  cy.get('#cartModal').should('not.be.visible');
});

Then("o carrinho deve mostrar o produto adicionado", () => {
  // agora o carrinho está acessível
  cy.get('a[href="/view_cart"]').first().click();

  // valida que o carrinho contém o nome salvo
  cy.get('.cart_info').should('contain', produtoSelecionado);
});
