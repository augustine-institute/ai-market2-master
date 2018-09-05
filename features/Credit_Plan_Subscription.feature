@Credit_Plan_Subscription
Feature: This file will test the Credit Plan Subscription
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: FORMED Landing Page
  When navigate to market page
  Then CPS-0010 there is get credit plan
  When i move to shops products
  Then click on feature film link and verify
  Then click on product
  When CPS-0030 i click on get credits plan
  Then CPS-0030 get credits plan link is displayed
  When CPS-0050 Click on Monthly credit plan
  When PBP-0060 click on incart icon
  Then Click on Checkout in Cart Summary
  Then VR-0020 Click on the create an account
  Then PBP-0070 Enter Details in create Account
  Then CPS-0060 Enter Billing Information
  Then CPS-0060 Enter Payment Method
  Then CPS-0080 Order Confirmation is displayed
  Then CPS-0090 Available credits are displayed
  When i click on user name drop down
  Then then account is displayed
  When i click on account
  Then CPS-0100 Click on Change credit plan
  Then CPS-0100 Click on Annual credit plan
  Then PBP-0060 click on incart icon
  Then Click on Checkout in Cart Summary
  Then CO-0080 Enter CVV
  Then CPS-0080 Order Confirmation is displayed
  Then CPS-0090 Available credits are displayed
  When i click on user name drop down
  Then then account is displayed
  When i click on account
  Then CPS-0110 Click on Cancel Credit Plan
  When click on logout button
  


