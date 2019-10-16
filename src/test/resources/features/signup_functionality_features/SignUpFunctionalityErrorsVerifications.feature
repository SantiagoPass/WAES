Feature: New WAES's portal, and the initial functionality: SignUp - Errors Verifications

  Scenario: Verify validation when the username field is empty during SignUp process
    Given the user is on the WAES's portal page
    When the user click on SignUp button
    And on SignUp page, the user click on Submit button
    Then on SignUp page, "username" field is validated with the text "Please fill out this field."

  Scenario: Verify validation when the password field is empty during SignUp process
    Given the user is on the WAES's portal page
    When the user click on SignUp button
    Then SignUp Page is displayed
    When on SignUp page, the user input into username box the value "test"
    And on SignUp page, the user click on Submit button
    Then on SignUp page, "password" field is validated with the text "Please fill out this field."

  Scenario: Verify validation when the name field is empty during SignUp process
    Given the user is on the WAES's portal page
    When the user click on SignUp button
    Then SignUp Page is displayed
    When on SignUp page, the user input into username box the value "test"
    And on SignUp page, the user input into password box the value "test"
    And on SignUp page, the user click on Submit button
    Then on SignUp page, "name" field is validated with the text "Please fill out this field."

  Scenario Outline: Verify validation when the email field doesn't have the correct format during SignUp process
    Given the user is on the WAES's portal page
    When the user click on SignUp button
    Then SignUp Page is displayed
    When on SignUp page, the user input into username box the value "test"
    And on SignUp page, the user input into password box the value "test"
    And on SignUp page, the user input into name box the value "test"
    And on SignUp page, the user input into email box the value "<email>"
    Then on SignUp page, "email" field is validated with the text "<message_error>"
    Examples:
      | email    | message_error                                                        |
      |          | Please fill out this field.                                          |
      | new      | Please include an '@' in the email address. 'new' is missing an '@'. |
      | new@     | Please enter a part following '@'. 'new@' is incomplete.             |
      | new@.com | '.' is used at a wrong position in '.com'.                           |
      | new@new. | '.' is used at a wrong position in 'new.'.                           |

  Scenario: Verify validation in the date fields during SignUp process
    Given the user is on the WAES's portal page
    When the user click on SignUp button
    Then SignUp Page is displayed
    When on SignUp page, the user input into username box the value "test"
    And on SignUp page, the user input into password box the value "test"
    And on SignUp page, the user input into name box the value "test"
    And on SignUp page, the user input into email box the value "test@test.com"
    And on SignUp page, the user click on Submit button
    Then on SignUp page, "day" field is validated with the text "Please select an item in the list."
    When on SignUp page, the user select as day the value "25"
    And on SignUp page, the user click on Submit button
    Then on SignUp page, "month" field is validated with the text "Please select an item in the list."
    When on SignUp page, the user select as month the value "April"
    And on SignUp page, the user click on Submit button
    Then on SignUp page, "year" field is validated with the text "Please select an item in the list."

