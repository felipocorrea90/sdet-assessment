Feature: Create Account

  Scenario: Create a new user account
    Given user visits the shopping sign in website
    When the user clicks the Create an Account CTA with email "thisisatest_30@testco123.com" specified
    And adds all the mandatory personal information
      | Gender      | Male        |
      | First Name  | Felipe      |
      | Last Name   | Correa      |
      | Password    | whatever123 |
      | DOB         | 1990-02-11  |
    And adds all the address information
      | First Name    | Felipe        |
      | Last Name     | Correa        |
      | Address       | Fake ST       |
      | City          | Oakland       |
      | State         | California    |
      | Zip Code      | 94501         |
      | Country       | United States |
      | Mobile Number | 3002221133    |
    And clicks the create account button at the end of the form
    Then user menu should be displayed with customer name "Felipe Correa"