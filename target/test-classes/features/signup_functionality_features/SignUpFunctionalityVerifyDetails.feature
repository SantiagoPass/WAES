Feature: New WAES's portal, and the initial functionality: SignUp - Verify Details

  Scenario: Verify Details Information Page after successful SignUp
    Given the user is on the WAES's portal page
    When the user perform SignUp using: username "test", password "test", name "test", email "test@test.com", day "25", month "April", year "1984"
    Then after signUp, page 'Your Profile' is opened
    When the user click on Details button
    Then Details page is displayed
    And the Name "test" is displayed
    And the Email address "test@test.com" is displayed
    When the user click on Logout link
    Then after logout, Login Page is displayed