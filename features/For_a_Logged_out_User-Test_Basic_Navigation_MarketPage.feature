@User-Test_Basic_Navigation_MarketPage
Feature: For a Logged out User-Test Basic Navigation MarketPage
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: For a Logged out User-Test Basic Navigation MarketPage
    When navigate to market page
    Then Show products link is displayed
    When Show products link is hovered
    Then click on feature film link and verify
    When Show products link is hovered
    Then click on Documentreies link and verify
    When Show products link is hovered
    Then click on Talks link and verify
    When Show products link is hovered
    Then click on Tv shows link and verify
    When Show products link is hovered
    Then click on Espamol in watch link and verify
    When Show products link is hovered
    Then Click on talks Link and Verify
    When Show products link is hovered
    Then Click on audio dramas Link and Verify
    When Show products link is hovered
    Then Click on audiobooks Link and Verify
    When Show products link is hovered
    Then Click on espanol Listen Link and Verify
    When Show products link is hovered
    Then Click on nonfiction link and verify
    When Show products link is hovered
    Then Click on fiction link and verify
    When Show products link is hovered
    Then Click on youth link and verify
    When Show products link is hovered
    Then Click on espanol link and verify
    Then Click on watch Link and Verify
    Then Click on read Link and Verify
    Then Click on Listen Link and Verify