@Formed_Funding_Contribution
Feature: This file will test the Setup_Group_Button is working or not
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: FORMED Funding Contribution
  When navigate to market page
  When i move to shops products
  Then click on ondemand subscription
  Then VR-0020 sign in group detail is displayed
  Then VR-0020 click on checkout button
  When VR-0020 Click on the create an account
  Then PBP-0070 Enter Details in create Account
  Then VR-0030 Billing information are displayed
  Then SGB-0010 Enter Payment Method with Form fund
  Then SGB-0020 agree for terms of Funding
  Then SGB-0020 Set goal
  When VR-0040 Choose organization
  When SGB-0040 Click on Setup group and verify
  Then SGB-0050 Enter Organisation information is displayed
  When SGB-0060 Conformation prompt is displayed
  Then FFC-0010 Leader checklist is displayed
  Then FFC-0020 Navigate to community page
  Then FFC-0030 Formed Funding goal is displayed and click on Contribute button
  Then FFC-0040 Formed Funding Campaign page is displayed
  When FFC-0050 Enter the credit card Cvv number
  Then FFC-0060 Conformation Contribution is displayed
  When ALP-0020 click on Account page
  When FFC-0070 click on View button in Account page
  Then FFC-0080 order Details is displayed
  Then FFC-0020 Navigate to community page
  Then FFC-0090 Formed Funnding Contribution is displayed


  



  

