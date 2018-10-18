@Purchase_book
Feature: This file Purchase book product
  

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Purchase book product
  When navigate to market page
  When i move to read products
  When PBP-0010 Read products is displayed
  Then PBP-0010 Click on fiction in Read link
  When PBP-0020 Click on product
  Then PBP-0020 Read product and Add to cart button is displayed
  When PBP-0030 click on Add to cart button
  When PBP-0040 Click on incart button
  When PBP-0060 click on title
  When PBP-0050 click on product in you may also like
  Then Click on Add to cart
  When PBP-0050 cart icon button is increased by 1
  When CPS-0030 i click on get credits plan
  Then CPS-0030 get credits plan link is displayed
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