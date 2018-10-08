@Search_page
Feature: This file search icon 
  

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: Purchase search product Page 
  When navigate to market page
  Then SPP-0010 digital products and search icon are displayed
  When SPP-0020 click on the search icon
  Then SPP-0030 Search product page is displayed
  When SPP-0040 click on watch in left side view
  Then SPP-0040 Watch sub options are displayed
  When SPP-0040 click on Listen in left side view
  Then SPP-0040 Listen sub options are displayed
  When SPP-0040 click on Read in left side view
  Then SPP-0040 Read sub options are displayed
  When SPP-0040 select one or more attribute filter
  When SPP-0050 click on filter product
  Then SPP-0050 Product details are displayed
  When i move to watch products
  Then SPP-0060 Product page is displayed
  Then SPP-0070 featured drop down is displayed
  When SPP-0080 Click on product
  Then SPP-0080 is products displayed
  