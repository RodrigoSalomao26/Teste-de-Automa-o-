Feature: Carrinho de compras

  Scenario: Adicionar produto ao carrinho
    Given que estou na página inicial
    When eu adiciono um produto ao carrinho
    Then o carrinho deve mostrar o produto adicionado