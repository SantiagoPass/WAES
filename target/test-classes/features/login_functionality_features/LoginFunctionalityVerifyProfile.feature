Feature: New WAES's portal, and the initial functionality: login - Profile Verifications

  Scenario Outline: Verify Profile Information Page after successful login
    Given the user is on the WAES's portal page
    When the user perform login with username "<username>" and password "<password>"
    Then after login, page 'Your Profile' is opened
    When the user click on Profile button
    Then Profile page is displayed
    And the question information "<questionInfo>" is displayed
    And the power information "<powerInfo>" is displayed
    And the extended information "<is_isNot>" displayed
    When the user click on Logout link
    Then after logout, Login Page is displayed
    Examples:
      | username | password | questionInfo                            | powerInfo                                            | is_isNot |
      | admin    | hero     | How are you doing, Amazing Admin?       | Your super power: Change the course of a waterfall.  | is       |
      | dev      | wizard   | How are you doing, Zuper Dooper Dev?    | Your super power: Debug a repellent factory storage. | is not   |
      | tester   | maniac   | How are you doing, Al Skept-Cal Tester? | Your super power: Voltage AND Current.               | is not   |
