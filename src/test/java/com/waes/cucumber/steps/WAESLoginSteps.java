package com.waes.cucumber.steps;

import com.waes.gui.pages.HomePage;
import com.waes.gui.pages.LoginPage;
import com.waes.gui.pages.ProfilePage;
import org.testng.Assert;

import com.qaprosoft.carina.core.foundation.cucumber.CucumberRunner;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * In this class are created all steps to perform into the LoginPage.
 *
 * @author Santiago Passalacqua
 * @version 1.0
 * @since 10/14/2019
 */
public class WAESLoginSteps extends CucumberRunner {

    HomePage homePage = null;
    LoginPage loginPage = null;
    ProfilePage profilePage = null;

    @When("^the user perform login with username \"(.*)\" and password \"(.*)\"$")
    public void performLogin(String username, String password) throws Throwable {
        homePage = new HomePage(getDriver());
        loginPage = homePage.getHeaderMenu().clickOnLoginBtn();
        loginPage.inputUsername(username);
        loginPage.inputPassword(password);
        profilePage = loginPage.clickOnLoginBtn();
    }

    @When("^the user click on login button$")
    public void goToLoginPage() {
        homePage = new HomePage(getDriver());
        loginPage = homePage.getHeaderMenu().clickOnLoginBtn();
    }

    @When("^on login page, the user click on Log In button$")
    public void performLogin() throws Throwable {
        profilePage = loginPage.clickOnLoginBtn();
    }

    @When("^on Login page, the user input into username box the value \"(.*)\"$")
    public void inputUsername(String username) {
        loginPage.inputUsername(username);
    }

    @Then("^after login, page 'Your Profile' is opened$")
    public void pageProfileShouldBeOpen() {
        Assert.assertTrue(profilePage.isProfilePageOpened(), "Profile page is not opened!");
    }

    @Then("^after login, the message \"(.*)\" is displayed on header status bar$")
    public void verifyLoginstatus(String message) {
        Assert.assertEquals(homePage.getHeaderMenu().getStatusText(), message, "Text in status bar is not the expected!");
    }

    @Then("^on login page, \"(.*)\" field is validated with the text \"(.*)\"$")
    public void verifyField(String field, String message) {
        String currentMessage = "";
        switch (field.toLowerCase()) {
            case "username":
                currentMessage = loginPage.getUsernameValidationMessage();
                break;
            case "password":
                currentMessage = loginPage.getPasswordValidationMessage();
                break;
            default:
                throw new IllegalArgumentException("The field " + field + "is not a valid option.\n" +
                        "Available options are: Username, Password");
        }
        Assert.assertEquals(currentMessage, message, "Expected validation for the field "
                + field + " doesn't match with the current validation");
    }

}
