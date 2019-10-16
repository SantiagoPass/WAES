Feature: New WAES's portal, and the initial functionality: login - Errors Verifications

  Scenario: Verify validation when the username field is empty during login process
    Given the user is on the WAES's portal page
    When the user click on login button
    And on login page, the user click on Log In button
    Then on login page, "username" field is validated with the text "Please fill out this field."

  Scenario: Verify validation when the password field is empty during login process
    Given the user is on the WAES's portal page
    When the user click on login button
    And on Login page, the user input into username box the value "test"
    And on login page, the user click on Log In button
    Then on login page, "password" field is validated with the text "Please fill out this field."