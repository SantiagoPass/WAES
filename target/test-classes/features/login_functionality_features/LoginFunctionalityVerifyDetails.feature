Feature: New WAES's portal, and the initial functionality: login - Details verification

  Scenario Outline: Verify Details Information Page after successful login
    Given the user is on the WAES's portal page
    When the user perform login with username "<username>" and password "<password>"
    Then after login, page 'Your Profile' is opened
    When the user click on Details button
    Then Details page is displayed
    And the Name "<name>" is displayed
    And the Email address "<email>" is displayed
    When the user click on Logout link
    Then after logout, Login Page is displayed
    Examples:
      | username | password | name                | email                   |
      | admin    | hero     | Amazing Admin       | a.admin@wearewaes.com   |
      | dev      | wizard   | Zuper Dooper Dev    | zd.dev@wearewaes.com    |
      | tester   | maniac   | Al Skept-Cal Tester | as.tester@wearewaes.com |