import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

describe('Login com usuário cadastrado', () => {
  let usuario

  before(() => {
    cy.readFile('cypress/fixtures/usuario.json').then((data) => {
      usuario = data
    })
  })

  it('Deve fazer login com o usuário cadastrado', () => {
    cy.visit('https://automationexercise.com/login')

    cy.get('input[data-qa="login-email"]').type(usuario.email)
    cy.get('input[data-qa="login-password"]').type(usuario.senha)
    cy.get('button[data-qa="login-button"]').click()

    // Valida usando o nome aleatório salvo
    cy.contains(`Logged in as ${usuario.nomeUsuario}`).should('be.visible')
  })
})

describe('Login com usuário não cadastrado', () => {
  it('Deve falhar ao tentar login com credenciais inválidas', () => {
    cy.visit('https://automationexercise.com/login')

    // Usa email e senha que nunca foram cadastrados
    const emailInvalido = `naoexiste${Math.floor(Math.random() * 10000)}@teste.com.br`
    const senhaInvalida = 'senhaErrada123'

    cy.get('input[data-qa="login-email"]').type(emailInvalido)
    cy.get('input[data-qa="login-password"]').type(senhaInvalida)
    cy.get('button[data-qa="login-button"]').click()

    // Valida mensagem de erro exibida pelo site
    cy.contains('Your email or password is incorrect!').should('be.visible')
  })
})


