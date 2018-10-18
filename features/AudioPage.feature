@Audio_page
Feature: This file Purchase audio product
  

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Purchase audio product Page 
  When navigate to market page
  When i move to listen products
  When PAP-0010 click on Talks
  Then PAP-0010 Talks page is displayed
  When PAP-0020 i click on Item
  Then PAP-0020 Product details is displayed
  Then Click on Add to cart
  When PBP-0060 click on incart icon
  Then PBP-0060 Added product details is dispalyed
  When PBP-0060 click on title
  When PAP-0050 click on product in you may also like
  Then Click on Add to cart
  When PBP-0060 click on incart icon
  When PBP-0060 click on remove option
  When PBP-0060 Click on checkout option
  When PBP-0070 Click on create account
  Then PBP-0070 Enter Details in create Account
  Then PBP-0070 Enter Billing information
  Then PBP-0070 Enter Payment Method
  Then PBP-0070 Verify the Checkout Page
  Then PBP-0070 Order Confirmation is displayed 
  Then PBP-0070 Click on purchase product in library page
  Then PBP-0070 View in library is displayed
  When click on logout button
  