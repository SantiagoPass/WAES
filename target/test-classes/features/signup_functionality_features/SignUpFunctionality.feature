Feature: New WAES's portal, and the initial functionality: SignUp - Successful and Unsuccessful SignUp

  Scenario: Sign Up with a new valid user
    Given the user is on the WAES's portal page
    When the user perform SignUp using: username "test", password "test", name "test", email "test@test.com", day "25", month "April", year "1984"
    Then after signUp, page 'Your Profile' is opened
    And after signUp, the Welcome message "Welcome to your new profile page, test!" is displayed
    When the user click on Logout link
    Then after logout, Login Page is displayed

  Scenario Outline: Verify Sign Up error verification when the user is already registered (username/email)
    Given the user is on the WAES's portal page
    When the user perform SignUp using: username "<username>", password "test", name "New User", email "<email>", day "25", month "April", year "1984"
    Then unsuccessful SignUp error is displayed
    Examples:
      | username | email                   |
      | admin    | new@wearewaes.com       |
      | new      | as.tester@wearewaes.com |
      | admin    | as.tester@wearewaes.com |

