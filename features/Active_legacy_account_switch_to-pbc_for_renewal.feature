@Active_legacy_account_switch_to-pbc_for_renewal
Feature: Active legacy account - switch to pbc for renewal
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: Active legacy account swith to pbc for renewal
  When navigate to market page
  When i move to subscription products
  Then click on ondemand subscription
  Then VR-0020 sign in group detail is displayed
  Then VR-0020 click on checkout button
  When VR-0020 Click on the create an account
  Then PBP-0070 Enter Details in create Account
  Then PBP-0070 Enter Billing information
  Then VR-0030 Enter Payment Method
  When VR-0030 Choose organization
  Then VR-0040 Place Order button is displayed and click on place order button
  When VR-0050 order conformation is displayed
  When VR-0060 Enter organization information
  Then SGB-0070 leader check list is displayed
  Then ALA-0010 click on Account
  When ALA-0020 click on On Demand subscription in account page
  Then ALA-0030 click Edit button in payment method
  When ALA-0040 click on change payment Method
  When ALA-0050 Billing information from pbc
  Then ALA-0060 click on Add Cupon in On demand subscription
  Then ALA-0070 click on Resend invoice

  

  
  
  
