Feature: New WAES's portal, and the initial functionality: login - Successful and Unsuccessful login

  Scenario Outline: Login with valid user authentication
    Given the user is on the WAES's portal page
    When the user perform login with username "<username>" and password "<password>"
    Then after login, page 'Your Profile' is opened
    When the user click on Logout link
    Then after logout, Login Page is displayed
    Examples:
      | username | password |
      | admin    | hero     |
      | dev      | wizard   |
      | tester   | maniac   |

  Scenario: Login with invalid user authentication
    Given the user is on the WAES's portal page
    When the user perform login with username "test" and password "test"
    Then after login, the message "Wrong credentials. You can do it, try again!" is displayed on header status bar