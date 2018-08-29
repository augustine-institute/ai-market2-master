@Library_page
Feature: This file Library page
  

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Library page
  When navigate to market page
  When LP-0020 click on library page
  Then your library is  empty and some message is displayed
  When Click on market page
  When i click on login user with out purchase product
  When LP-0020 click on library page
  Then your library is  empty and some message is displayed
  When click on logout button
  When i click on login button and enter username and password
  When LP-0020 click on library page
  Then LP-0030 Purchase products is displayed
  When LP-0040 click on Titel string 
  When LP-0050 click on watch
  Then LP-0060 click on play button
  When LP-0070 click on Listen
  Then LP-0070 click on play button
  When LP-0080 click on Read
  Then LP-0090 Download format is displayed
  