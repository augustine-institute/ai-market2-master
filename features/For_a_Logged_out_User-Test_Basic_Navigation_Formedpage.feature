@User-Test_Basic_Navigation_Formedpage
Feature: For a Logged out User-Test Basic Navigation Formedpage
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: For a Logged out User-Test Basic Navigation Formedpage
    When navigate to market page
    When i move to watch products
    Then click on Documentreies link and verify
    When i move to study products
    Then click on Faith formation link and verify
    Then navigate to formed page
  