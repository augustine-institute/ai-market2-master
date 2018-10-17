
@Vindicia_Replacement
Feature: Vindicia Replacement 
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Vindicia Replacement
    Then VR-0010 entercode,getfreetrail,sign up group is displayed
    When VR-0010 click on Sign up group
    Then VR-0020 sign in group detail is displayed 
    When VR-0020 click on checkout button
    When VR-0020 Click on the create an account
    Then PBP-0070 Enter Details in create Account
    Then PBP-0070 Enter Billing information
    Then VR-0030 Enter Payment Method
    When VR-0030 Choose organization
    When VR-0050 click on Entercupon
    Then VR-0040 Place Order button is displayed and click on place order button
    When VR-0050 order conformation is displayed
    When VR-0060 Enter organization information
    Then VR-0060 Leader checklist is displayed
    Then VR-0070 Subscription information is displayed
    Then I navigate to "/"
    When navigate to market page
    When i move to subscription products
    Then VR-0080 click on ondemand subscription
    Then VR-0090 sign in group detail is displayed
    When VR-0020 click on checkout button
    When VR-0020 Click on the create an account
    Then PBP-0070 Enter Details in create Account
    Then PBP-0070 Enter Billing information
    Then VR-0030 Enter Payment Method
    When VR-0050 click on Entercupon
    Then CO-0080 Click on place Order
    When VR-0130 order conformation is displayed











