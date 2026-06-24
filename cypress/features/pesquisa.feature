Feature: Pesquisa de produtos

  Scenario: Produto existente
    Given que estou na página de produtos
    When eu pesquiso por "Sleeveless Dress"
    Then devo visualizar o produto "Sleeveless Dress"

  Scenario: Produto inexistente
    Given que estou na página de produtos
    When eu pesquiso por "car"
    Then nenhum produto deve ser exibido
