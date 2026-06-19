Feature: Validação da API Trello - Actions

  Scenario: Validar status 200 e exibir list.name
    Given que envio um GET para o endpoint de actions com ID válido
    When recebo a resposta
    Then o status code deve ser 200
    And o campo "list.name" deve estar presente e ser exibido

  Scenario: Validar status diferente de 200 quando ID não existe
    Given que envio um GET para o endpoint de actions com ID inválido
    When recebo a resposta
    Then o status code deve ser diferente de 200
