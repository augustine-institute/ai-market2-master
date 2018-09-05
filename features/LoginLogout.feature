@Login_Logout
Feature: This file Login logout page 
  

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Login and Logout Page
  When navigate to market page
  Then LLP-0010 Formed icon, Ondemand, Library, Market are displayed
  When i click on login button to verify for forgot password
  Then LLP-0020 Email, Password, submit, Forgot password are displayed
  When LLP-0040 When click on Forgot Password
  Then LLP-0040 Prompt is displayed to enter email
  Then click on back to enter email
  When LLP-0050 Click on account drop down for parish user 
  Then LLP-0050 Account, subscription, dashboard, logout are displayed
  When LLP-0060 Click on Account in username drop down 
  Then LLP-0060 Name, Email, Password are displayed
  When LLP-0080 Click on Subscription in username drop down 
  Then LLP-0080 Subscription, Parish, Payment information are displayed 
  When LLP-0110 Click on dashboard in username drop down
  When LLP-0120 Click on logout button
  Then I navigate to "/"
  When LLP-0050 Click on username drop down for individual user
  Then LLP-0050 Account, Subscription, logout are displayed
  When LLP-0100 Click on Subscription for individual user
  Then LLP-0100 Subscription payement is displayed

