@Home_page
Feature: This file search icon 
  

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Purchase Home Page 
  When navigate to market page
  Then HPF-0020 market details are displayed
  When HPF-0020 move to shop products
  When i click on search icon and enter text
  When navigate to market page
  When LP-0020 click on library page
  Then your library is  empty and some message is displayed
  When navigate to market page
  When i click on login button and enter username and password
  When HPF-0030 click on demand page
  When HPF-0060 Click on user name
  When navigate to market page
  Then HPF-0070 login user market page details
  When click on logout button
  When LP-0020 click on library page
  When i click on login user with out purchase product
  Then your library is  empty and some message is displayed
  When click on logout button
  When i click on login button and enter username and password
  When LP-0020 click on library page
  Then HPF-0080 show purchase products
  When click on logout button



  
  
  
  
  
  
  
  
  
  

    