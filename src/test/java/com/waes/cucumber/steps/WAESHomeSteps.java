package com.waes.cucumber.steps;

import com.qaprosoft.carina.core.foundation.cucumber.CucumberRunner;
import com.waes.gui.pages.HomePage;
import com.waes.gui.pages.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * In this class are created all steps to perform into the HomePage.
 *
 * @author Santiago Passalacqua
 * @version 1.0
 * @since 10/14/2019
 */
public class WAESHomeSteps extends CucumberRunner {

    HomePage homePage = null;
    LoginPage loginPage = null;

    @Given("^the user is on the WAES's portal page")
    public void userIsOnHomePage() {
        homePage = new HomePage(getDriver());
        homePage.open();
        homePage.isPageOpened();
    }

    @When("^the user click on Logout link")
    public void logoutSession() {
        loginPage = homePage.getHeaderMenu().clickOnLogoutLnk();
    }

    @Then("^after logout, Login Page is displayed")
    public void isLoginPageDisplayed() {
        loginPage.isLoginPageOpened();
    }

}
