@Instant_Checkout
Feature: URL instant checkout
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: URL instant checkout
  When navigate to market page
  Then navigate to lenlet_cart
  When ICO-0010 instant page is displayed
  Then PBP-0070 Enter Details in create Account
  Then ICO-0020 Billing information are displayed in incart
  Then PBP-0070 Enter Payment Method
  Then ICO-0020 Verify the Checkout Page
  Then ICO-0030 order conformation is displayed
  When click on logout button
  Then navigate to getbronze
  When ICO-0010 instant page is displayed
  Then PBP-0070 Enter Details in create Account
  Then ICO-0020 Billing information are displayed in incart
  Then PBP-0070 Enter Payment Method
  Then ICO-0020 Verify the Checkout Page
  Then getbronze order conformation is displayed
  When click on logout button
  Then navigate to getsilver
  When ICO-0010 instant page is displayed
  Then PBP-0070 Enter Details in create Account
  Then ICO-0020 Billing information are displayed in incart
  Then PBP-0070 Enter Payment Method
  Then ICO-0020 Verify the Checkout Page
  Then getsilver order conformation is displayed
  When click on logout button
  Then navigate to getgold
  When ICO-0010 instant page is displayed
  Then PBP-0070 Enter Details in create Account
  Then ICO-0020 Billing information are displayed in incart
  Then PBP-0070 Enter Payment Method
  Then ICO-0020 Verify the Checkout Page
  Then getgold order conformation is displayed
  When click on logout button
  Then navigate to getplatinum
  When ICO-0010 instant page is displayed
  Then PBP-0070 Enter Details in create Account
  Then ICO-0020 Billing information are displayed in incart
  Then PBP-0070 Enter Payment Method
  Then ICO-0020 Verify the Checkout Page
  Then getplatinum order conformation is displayed
  When click on logout button
  Then navigate to SoG
  When ICO-0010 instant page is displayed
  Then PBP-0070 Enter Details in create Account
  Then ICO-0020 Billing information are displayed in incart
  Then PBP-0070 Enter Payment Method
  Then ICO-0020 Verify the Checkout Page
  Then SoG order conformation is displayed
  When click on logout button
  Then navigate to BiaY
  When ICO-0010 instant page is displayed
  Then PBP-0070 Enter Details in create Account
  Then BiaY Billing information are displayed in incart
  Then BiYa Verify the Checkout Page
  Then BiaY order conformation is displayed
  When click on logout button
  Then navigate to 7daytrial
  When ICO-0040 7 days free trial page is displayed
  Then PBP-0070 Enter Details in create Account
  Then ICO-0020 Billing information are displayed in incart
  Then PBP-0070 Enter Payment Method
  Then ICO-0020 Verify the Checkout Page
  Then 7daytrial conformation is displayed
  When click on logout button



