@Vindicia_Replacement
Feature: Vindicia Replacement 
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Vindicia Replacement
    Then VR-0010 entercode,getfreetrail,sign up group is displayed
    Then VR-0020 sign in group detail is displayed 
    When VR-0020 click on checkout button
    When VR-0020 Click on the create an account
    Then PBP-0070 Enter Details in create Account
    Then VR-0030 Billing information are displayed
    Then VR-0030 Enter Payment Method
    When VR-0040 click on Entercupon 
    When VR-0040 Choose organization
    When VR-0050 order conformation is displayed
    When VR-0060 Enter organization information
    Then VR-0060 Leader checklist is displayed
    Then VR-0070 Account information is displayed
    Then I navigate to "/"
    When navigate to market page
    When i move to shops products
    Then VR-0080 click on ondemand subscription
    Then VR-0090 sign in group detail is displayed
    When VR-0020 click on checkout button
    When PBP-0070 Click on the create an account
    Then PBP-0070 Enter Details in create Account
    Then VR-0100 Billing information are displayed
    Then VR-0030 Enter Payment Method
    When VR-0120 click on Entercupon
    When VR-0130 order conformation is displayed
    Then VR-0140 subscription information
    











