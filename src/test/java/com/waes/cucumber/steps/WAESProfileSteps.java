package com.waes.cucumber.steps;

import com.qaprosoft.carina.core.foundation.cucumber.CucumberRunner;
import com.waes.gui.pages.HomePage;
import com.waes.gui.pages.ProfilePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

/**
 * In this class are created all steps to perform into the ProfilePage.
 *
 * @author Santiago Passalacqua
 * @version 1.0
 * @since 10/14/2019
 */
public class WAESProfileSteps extends CucumberRunner {

    ProfilePage profilePage = null;

    @When("^the user click on Profile button$")
    public void theUserClickOnProfileButton() {
        HomePage homePage = new HomePage(getDriver());
        profilePage = homePage.getHeaderMenu().clickOnProfileBtn();
    }

    @Then("^Profile page is displayed$")
    public void profilePageIsDisplayed() {
        profilePage.isProfilePageOpened();
    }

    @Then("^the question information \"(.*)\" is displayed$")
    public void theQuestionInformationIsDisplayed(String info) {
        Assert.assertEquals(profilePage.getQuestionInfoOrWelcomeMessage(), info, "Question Information doesn't mach!");
    }

    @And("^the power information \"(.*)\" is displayed$")
    public void thePowerInformationIsDisplayed(String info) {
        Assert.assertEquals(profilePage.getPowerInfo(), info, "Power Information doesn't mach!");
    }

    @And("^the extended information \"(.*)\" displayed$")
    public void theExtendedInformationIsDisplayed(String is_isNot) {
        if (is_isNot.equals("is")) {
            Assert.assertTrue(profilePage.isExtendedInfoDisplayed(), "Extended Information is not displayed!");
        } else {
            Assert.assertFalse(profilePage.isExtendedInfoDisplayed(), "Extended Information is displayed!");
        }
    }
}
