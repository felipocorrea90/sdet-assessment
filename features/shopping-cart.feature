Feature: Shopping Cart scenarios

  Background:
    Given user visits the shopping website

  Scenario: Add first item to the shopping cart from a given search
    When user searches for "Dress"
    And adds first item to shopping cart
    Then shopping cart should be updated

  Scenario: Modify a particular item quantity from the shopping cart
    When user searches for "Dress"
    And adds first item to shopping cart
    And goes to the Cart page
    And changes item "Dress" quantity to 5
    Then item quantity for "Dress" should be 5 and total price should match