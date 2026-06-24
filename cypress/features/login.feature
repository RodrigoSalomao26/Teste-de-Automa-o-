Feature: Login

  Scenario: Login válido com usuário cadastrado
    Given que estou na página de login
    When eu informo email e senha válidos
    Then devo visualizar a mensagem "Logged in as <nomeUsuario>"

  Scenario: Login inválido com credenciais incorretas
    Given que estou na página de login
    When eu tento logar com email e senha inválidos
    Then deve aparecer uma mensagem de erro
