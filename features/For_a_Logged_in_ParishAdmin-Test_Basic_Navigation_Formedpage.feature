@ParishAdmin-Test_Basic_Navigation_Formedpage
Feature: For a Logged in ParishAdmin-Test Basic Navigation Formedpage
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: For a Logged in ParishAdmin-Test Basic Navigation Formedpage
    When LPA-0010 click on login button
    When LPA-0010 Enter Parish Admin Name and password
    Then LPA-0020 Click on study Link and Verify with parish admin
    Then LPA-0020 Click on read Link and Verify with parish admin
    Then LPA-0020 Click on watch Link and Verify with parish admin
    Then LPA-0020 Click on Listen Link and Verify with parish admin
    When STUDY link is hovered
    Then LPA-0030 Click on Faith Information and Verify with parish admin
    Then LPA-0030 Click on sacramental-preparation and Verify with parish admin
    Then LPA-0030 Click on Bible studies and Verify with parish admin
    Then LPA-0030 Click on Current Topics and Verify with parish admin
    Then LPA-0030 Click on Youth Disciple and Verify with parish admin
    Then LPA-0030 Click on espanol and Verify with parish admin
    When Watch link is hovered
    Then LPA-0040 Click on Watch Movies and Verify with parish admin
    Then LPA-0040 Click on Documentaries and Verify with parish admin
    Then LPA-0040 Click on Apologetics and Verify with parish admin
    Then LPA-0040 Click on Watch Youth Disciple and Verify with parish admin
    Then LPA-0040 Click on watch espanol and Verify with parish admin
    When listen link is hovered
    Then LPA-0050 Click on Listen Talks and Verify with parish admin
    Then LPA-0050 Click on Listen audio drama and Verify with parish admin
    Then LPA-0050 Click on Listen audio books and Verify with parish admin
    Then LPA-0050 Click on Listen espanol and Verify with parish admin
    When Read link is hovered
    Then LPA-0060 Click on NonFiction and Verify with parish admin
    Then LPA-0060 Click on Fiction and Verify with parish admin
    Then LPA-0060 Click on Read Youth and Verify with parish admin
    Then LPA-0060 Click on Read espanol and Verify with parish admin
    Then i click on account and logout for parish
