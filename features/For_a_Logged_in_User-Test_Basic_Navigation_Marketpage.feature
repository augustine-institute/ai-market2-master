@User-Test_Basic_Navigation_Marketpage
Feature: For a Logged in User-Test Basic Navigation Marketpage
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: For a Logged in User-Test Basic Navigation Marketpage
    When navigate to market page
    When i move to watch products
    When i click on login button to verify for forgot password
    Then forgot password is displayed
    When i Enter Name and password for individual user	
    When i move to study products
    Then click on Faith formation link and verify
    When i move to study products
    Then click on Bible studies link and verify
    When i move to watch products
    Then click on feature film link and verify
    Then click on Talks link and verify
    When i move to watch products
    Then click on Tv shows link and verify
    When i move to watch products
    Then click on Espamol in watch link and verify
    When i move to listen products
    Then Click on talks Link and Verify
    When i move to listen products
    Then Click on audio dramas Link and Verify
    When i move to listen products
    Then Click on audiobooks Link and Verify
    When i move to listen products
    Then Click on espanol Listen Link and Verify
    When i move to read products
    Then Click on nonfiction link and verify
    When i move to read products
    Then Click on fiction link and verify
    When i move to read products
    Then Click on youth link and verify
    When i move to read products
    Then Click on espanol link and verify
    Then Click on read Link and Verify
    Then Click on Listen Link and Verify
    Then Click on watch Link and Verify
    Then i click on account and logout for parish in market page