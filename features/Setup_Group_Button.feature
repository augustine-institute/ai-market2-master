@Setup_Group_Button
Feature: This file will test the Setup_Group_Button is working or not
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: Setup Group Button for Annual Subscription
  When navigate to market page
  When i move to subscription products
  Then click on ondemand subscription
  Then VR-0020 sign in group detail is displayed
  When VR-0020 click on checkout button
  When VR-0020 Click on the create an account
  Then PBP-0070 Enter Details in create Account
  Then PBP-0070 Enter Billing information
  Then SGB-0010 Enter Payment Method with Form fund
  Then SGB-0020 agree for terms of Funding
  Then SGB-0020 Set goal
  When SGB-0020 Click on Continue to Organisation
  When VR-0040 Choose organization
  Then VR-0040 Place Order button is displayed and click on place order button
  Then SGB-0030 summary Page is displayed
  Then SGB-0040 Click on Setup group and verify
  Then SGB-0050 Enter Organisation information