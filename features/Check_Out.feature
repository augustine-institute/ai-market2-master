@Check_Out
Feature: This file will test the Credit Plan Subscription
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: FORMED Landing Page
  When navigate to market page
  Then i move to shops products
  When Click on espanol Listen Link and Verify
  When CO-0010 Click on Watch in Digital products
  Then Click on Product in watch
  Then Click on Add to cart
  Then i move to shops products
  When Click on espanol Listen Link and Verify
  When CO-0010 Click on Watch in Digital products
  Then Click on Product2 in watch
  Then Click on Add to cart
  Then PBP-0060 click on incart icon
  Then CO-0010 Verify Check Out in Cart
  Then CO-0020 Cart should contain added products
  Then CO-0030 delete product from Cart
  When Click on Checkout in Cart Summary
  Then CO-0040 Create Account and Continue login is displayed
  Then VR-0020 Click on the create an account
  Then CO-0050 Verify Details in create Account
  Then PBP-0070 Enter Details in create Account
  Then CPS-0060 Enter Billing Information
  Then CPS-0060 Enter Payment Method
  When i click on user name drop down
  When click on get credit plan in market view
  When click on credits
  Then CO-0080 Enter CVV
  Then i move to shops products
  When click on watch document product
  When click on watch document1
  Then Click on Add to cart
  Then i move to shops products
  When click on watch document product
  Then click on watch document
  Then Click on Add to cart
  Then PBP-0060 click on incart icon
  When Click on Checkout in Cart Summary
  Then CO-0100 Click on Apply credits
  Then CO-0100 click on apply credits
  Then CO-0080 Enter CVV
  Then CPS-0080 Order Confirmation is displayed
  When click on logout button
  
  
  


