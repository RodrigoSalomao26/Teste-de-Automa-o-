Feature: Cadastro de usuário

  Scenario: Cadastro com dados válidos
    Given que estou na página de cadastro
    When eu preencho o formulário de cadastro com dados aleatórios
    Then o sistema deve mostrar "Account Created!"

  Scenario: Cadastro com email já existente
    Given que estou na página de cadastro
    When eu tento cadastrar com um email já usado
    Then o sistema deve mostrar "Email Address already exist!"
