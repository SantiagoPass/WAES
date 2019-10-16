Feature: New WAES's portal, and the initial functionality: SignUp - Verify Profile

  Scenario: Verify Profile Information Page after successful SignUp
    Given the user is on the WAES's portal page
    When the user perform SignUp using: username "test", password "test", name "test", email "test@test.com", day "25", month "April", year "1984"
    Then after signUp, page 'Your Profile' is opened
    When the user click on Profile button
    Then Profile page is displayed
    And the question information "How are you doing, test?" is displayed
    And the power information "Your super power: You have no super powers yet. =[." is displayed
    And the extended information "is not" displayed
    When the user click on Logout link
    Then after logout, Login Page is displayed