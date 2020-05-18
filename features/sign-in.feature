Feature: Sign In scenarios

  Background:
    Given user visits the shopping sign in website

  Scenario: Sign-In with a registered user
    When user signs in using credentials
      | Email     | felipocorrea90@gmail.com |
      | Password  | whatever123              |
    Then user should be redirected to the My Account page

  Scenario: Sign-In with a non-existent user
    When user signs in using credentials
      | Email     | felipe.correa@faketest.com |
      | Password  | fakepwd123                 |
    Then Authentication failed message should be displayed