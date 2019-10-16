$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login_functionality_features/LoginFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "New WAES\u0027s portal, and the initial functionality: login - Successful and Unsuccessful login",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---successful-and-unsuccessful-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login with valid user authentication",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---successful-and-unsuccessful-login;login-with-valid-user-authentication",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user perform login with username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "after login, page \u0027Your Profile\u0027 is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "after logout, Login Page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---successful-and-unsuccessful-login;login-with-valid-user-authentication;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---successful-and-unsuccessful-login;login-with-valid-user-authentication;;1"
    },
    {
      "cells": [
        "admin",
        "hero"
      ],
      "line": 11,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---successful-and-unsuccessful-login;login-with-valid-user-authentication;;2"
    },
    {
      "cells": [
        "dev",
        "wizard"
      ],
      "line": 12,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---successful-and-unsuccessful-login;login-with-valid-user-authentication;;3"
    },
    {
      "cells": [
        "tester",
        "maniac"
      ],
      "line": 13,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---successful-and-unsuccessful-login;login-with-valid-user-authentication;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login with valid user authentication",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---successful-and-unsuccessful-login;login-with-valid-user-authentication;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user perform login with username \"admin\" and password \"hero\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "after login, page \u0027Your Profile\u0027 is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "after logout, Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 11842585178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 38
    },
    {
      "val": "hero",
      "offset": 59
    }
  ],
  "location": "WAESLoginSteps.performLogin(String,String)"
});
formatter.result({
  "duration": 5244247293,
  "status": "passed"
});
formatter.match({
  "location": "WAESLoginSteps.pageProfileShouldBeOpen()"
});
formatter.result({
  "duration": 48323854,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.logoutSession()"
});
formatter.result({
  "duration": 841061408,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.isLoginPageDisplayed()"
});
formatter.result({
  "duration": 51654332,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login with valid user authentication",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---successful-and-unsuccessful-login;login-with-valid-user-authentication;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user perform login with username \"dev\" and password \"wizard\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "after login, page \u0027Your Profile\u0027 is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "after logout, Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 676498529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dev",
      "offset": 38
    },
    {
      "val": "wizard",
      "offset": 57
    }
  ],
  "location": "WAESLoginSteps.performLogin(String,String)"
});
formatter.result({
  "duration": 3995681334,
  "status": "passed"
});
formatter.match({
  "location": "WAESLoginSteps.pageProfileShouldBeOpen()"
});
formatter.result({
  "duration": 43719918,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.logoutSession()"
});
formatter.result({
  "duration": 725777477,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.isLoginPageDisplayed()"
});
formatter.result({
  "duration": 35383235,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login with valid user authentication",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---successful-and-unsuccessful-login;login-with-valid-user-authentication;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user perform login with username \"tester\" and password \"maniac\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "after login, page \u0027Your Profile\u0027 is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "after logout, Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 813689031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tester",
      "offset": 38
    },
    {
      "val": "maniac",
      "offset": 60
    }
  ],
  "location": "WAESLoginSteps.performLogin(String,String)"
});
formatter.result({
  "duration": 3990825688,
  "status": "passed"
});
formatter.match({
  "location": "WAESLoginSteps.pageProfileShouldBeOpen()"
});
formatter.result({
  "duration": 54375115,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.logoutSession()"
});
formatter.result({
  "duration": 725490342,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.isLoginPageDisplayed()"
});
formatter.result({
  "duration": 35233608,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login with invalid user authentication",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---successful-and-unsuccessful-login;login-with-invalid-user-authentication",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the user perform login with username \"test\" and password \"test\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "after login, the message \"Wrong credentials. You can do it, try again!\" is displayed on header status bar",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 673997291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 38
    },
    {
      "val": "test",
      "offset": 58
    }
  ],
  "location": "WAESLoginSteps.performLogin(String,String)"
});
formatter.result({
  "duration": 3893107753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrong credentials. You can do it, try again!",
      "offset": 26
    }
  ],
  "location": "WAESLoginSteps.verifyLoginstatus(String)"
});
formatter.result({
  "duration": 196639877,
  "status": "passed"
});
formatter.uri("src/test/resources/features/login_functionality_features/LoginFunctionalityErrorVerifications.feature");
formatter.feature({
  "line": 1,
  "name": "New WAES\u0027s portal, and the initial functionality: login - Errors Verifications",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---errors-verifications",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify validation when the username field is empty during login process",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---errors-verifications;verify-validation-when-the-username-field-is-empty-during-login-process",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "on login page, the user click on Log In button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "on login page, \"username\" field is validated with the text \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 8361439550,
  "status": "passed"
});
formatter.match({
  "location": "WAESLoginSteps.goToLoginPage()"
});
formatter.result({
  "duration": 1017558539,
  "status": "passed"
});
formatter.match({
  "location": "WAESLoginSteps.performLogin()"
});
formatter.result({
  "duration": 1441385461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 16
    },
    {
      "val": "Please fill out this field.",
      "offset": 60
    }
  ],
  "location": "WAESLoginSteps.verifyField(String,String)"
});
formatter.result({
  "duration": 77796133,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify validation when the password field is empty during login process",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---errors-verifications;verify-validation-when-the-password-field-is-empty-during-login-process",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "on Login page, the user input into username box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "on login page, the user click on Log In button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "on login page, \"password\" field is validated with the text \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 738484565,
  "status": "passed"
});
formatter.match({
  "location": "WAESLoginSteps.goToLoginPage()"
});
formatter.result({
  "duration": 907188984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 59
    }
  ],
  "location": "WAESLoginSteps.inputUsername(String)"
});
formatter.result({
  "duration": 1331716028,
  "status": "passed"
});
formatter.match({
  "location": "WAESLoginSteps.performLogin()"
});
formatter.result({
  "duration": 827859759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 16
    },
    {
      "val": "Please fill out this field.",
      "offset": 60
    }
  ],
  "location": "WAESLoginSteps.verifyField(String,String)"
});
formatter.result({
  "duration": 55297114,
  "status": "passed"
});
formatter.uri("src/test/resources/features/login_functionality_features/LoginFunctionalityVerifyDetails.feature");
formatter.feature({
  "line": 1,
  "name": "New WAES\u0027s portal, and the initial functionality: login - Details verification",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---details-verification",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify Details Information Page after successful login",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---details-verification;verify-details-information-page-after-successful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user perform login with username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "after login, page \u0027Your Profile\u0027 is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user click on Details button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Details page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the Name \"\u003cname\u003e\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the Email address \"\u003cemail\u003e\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "after logout, Login Page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---details-verification;verify-details-information-page-after-successful-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "name",
        "email"
      ],
      "line": 14,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---details-verification;verify-details-information-page-after-successful-login;;1"
    },
    {
      "cells": [
        "admin",
        "hero",
        "Amazing Admin",
        "a.admin@wearewaes.com"
      ],
      "line": 15,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---details-verification;verify-details-information-page-after-successful-login;;2"
    },
    {
      "cells": [
        "dev",
        "wizard",
        "Zuper Dooper Dev",
        "zd.dev@wearewaes.com"
      ],
      "line": 16,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---details-verification;verify-details-information-page-after-successful-login;;3"
    },
    {
      "cells": [
        "tester",
        "maniac",
        "Al Skept-Cal Tester",
        "as.tester@wearewaes.com"
      ],
      "line": 17,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---details-verification;verify-details-information-page-after-successful-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Verify Details Information Page after successful login",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---details-verification;verify-details-information-page-after-successful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user perform login with username \"admin\" and password \"hero\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "after login, page \u0027Your Profile\u0027 is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user click on Details button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Details page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the Name \"Amazing Admin\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the Email address \"a.admin@wearewaes.com\" is displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "after logout, Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 7368664052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 38
    },
    {
      "val": "hero",
      "offset": 59
    }
  ],
  "location": "WAESLoginSteps.performLogin(String,String)"
});
formatter.result({
  "duration": 4177276495,
  "status": "passed"
});
formatter.match({
  "location": "WAESLoginSteps.pageProfileShouldBeOpen()"
});
formatter.result({
  "duration": 41734682,
  "status": "passed"
});
formatter.match({
  "location": "WAESDetailsSteps.theUserClickOnDetailsButton()"
});
formatter.result({
  "duration": 894654363,
  "status": "passed"
});
formatter.match({
  "location": "WAESDetailsSteps.detailsPageIsDisplayed()"
});
formatter.result({
  "duration": 75933023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazing Admin",
      "offset": 10
    }
  ],
  "location": "WAESDetailsSteps.theNameIsDisplayed(String)"
});
formatter.result({
  "duration": 67041184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a.admin@wearewaes.com",
      "offset": 19
    }
  ],
  "location": "WAESDetailsSteps.theEmailIsDisplayed(String)"
});
formatter.result({
  "duration": 49355859,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.logoutSession()"
});
formatter.result({
  "duration": 867006038,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.isLoginPageDisplayed()"
});
formatter.result({
  "duration": 43386171,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify Details Information Page after successful login",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---details-verification;verify-details-information-page-after-successful-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user perform login with username \"dev\" and password \"wizard\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "after login, page \u0027Your Profile\u0027 is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user click on Details button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Details page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the Name \"Zuper Dooper Dev\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the Email address \"zd.dev@wearewaes.com\" is displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "after logout, Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 736006167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dev",
      "offset": 38
    },
    {
      "val": "wizard",
      "offset": 57
    }
  ],
  "location": "WAESLoginSteps.performLogin(String,String)"
});
formatter.result({
  "duration": 4133316987,
  "status": "passed"
});
formatter.match({
  "location": "WAESLoginSteps.pageProfileShouldBeOpen()"
});
formatter.result({
  "duration": 34927363,
  "status": "passed"
});
formatter.match({
  "location": "WAESDetailsSteps.theUserClickOnDetailsButton()"
});
formatter.result({
  "duration": 745528210,
  "status": "passed"
});
formatter.match({
  "location": "WAESDetailsSteps.detailsPageIsDisplayed()"
});
formatter.result({
  "duration": 40823870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zuper Dooper Dev",
      "offset": 10
    }
  ],
  "location": "WAESDetailsSteps.theNameIsDisplayed(String)"
});
formatter.result({
  "duration": 49667698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zd.dev@wearewaes.com",
      "offset": 19
    }
  ],
  "location": "WAESDetailsSteps.theEmailIsDisplayed(String)"
});
formatter.result({
  "duration": 42414295,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.logoutSession()"
});
formatter.result({
  "duration": 728508981,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.isLoginPageDisplayed()"
});
formatter.result({
  "duration": 35886653,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify Details Information Page after successful login",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---details-verification;verify-details-information-page-after-successful-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user perform login with username \"tester\" and password \"maniac\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "after login, page \u0027Your Profile\u0027 is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user click on Details button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Details page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the Name \"Al Skept-Cal Tester\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the Email address \"as.tester@wearewaes.com\" is displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "after logout, Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 708373692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tester",
      "offset": 38
    },
    {
      "val": "maniac",
      "offset": 60
    }
  ],
  "location": "WAESLoginSteps.performLogin(String,String)"
});
formatter.result({
  "duration": 4129630389,
  "status": "passed"
});
formatter.match({
  "location": "WAESLoginSteps.pageProfileShouldBeOpen()"
});
formatter.result({
  "duration": 32861954,
  "status": "passed"
});
formatter.match({
  "location": "WAESDetailsSteps.theUserClickOnDetailsButton()"
});
formatter.result({
  "duration": 723835125,
  "status": "passed"
});
formatter.match({
  "location": "WAESDetailsSteps.detailsPageIsDisplayed()"
});
formatter.result({
  "duration": 33374228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Al Skept-Cal Tester",
      "offset": 10
    }
  ],
  "location": "WAESDetailsSteps.theNameIsDisplayed(String)"
});
formatter.result({
  "duration": 41812059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "as.tester@wearewaes.com",
      "offset": 19
    }
  ],
  "location": "WAESDetailsSteps.theEmailIsDisplayed(String)"
});
formatter.result({
  "duration": 42255812,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.logoutSession()"
});
formatter.result({
  "duration": 776241319,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.isLoginPageDisplayed()"
});
formatter.result({
  "duration": 34375936,
  "status": "passed"
});
formatter.uri("src/test/resources/features/login_functionality_features/LoginFunctionalityVerifyProfile.feature");
formatter.feature({
  "line": 1,
  "name": "New WAES\u0027s portal, and the initial functionality: login - Profile Verifications",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---profile-verifications",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify Profile Information Page after successful login",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---profile-verifications;verify-profile-information-page-after-successful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user perform login with username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "after login, page \u0027Your Profile\u0027 is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user click on Profile button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Profile page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the question information \"\u003cquestionInfo\u003e\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the power information \"\u003cpowerInfo\u003e\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the extended information \"\u003cis_isNot\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "after logout, Login Page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---profile-verifications;verify-profile-information-page-after-successful-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "questionInfo",
        "powerInfo",
        "is_isNot"
      ],
      "line": 15,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---profile-verifications;verify-profile-information-page-after-successful-login;;1"
    },
    {
      "cells": [
        "admin",
        "hero",
        "How are you doing, Amazing Admin?",
        "Your super power: Change the course of a waterfall.",
        "is"
      ],
      "line": 16,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---profile-verifications;verify-profile-information-page-after-successful-login;;2"
    },
    {
      "cells": [
        "dev",
        "wizard",
        "How are you doing, Zuper Dooper Dev?",
        "Your super power: Debug a repellent factory storage.",
        "is not"
      ],
      "line": 17,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---profile-verifications;verify-profile-information-page-after-successful-login;;3"
    },
    {
      "cells": [
        "tester",
        "maniac",
        "How are you doing, Al Skept-Cal Tester?",
        "Your super power: Voltage AND Current.",
        "is not"
      ],
      "line": 18,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---profile-verifications;verify-profile-information-page-after-successful-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Verify Profile Information Page after successful login",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---profile-verifications;verify-profile-information-page-after-successful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user perform login with username \"admin\" and password \"hero\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "after login, page \u0027Your Profile\u0027 is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user click on Profile button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Profile page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the question information \"How are you doing, Amazing Admin?\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the power information \"Your super power: Change the course of a waterfall.\" is displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the extended information \"is\" displayed",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "after logout, Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 7385572344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 38
    },
    {
      "val": "hero",
      "offset": 59
    }
  ],
  "location": "WAESLoginSteps.performLogin(String,String)"
});
formatter.result({
  "duration": 5503666555,
  "status": "passed"
});
formatter.match({
  "location": "WAESLoginSteps.pageProfileShouldBeOpen()"
});
formatter.result({
  "duration": 41493695,
  "status": "passed"
});
formatter.match({
  "location": "WAESProfileSteps.theUserClickOnProfileButton()"
});
formatter.result({
  "duration": 724756193,
  "status": "passed"
});
formatter.match({
  "location": "WAESProfileSteps.profilePageIsDisplayed()"
});
formatter.result({
  "duration": 27891176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "How are you doing, Amazing Admin?",
      "offset": 26
    }
  ],
  "location": "WAESProfileSteps.theQuestionInformationIsDisplayed(String)"
});
formatter.result({
  "duration": 48274445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your super power: Change the course of a waterfall.",
      "offset": 23
    }
  ],
  "location": "WAESProfileSteps.thePowerInformationIsDisplayed(String)"
});
formatter.result({
  "duration": 46073393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "is",
      "offset": 26
    }
  ],
  "location": "WAESProfileSteps.theExtendedInformationIsDisplayed(String)"
});
formatter.result({
  "duration": 42347173,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.logoutSession()"
});
formatter.result({
  "duration": 725962529,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.isLoginPageDisplayed()"
});
formatter.result({
  "duration": 39822163,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify Profile Information Page after successful login",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---profile-verifications;verify-profile-information-page-after-successful-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user perform login with username \"dev\" and password \"wizard\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "after login, page \u0027Your Profile\u0027 is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user click on Profile button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Profile page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the question information \"How are you doing, Zuper Dooper Dev?\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the power information \"Your super power: Debug a repellent factory storage.\" is displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the extended information \"is not\" displayed",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "after logout, Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 744396454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dev",
      "offset": 38
    },
    {
      "val": "wizard",
      "offset": 57
    }
  ],
  "location": "WAESLoginSteps.performLogin(String,String)"
});
formatter.result({
  "duration": 4142529522,
  "status": "passed"
});
formatter.match({
  "location": "WAESLoginSteps.pageProfileShouldBeOpen()"
});
formatter.result({
  "duration": 34724132,
  "status": "passed"
});
formatter.match({
  "location": "WAESProfileSteps.theUserClickOnProfileButton()"
});
formatter.result({
  "duration": 709012753,
  "status": "passed"
});
formatter.match({
  "location": "WAESProfileSteps.profilePageIsDisplayed()"
});
formatter.result({
  "duration": 28754443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "How are you doing, Zuper Dooper Dev?",
      "offset": 26
    }
  ],
  "location": "WAESProfileSteps.theQuestionInformationIsDisplayed(String)"
});
formatter.result({
  "duration": 41049475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your super power: Debug a repellent factory storage.",
      "offset": 23
    }
  ],
  "location": "WAESProfileSteps.thePowerInformationIsDisplayed(String)"
});
formatter.result({
  "duration": 42139281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "is not",
      "offset": 26
    }
  ],
  "location": "WAESProfileSteps.theExtendedInformationIsDisplayed(String)"
});
formatter.result({
  "duration": 20056121693,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.logoutSession()"
});
formatter.result({
  "duration": 945515812,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.isLoginPageDisplayed()"
});
formatter.result({
  "duration": 44474111,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify Profile Information Page after successful login",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-login---profile-verifications;verify-profile-information-page-after-successful-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user perform login with username \"tester\" and password \"maniac\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "after login, page \u0027Your Profile\u0027 is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user click on Profile button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Profile page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the question information \"How are you doing, Al Skept-Cal Tester?\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the power information \"Your super power: Voltage AND Current.\" is displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the extended information \"is not\" displayed",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "after logout, Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 687626378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tester",
      "offset": 38
    },
    {
      "val": "maniac",
      "offset": 60
    }
  ],
  "location": "WAESLoginSteps.performLogin(String,String)"
});
formatter.result({
  "duration": 3870204135,
  "status": "passed"
});
formatter.match({
  "location": "WAESLoginSteps.pageProfileShouldBeOpen()"
});
formatter.result({
  "duration": 40111628,
  "status": "passed"
});
formatter.match({
  "location": "WAESProfileSteps.theUserClickOnProfileButton()"
});
formatter.result({
  "duration": 755893943,
  "status": "passed"
});
formatter.match({
  "location": "WAESProfileSteps.profilePageIsDisplayed()"
});
formatter.result({
  "duration": 39821231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "How are you doing, Al Skept-Cal Tester?",
      "offset": 26
    }
  ],
  "location": "WAESProfileSteps.theQuestionInformationIsDisplayed(String)"
});
formatter.result({
  "duration": 68421387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your super power: Voltage AND Current.",
      "offset": 23
    }
  ],
  "location": "WAESProfileSteps.thePowerInformationIsDisplayed(String)"
});
formatter.result({
  "duration": 48680908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "is not",
      "offset": 26
    }
  ],
  "location": "WAESProfileSteps.theExtendedInformationIsDisplayed(String)"
});
formatter.result({
  "duration": 20049332553,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.logoutSession()"
});
formatter.result({
  "duration": 785667807,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.isLoginPageDisplayed()"
});
formatter.result({
  "duration": 39605414,
  "status": "passed"
});
formatter.uri("src/test/resources/features/signup_functionality_features/SignUpFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "New WAES\u0027s portal, and the initial functionality: SignUp - Successful and Unsuccessful SignUp",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---successful-and-unsuccessful-signup",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Sign Up with a new valid user",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---successful-and-unsuccessful-signup;sign-up-with-a-new-valid-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user perform SignUp using: username \"test\", password \"test\", name \"test\", email \"test@test.com\", day \"25\", month \"April\", year \"1984\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "after signUp, page \u0027Your Profile\u0027 is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "after signUp, the Welcome message \"Welcome to your new profile page, test!\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "after logout, Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 7536889758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 41
    },
    {
      "val": "test",
      "offset": 58
    },
    {
      "val": "test",
      "offset": 71
    },
    {
      "val": "test@test.com",
      "offset": 85
    },
    {
      "val": "25",
      "offset": 106
    },
    {
      "val": "April",
      "offset": 118
    },
    {
      "val": "1984",
      "offset": 132
    }
  ],
  "location": "WAESSignUpSteps.signUpNewUser(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 10007866825,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.pageProfileShouldBeOpen()"
});
formatter.result({
  "duration": 48696289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to your new profile page, test!",
      "offset": 35
    }
  ],
  "location": "WAESSignUpSteps.theWelcomeMessageIsDisplayed(String)"
});
formatter.result({
  "duration": 45249746,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.logoutSession()"
});
formatter.result({
  "duration": 730368827,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.isLoginPageDisplayed()"
});
formatter.result({
  "duration": 40547923,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify Sign Up error verification when the user is already registered (username/email)",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---successful-and-unsuccessful-signup;verify-sign-up-error-verification-when-the-user-is-already-registered-(username/email)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user perform SignUp using: username \"\u003cusername\u003e\", password \"test\", name \"New User\", email \"\u003cemail\u003e\", day \"25\", month \"April\", year \"1984\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "unsuccessful SignUp error is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---successful-and-unsuccessful-signup;verify-sign-up-error-verification-when-the-user-is-already-registered-(username/email);",
  "rows": [
    {
      "cells": [
        "username",
        "email"
      ],
      "line": 16,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---successful-and-unsuccessful-signup;verify-sign-up-error-verification-when-the-user-is-already-registered-(username/email);;1"
    },
    {
      "cells": [
        "admin",
        "new@wearewaes.com"
      ],
      "line": 17,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---successful-and-unsuccessful-signup;verify-sign-up-error-verification-when-the-user-is-already-registered-(username/email);;2"
    },
    {
      "cells": [
        "new",
        "as.tester@wearewaes.com"
      ],
      "line": 18,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---successful-and-unsuccessful-signup;verify-sign-up-error-verification-when-the-user-is-already-registered-(username/email);;3"
    },
    {
      "cells": [
        "admin",
        "as.tester@wearewaes.com"
      ],
      "line": 19,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---successful-and-unsuccessful-signup;verify-sign-up-error-verification-when-the-user-is-already-registered-(username/email);;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Verify Sign Up error verification when the user is already registered (username/email)",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---successful-and-unsuccessful-signup;verify-sign-up-error-verification-when-the-user-is-already-registered-(username/email);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user perform SignUp using: username \"admin\", password \"test\", name \"New User\", email \"new@wearewaes.com\", day \"25\", month \"April\", year \"1984\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "unsuccessful SignUp error is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 755997890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 41
    },
    {
      "val": "test",
      "offset": 59
    },
    {
      "val": "New User",
      "offset": 72
    },
    {
      "val": "new@wearewaes.com",
      "offset": 90
    },
    {
      "val": "25",
      "offset": 115
    },
    {
      "val": "April",
      "offset": 127
    },
    {
      "val": "1984",
      "offset": 141
    }
  ],
  "location": "WAESSignUpSteps.signUpNewUser(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 9460338651,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.unsuccessfulSignUp()"
});
formatter.result({
  "duration": 220810427,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify Sign Up error verification when the user is already registered (username/email)",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---successful-and-unsuccessful-signup;verify-sign-up-error-verification-when-the-user-is-already-registered-(username/email);;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user perform SignUp using: username \"new\", password \"test\", name \"New User\", email \"as.tester@wearewaes.com\", day \"25\", month \"April\", year \"1984\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "unsuccessful SignUp error is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 693490257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new",
      "offset": 41
    },
    {
      "val": "test",
      "offset": 57
    },
    {
      "val": "New User",
      "offset": 70
    },
    {
      "val": "as.tester@wearewaes.com",
      "offset": 88
    },
    {
      "val": "25",
      "offset": 119
    },
    {
      "val": "April",
      "offset": 131
    },
    {
      "val": "1984",
      "offset": 145
    }
  ],
  "location": "WAESSignUpSteps.signUpNewUser(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 9055986516,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.unsuccessfulSignUp()"
});
formatter.result({
  "duration": 210325366,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify Sign Up error verification when the user is already registered (username/email)",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---successful-and-unsuccessful-signup;verify-sign-up-error-verification-when-the-user-is-already-registered-(username/email);;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user perform SignUp using: username \"admin\", password \"test\", name \"New User\", email \"as.tester@wearewaes.com\", day \"25\", month \"April\", year \"1984\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "unsuccessful SignUp error is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 675776498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 41
    },
    {
      "val": "test",
      "offset": 59
    },
    {
      "val": "New User",
      "offset": 72
    },
    {
      "val": "as.tester@wearewaes.com",
      "offset": 90
    },
    {
      "val": "25",
      "offset": 121
    },
    {
      "val": "April",
      "offset": 133
    },
    {
      "val": "1984",
      "offset": 147
    }
  ],
  "location": "WAESSignUpSteps.signUpNewUser(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 9009539755,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.unsuccessfulSignUp()"
});
formatter.result({
  "duration": 190969442,
  "status": "passed"
});
formatter.uri("src/test/resources/features/signup_functionality_features/SignUpFunctionalityErrorsVerifications.feature");
formatter.feature({
  "line": 1,
  "name": "New WAES\u0027s portal, and the initial functionality: SignUp - Errors Verifications",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify validation when the username field is empty during SignUp process",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-username-field-is-empty-during-signup-process",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user click on SignUp button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "on SignUp page, the user click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "on SignUp page, \"username\" field is validated with the text \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 7921742868,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.goSignUpPage()"
});
formatter.result({
  "duration": 834018695,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.onSignUpPageTheUserClickOnSubmitButton()"
});
formatter.result({
  "duration": 1887092383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 17
    },
    {
      "val": "Please fill out this field.",
      "offset": 61
    }
  ],
  "location": "WAESSignUpSteps.verifyField(String,String)"
});
formatter.result({
  "duration": 79797216,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify validation when the password field is empty during SignUp process",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-password-field-is-empty-during-signup-process",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user click on SignUp button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "SignUp Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "on SignUp page, the user input into username box the value \"test\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "on SignUp page, the user click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "on SignUp page, \"password\" field is validated with the text \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 1143503728,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.goSignUpPage()"
});
formatter.result({
  "duration": 904075255,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.signupPageIsDisplayed()"
});
formatter.result({
  "duration": 45294495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 60
    }
  ],
  "location": "WAESSignUpSteps.inputUsername(String)"
});
formatter.result({
  "duration": 1250969777,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.onSignUpPageTheUserClickOnSubmitButton()"
});
formatter.result({
  "duration": 1352267102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 17
    },
    {
      "val": "Please fill out this field.",
      "offset": 61
    }
  ],
  "location": "WAESSignUpSteps.verifyField(String,String)"
});
formatter.result({
  "duration": 64783731,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify validation when the name field is empty during SignUp process",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-name-field-is-empty-during-signup-process",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user click on SignUp button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "SignUp Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "on SignUp page, the user input into username box the value \"test\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "on SignUp page, the user input into password box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "on SignUp page, the user click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "on SignUp page, \"name\" field is validated with the text \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 823425026,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.goSignUpPage()"
});
formatter.result({
  "duration": 796752307,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.signupPageIsDisplayed()"
});
formatter.result({
  "duration": 37406693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 60
    }
  ],
  "location": "WAESSignUpSteps.inputUsername(String)"
});
formatter.result({
  "duration": 1184734993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 60
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoPasswordBoxTheValue(String)"
});
formatter.result({
  "duration": 1246165406,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.onSignUpPageTheUserClickOnSubmitButton()"
});
formatter.result({
  "duration": 1371952112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 17
    },
    {
      "val": "Please fill out this field.",
      "offset": 57
    }
  ],
  "location": "WAESSignUpSteps.verifyField(String,String)"
});
formatter.result({
  "duration": 60969880,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Verify validation when the email field doesn\u0027t have the correct format during SignUp process",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-email-field-doesn\u0027t-have-the-correct-format-during-signup-process",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the user click on SignUp button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "SignUp Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "on SignUp page, the user input into username box the value \"test\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "on SignUp page, the user input into password box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "on SignUp page, the user input into name box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "on SignUp page, the user input into email box the value \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "on SignUp page, \"email\" field is validated with the text \"\u003cmessage_error\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-email-field-doesn\u0027t-have-the-correct-format-during-signup-process;",
  "rows": [
    {
      "cells": [
        "email",
        "message_error"
      ],
      "line": 36,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-email-field-doesn\u0027t-have-the-correct-format-during-signup-process;;1"
    },
    {
      "cells": [
        "",
        "Please fill out this field."
      ],
      "line": 37,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-email-field-doesn\u0027t-have-the-correct-format-during-signup-process;;2"
    },
    {
      "cells": [
        "new",
        "Please include an \u0027@\u0027 in the email address. \u0027new\u0027 is missing an \u0027@\u0027."
      ],
      "line": 38,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-email-field-doesn\u0027t-have-the-correct-format-during-signup-process;;3"
    },
    {
      "cells": [
        "new@",
        "Please enter a part following \u0027@\u0027. \u0027new@\u0027 is incomplete."
      ],
      "line": 39,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-email-field-doesn\u0027t-have-the-correct-format-during-signup-process;;4"
    },
    {
      "cells": [
        "new@.com",
        "\u0027.\u0027 is used at a wrong position in \u0027.com\u0027."
      ],
      "line": 40,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-email-field-doesn\u0027t-have-the-correct-format-during-signup-process;;5"
    },
    {
      "cells": [
        "new@new.",
        "\u0027.\u0027 is used at a wrong position in \u0027new.\u0027."
      ],
      "line": 41,
      "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-email-field-doesn\u0027t-have-the-correct-format-during-signup-process;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Verify validation when the email field doesn\u0027t have the correct format during SignUp process",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-email-field-doesn\u0027t-have-the-correct-format-during-signup-process;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the user click on SignUp button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "SignUp Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "on SignUp page, the user input into username box the value \"test\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "on SignUp page, the user input into password box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "on SignUp page, the user input into name box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "on SignUp page, the user input into email box the value \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "on SignUp page, \"email\" field is validated with the text \"Please fill out this field.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 682789379,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.goSignUpPage()"
});
formatter.result({
  "duration": 772981228,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.signupPageIsDisplayed()"
});
formatter.result({
  "duration": 34997283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 60
    }
  ],
  "location": "WAESSignUpSteps.inputUsername(String)"
});
formatter.result({
  "duration": 1206334386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 60
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoPasswordBoxTheValue(String)"
});
formatter.result({
  "duration": 1254677818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 56
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoNameBoxTheValue(String)"
});
formatter.result({
  "duration": 1156415912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 57
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoEmailBoxTheValue(String)"
});
formatter.result({
  "duration": 1135049116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 17
    },
    {
      "val": "Please fill out this field.",
      "offset": 58
    }
  ],
  "location": "WAESSignUpSteps.verifyField(String,String)"
});
formatter.result({
  "duration": 24254920,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify validation when the email field doesn\u0027t have the correct format during SignUp process",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-email-field-doesn\u0027t-have-the-correct-format-during-signup-process;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the user click on SignUp button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "SignUp Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "on SignUp page, the user input into username box the value \"test\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "on SignUp page, the user input into password box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "on SignUp page, the user input into name box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "on SignUp page, the user input into email box the value \"new\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "on SignUp page, \"email\" field is validated with the text \"Please include an \u0027@\u0027 in the email address. \u0027new\u0027 is missing an \u0027@\u0027.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 649168569,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.goSignUpPage()"
});
formatter.result({
  "duration": 781989597,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.signupPageIsDisplayed()"
});
formatter.result({
  "duration": 33305242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 60
    }
  ],
  "location": "WAESSignUpSteps.inputUsername(String)"
});
formatter.result({
  "duration": 1229720912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 60
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoPasswordBoxTheValue(String)"
});
formatter.result({
  "duration": 1211079094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 56
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoNameBoxTheValue(String)"
});
formatter.result({
  "duration": 1191035166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new",
      "offset": 57
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoEmailBoxTheValue(String)"
});
formatter.result({
  "duration": 1377190447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 17
    },
    {
      "val": "Please include an \u0027@\u0027 in the email address. \u0027new\u0027 is missing an \u0027@\u0027.",
      "offset": 58
    }
  ],
  "location": "WAESSignUpSteps.verifyField(String,String)"
});
formatter.result({
  "duration": 22888235,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify validation when the email field doesn\u0027t have the correct format during SignUp process",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-email-field-doesn\u0027t-have-the-correct-format-during-signup-process;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the user click on SignUp button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "SignUp Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "on SignUp page, the user input into username box the value \"test\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "on SignUp page, the user input into password box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "on SignUp page, the user input into name box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "on SignUp page, the user input into email box the value \"new@\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "on SignUp page, \"email\" field is validated with the text \"Please enter a part following \u0027@\u0027. \u0027new@\u0027 is incomplete.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 670465912,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.goSignUpPage()"
});
formatter.result({
  "duration": 779205422,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.signupPageIsDisplayed()"
});
formatter.result({
  "duration": 37878880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 60
    }
  ],
  "location": "WAESSignUpSteps.inputUsername(String)"
});
formatter.result({
  "duration": 1325061598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 60
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoPasswordBoxTheValue(String)"
});
formatter.result({
  "duration": 1222608279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 56
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoNameBoxTheValue(String)"
});
formatter.result({
  "duration": 1191089236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new@",
      "offset": 57
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoEmailBoxTheValue(String)"
});
formatter.result({
  "duration": 1542652486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 17
    },
    {
      "val": "Please enter a part following \u0027@\u0027. \u0027new@\u0027 is incomplete.",
      "offset": 58
    }
  ],
  "location": "WAESSignUpSteps.verifyField(String,String)"
});
formatter.result({
  "duration": 23920240,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Verify validation when the email field doesn\u0027t have the correct format during SignUp process",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-email-field-doesn\u0027t-have-the-correct-format-during-signup-process;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the user click on SignUp button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "SignUp Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "on SignUp page, the user input into username box the value \"test\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "on SignUp page, the user input into password box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "on SignUp page, the user input into name box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "on SignUp page, the user input into email box the value \"new@.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "on SignUp page, \"email\" field is validated with the text \"\u0027.\u0027 is used at a wrong position in \u0027.com\u0027.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 701128214,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.goSignUpPage()"
});
formatter.result({
  "duration": 789500302,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.signupPageIsDisplayed()"
});
formatter.result({
  "duration": 34773076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 60
    }
  ],
  "location": "WAESSignUpSteps.inputUsername(String)"
});
formatter.result({
  "duration": 1174579017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 60
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoPasswordBoxTheValue(String)"
});
formatter.result({
  "duration": 1219694519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 56
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoNameBoxTheValue(String)"
});
formatter.result({
  "duration": 1256803356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new@.com",
      "offset": 57
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoEmailBoxTheValue(String)"
});
formatter.result({
  "duration": 1485977967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 17
    },
    {
      "val": "\u0027.\u0027 is used at a wrong position in \u0027.com\u0027.",
      "offset": 58
    }
  ],
  "location": "WAESSignUpSteps.verifyField(String,String)"
});
formatter.result({
  "duration": 21181744,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify validation when the email field doesn\u0027t have the correct format during SignUp process",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-when-the-email-field-doesn\u0027t-have-the-correct-format-during-signup-process;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the user click on SignUp button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "SignUp Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "on SignUp page, the user input into username box the value \"test\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "on SignUp page, the user input into password box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "on SignUp page, the user input into name box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "on SignUp page, the user input into email box the value \"new@new.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "on SignUp page, \"email\" field is validated with the text \"\u0027.\u0027 is used at a wrong position in \u0027new.\u0027.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 660735977,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.goSignUpPage()"
});
formatter.result({
  "duration": 785829553,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.signupPageIsDisplayed()"
});
formatter.result({
  "duration": 31292039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 60
    }
  ],
  "location": "WAESSignUpSteps.inputUsername(String)"
});
formatter.result({
  "duration": 1200982782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 60
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoPasswordBoxTheValue(String)"
});
formatter.result({
  "duration": 1265797744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 56
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoNameBoxTheValue(String)"
});
formatter.result({
  "duration": 1391358844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new@new.",
      "offset": 57
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoEmailBoxTheValue(String)"
});
formatter.result({
  "duration": 1298586051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 17
    },
    {
      "val": "\u0027.\u0027 is used at a wrong position in \u0027new.\u0027.",
      "offset": 58
    }
  ],
  "location": "WAESSignUpSteps.verifyField(String,String)"
});
formatter.result({
  "duration": 23959861,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify validation in the date fields during SignUp process",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---errors-verifications;verify-validation-in-the-date-fields-during-signup-process",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "the user click on SignUp button",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "SignUp Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "on SignUp page, the user input into username box the value \"test\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "on SignUp page, the user input into password box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "on SignUp page, the user input into name box the value \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "on SignUp page, the user input into email box the value \"test@test.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "on SignUp page, the user click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "on SignUp page, \"day\" field is validated with the text \"Please select an item in the list.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "on SignUp page, the user select as day the value \"25\"",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "on SignUp page, the user click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "on SignUp page, \"month\" field is validated with the text \"Please select an item in the list.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "on SignUp page, the user select as month the value \"April\"",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "on SignUp page, the user click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "on SignUp page, \"year\" field is validated with the text \"Please select an item in the list.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 768810323,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.goSignUpPage()"
});
formatter.result({
  "duration": 768013712,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.signupPageIsDisplayed()"
});
formatter.result({
  "duration": 38882917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 60
    }
  ],
  "location": "WAESSignUpSteps.inputUsername(String)"
});
formatter.result({
  "duration": 1316925352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 60
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoPasswordBoxTheValue(String)"
});
formatter.result({
  "duration": 1201207456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 56
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoNameBoxTheValue(String)"
});
formatter.result({
  "duration": 1201635360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test.com",
      "offset": 57
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserInputIntoEmailBoxTheValue(String)"
});
formatter.result({
  "duration": 1328786886,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.onSignUpPageTheUserClickOnSubmitButton()"
});
formatter.result({
  "duration": 1390844240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "day",
      "offset": 17
    },
    {
      "val": "Please select an item in the list.",
      "offset": 56
    }
  ],
  "location": "WAESSignUpSteps.verifyField(String,String)"
});
formatter.result({
  "duration": 47891754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 50
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserSelectAsDayTheValue(String)"
});
formatter.result({
  "duration": 743501957,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.onSignUpPageTheUserClickOnSubmitButton()"
});
formatter.result({
  "duration": 761166772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "month",
      "offset": 17
    },
    {
      "val": "Please select an item in the list.",
      "offset": 58
    }
  ],
  "location": "WAESSignUpSteps.verifyField(String,String)"
});
formatter.result({
  "duration": 40757680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 52
    }
  ],
  "location": "WAESSignUpSteps.onSignUpPageTheUserSelectAsMonthTheValue(String)"
});
formatter.result({
  "duration": 688805214,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.onSignUpPageTheUserClickOnSubmitButton()"
});
formatter.result({
  "duration": 633694085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "year",
      "offset": 17
    },
    {
      "val": "Please select an item in the list.",
      "offset": 57
    }
  ],
  "location": "WAESSignUpSteps.verifyField(String,String)"
});
formatter.result({
  "duration": 44797136,
  "status": "passed"
});
formatter.uri("src/test/resources/features/signup_functionality_features/SignUpFunctionalityVerifyDetails.feature");
formatter.feature({
  "line": 1,
  "name": "New WAES\u0027s portal, and the initial functionality: SignUp - Verify Details",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---verify-details",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Details Information Page after successful SignUp",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---verify-details;verify-details-information-page-after-successful-signup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user perform SignUp using: username \"test\", password \"test\", name \"test\", email \"test@test.com\", day \"25\", month \"April\", year \"1984\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "after signUp, page \u0027Your Profile\u0027 is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user click on Details button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Details page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the Name \"test\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the Email address \"test@test.com\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "after logout, Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 7615891762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 41
    },
    {
      "val": "test",
      "offset": 58
    },
    {
      "val": "test",
      "offset": 71
    },
    {
      "val": "test@test.com",
      "offset": 85
    },
    {
      "val": "25",
      "offset": 106
    },
    {
      "val": "April",
      "offset": 118
    },
    {
      "val": "1984",
      "offset": 132
    }
  ],
  "location": "WAESSignUpSteps.signUpNewUser(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 9799253545,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.pageProfileShouldBeOpen()"
});
formatter.result({
  "duration": 56626508,
  "status": "passed"
});
formatter.match({
  "location": "WAESDetailsSteps.theUserClickOnDetailsButton()"
});
formatter.result({
  "duration": 730490020,
  "status": "passed"
});
formatter.match({
  "location": "WAESDetailsSteps.detailsPageIsDisplayed()"
});
formatter.result({
  "duration": 37926891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 10
    }
  ],
  "location": "WAESDetailsSteps.theNameIsDisplayed(String)"
});
formatter.result({
  "duration": 46739022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test.com",
      "offset": 19
    }
  ],
  "location": "WAESDetailsSteps.theEmailIsDisplayed(String)"
});
formatter.result({
  "duration": 46244927,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.logoutSession()"
});
formatter.result({
  "duration": 899770106,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.isLoginPageDisplayed()"
});
formatter.result({
  "duration": 53456844,
  "status": "passed"
});
formatter.uri("src/test/resources/features/signup_functionality_features/SignUpFunctionalityVerifyProfile.feature");
formatter.feature({
  "line": 1,
  "name": "New WAES\u0027s portal, and the initial functionality: SignUp - Verify Profile",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---verify-profile",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Profile Information Page after successful SignUp",
  "description": "",
  "id": "new-waes\u0027s-portal,-and-the-initial-functionality:-signup---verify-profile;verify-profile-information-page-after-successful-signup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the user is on the WAES\u0027s portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user perform SignUp using: username \"test\", password \"test\", name \"test\", email \"test@test.com\", day \"25\", month \"April\", year \"1984\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "after signUp, page \u0027Your Profile\u0027 is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user click on Profile button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Profile page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the question information \"How are you doing, test?\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the power information \"Your super power: You have no super powers yet. \u003d[.\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the extended information \"is not\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "after logout, Login Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "WAESHomeSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 8200801459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 41
    },
    {
      "val": "test",
      "offset": 58
    },
    {
      "val": "test",
      "offset": 71
    },
    {
      "val": "test@test.com",
      "offset": 85
    },
    {
      "val": "25",
      "offset": 106
    },
    {
      "val": "April",
      "offset": 118
    },
    {
      "val": "1984",
      "offset": 132
    }
  ],
  "location": "WAESSignUpSteps.signUpNewUser(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 10359713014,
  "status": "passed"
});
formatter.match({
  "location": "WAESSignUpSteps.pageProfileShouldBeOpen()"
});
formatter.result({
  "duration": 49634137,
  "status": "passed"
});
formatter.match({
  "location": "WAESProfileSteps.theUserClickOnProfileButton()"
});
formatter.result({
  "duration": 698819020,
  "status": "passed"
});
formatter.match({
  "location": "WAESProfileSteps.profilePageIsDisplayed()"
});
formatter.result({
  "duration": 35215896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "How are you doing, test?",
      "offset": 26
    }
  ],
  "location": "WAESProfileSteps.theQuestionInformationIsDisplayed(String)"
});
formatter.result({
  "duration": 55227194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your super power: You have no super powers yet. \u003d[.",
      "offset": 23
    }
  ],
  "location": "WAESProfileSteps.thePowerInformationIsDisplayed(String)"
});
formatter.result({
  "duration": 46223019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "is not",
      "offset": 26
    }
  ],
  "location": "WAESProfileSteps.theExtendedInformationIsDisplayed(String)"
});
formatter.result({
  "duration": 20059296484,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.logoutSession()"
});
formatter.result({
  "duration": 755996491,
  "status": "passed"
});
formatter.match({
  "location": "WAESHomeSteps.isLoginPageDisplayed()"
});
formatter.result({
  "duration": 37983758,
  "status": "passed"
});
});