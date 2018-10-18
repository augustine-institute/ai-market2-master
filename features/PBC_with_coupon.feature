@New_Pbc_subscription_with_a_coupon
Feature: This file will test the New Pbc subscription with a coupon
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: New Pbc subscription with a coupon
  When navigate to market page
  When i move to subscription products
  Then click on ondemand subscription
  Then VR-0020 sign in group detail is displayed
  When VR-0020 click on checkout button
  When VR-0020 Click on the create an account
  Then PBP-0070 Enter Details in create Account
  Then PBP-0070 Enter Billing information
  When PBC-0010 click on pay by check
  Then PBC-0020 Enter Purchase Order
  When Click on Choose organization
  When PBC-0040 click on Entercupon
  Then VR-0040 Place Order button is displayed and click on place order button
  Then PBC-0100 TOTAL amount is displayed
  When PBC-0030 order conformation is displayed
  Then PBC-0120 click on account page in user dropdown  
  Then Billing amount shows in Account overview page and Ondemand subpanel


  
  
  