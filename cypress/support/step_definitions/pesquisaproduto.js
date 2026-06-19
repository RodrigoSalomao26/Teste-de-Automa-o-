import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

describe('Pesquisa de produtos', () => {

  it('Deve encontrar produto existente', () => {
    cy.visit('https://automationexercise.com/products')

    // Digita o nome de um produto que existe
    cy.get('input#search_product').type('Sleeveless Dress')
    cy.get('button#submit_search').click()

    // Valida que o produto aparece nos resultados
    cy.contains('Sleeveless Dress').should('be.visible')
  })

})

describe('Pesquisa de produto inexistente', () => {

  it('Deve mostrar mensagem para produto inexistente', () => {
    cy.visit('https://automationexercise.com/products')

    // Digita um nome que não existe
    cy.get('input#search_product').type('car')
    cy.get('button#submit_search').click()

    // Valida que não há produtos listados
    cy.get('.product-image-wrapper').should('not.exist')
  })

})
