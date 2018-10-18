@PBC_subscription
Feature: This file will test the Pbc Subcription
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: SetUp Pbc Subscription
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
  Then VR-0040 Place Order button is displayed and click on place order button
  When PBC-0030 order conformation is displayed
  