package com.waes.cucumber.steps;

import com.qaprosoft.carina.core.foundation.cucumber.CucumberRunner;
import com.waes.gui.pages.DetailsPage;
import com.waes.gui.pages.HomePage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

/**
 * In this class are created all steps to perform into the Details page.
 *
 * @author Santiago Passalacqua
 * @version 1.0
 * @since 10/14/2019
 */
public class WAESDetailsSteps extends CucumberRunner {
    HomePage homePage = null;
    DetailsPage detailsPage = null;

    @When("^the user click on Details button$")
    public void theUserClickOnDetailsButton() {
        homePage = new HomePage(getDriver());
        detailsPage = homePage.getHeaderMenu().clickOnDetailsBtn();
    }

    @Then("^Details page is displayed$")
    public void detailsPageIsDisplayed() {
        Assert.assertTrue(detailsPage.isDetailsPageOpened());
    }

    @Then("^the Name \"([^\"]*)\" is displayed$")
    public void theNameIsDisplayed(String name) {
        Assert.assertEquals(detailsPage.getNameText(), name, "Name expected doesn't match!");
    }

    @Then("^the Email address \"([^\"]*)\" is displayed$")
    public void theEmailIsDisplayed(String name) {
        Assert.assertEquals(detailsPage.getEmailText(), name, "Email expected doesn't match!");
    }

}



