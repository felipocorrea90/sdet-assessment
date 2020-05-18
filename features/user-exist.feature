Feature: Create Account

  Scenario: Create a new user account
    Given user visits the shopping sign in website
    When the user clicks the Create an Account CTA with email "thisisatest_2@testco123.com" specified
    Then message that account is registered should be displayed