@User-Test_Basic_Navigation_Formedpage
Feature: For a Logged in User-Test Basic Navigation Formedpage
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: For a Logged in User-Test Basic Navigation Formedpage
    When LLP-0020 Click on Login button
    When Enter Name and password for individual user
    When navigate to market page
    Then navigate to formed page
