@Home_page
Feature: This file search icon 
  

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Purchase Home Page 
  When navigate to market page
  Then HPF-0020 market details are displayed
  When HPF-0020 move to Study products
  When HPF-0020 move to Watch products
  When HPF-0020 move to Listen products
  When HPF-0020 move to Read products
  When HPF-0020 move to Subscriptions
  When i click on search icon and enter text
  Then HPF-0020 products page is displayed
  When LP-0020 click on library page
  Then your library is  empty and some message is displayed
  When Click on Start Shopping in Library page
  Then HPF-0020 market details are displayed
  When i click on login user with out purchase product
  When LP-0020 click on library page
  Then your library is  empty and some message is displayed
  When click on logout button
  When i click on login button and enter username and password
  When HPF-0030 click on demand page
  When HPF-0060 Click on user name
  When navigate to market page
  When LP-0020 click on library page
  Then HPF-0080 purchase products is displayed
  When click on logout button



  
  
  
  
  
  
  
  
  
  

    