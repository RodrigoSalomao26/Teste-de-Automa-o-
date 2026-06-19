Feature: Pesquisa de produtos
  Scenario: Pesquisa de produto existente
    Given que estou na página de produtos
    When eu pesquiso por "Sleeveless Dress"
    Then o sistema deve mostrar o produto "Sleeveless Dress"

  Scenario: Pesquisa de produto inexistente
    Given que estou na página de produtos
    When eu pesquiso por "ProdutoInexistente123"
    Then o sistema não deve mostrar nenhum produto