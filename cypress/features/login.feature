Feature: Login
  Scenario: Login com usuário inexistente
    Given que estou na página de login
    When eu tento logar com email e senha inválidos
    Then o sistema deve mostrar erro de login