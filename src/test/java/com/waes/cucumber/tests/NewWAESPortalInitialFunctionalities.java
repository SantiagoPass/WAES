package com.waes.cucumber.tests;

import com.qaprosoft.carina.core.foundation.cucumber.CucumberBaseTest;

import cucumber.api.CucumberOptions;

/**
 * This class is created to allow the New WAES's Portal Initial Functionalities feature execution.
 *
 * @author Santiago Passalacqua
 * @version 1.0
 * @since 10/14/2019
 */

@CucumberOptions(features = {
        "src/test/resources/features/login_functionality_features/LoginFunctionality.feature",
        "src/test/resources/features/login_functionality_features/LoginFunctionalityErrorVerifications.feature",
        "src/test/resources/features/login_functionality_features/LoginFunctionalityVerifyDetails.feature",
        "src/test/resources/features/login_functionality_features/LoginFunctionalityVerifyProfile.feature",
        "src/test/resources/features/signup_functionality_features/SignUpFunctionality.feature",
        "src/test/resources/features/signup_functionality_features/SignUpFunctionalityErrorsVerifications.feature",
        "src/test/resources/features/signup_functionality_features/SignUpFunctionalityVerifyDetails.feature",
        "src/test/resources/features/signup_functionality_features/SignUpFunctionalityVerifyProfile.feature"
},
        glue = "com.waes.cucumber.steps",
        format = {"pretty",
                "html:target/cucumber-core-test-report",
                "pretty:target/cucumber-core-test-report.txt",
                "json:target/cucumber-core-test-report.json",
                "junit:target/cucumber-core-test-report.xml"}
)
public class NewWAESPortalInitialFunctionalities extends CucumberBaseTest { }


