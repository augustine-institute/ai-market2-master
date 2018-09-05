
@Topic_shares
Feature: Topic shares
  

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Topic shares
  Then TS-0130 click on video product ondemand page without user
  Then LPA-0010 click on login button
  When LPA-0010 Enter Parish Admin Name and password
  When Watch link is hovered
  Then LPA-0040 Click on Watch Movies and Verify with parish admin
  When TS-0010 click on product in movies link
  Then TS-0020 share model dialog page is displayed
  Then TS-0030 share icons are displayed
  When TS-0060 click on facbook
  Then TS-0020 share model dialog page is displayed
  When TS-0070 click on twitter
  Then TS-0020 share model dialog page is displayed
  When TS-0080 click on pinterest
  Then TS-0020 share model dialog page is displayed
  When TS-0090 click on gamil
  Then TS-0100 close the share icons
  When TS-0120 comments and rating are displayed
  When listen link is hovered
  Then LPA-0050 Click on Listen Talks and Verify with parish admin
  Then TS-0040 click on audio image
  Then LPA-0010 click on login button
  Then TS-0110 click on topicshares in on demand page
  Then TS-0110 Your Evangelization Impact are displayed
  Then TS-0050 click on play button
  Then i click on account and logout for parish
  


  




