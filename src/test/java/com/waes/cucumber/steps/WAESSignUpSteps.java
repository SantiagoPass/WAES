package com.waes.cucumber.steps;

import com.qaprosoft.carina.core.foundation.cucumber.CucumberRunner;
import com.waes.gui.pages.HomePage;
import com.waes.gui.pages.ProfilePage;
import com.waes.gui.pages.SignUpPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

/**
 * In this class are created all steps to perform on the SignUp page.
 *
 * @author Santiago Passalacqua
 * @version 1.0
 * @since 10/14/2019
 */
public class WAESSignUpSteps extends CucumberRunner {

    HomePage homePage = null;
    SignUpPage signUpPage = null;
    ProfilePage profilePage = null;

    @When("^the user click on SignUp button$")
    public void goSignUpPage() {
        homePage = new HomePage(getDriver());
        signUpPage = homePage.getHeaderMenu().clickOnSignUpBtn();
    }

    @When("^on SignUp page, the user input into username box the value \"(.*)\"$")
    public void inputUsername(String username) {
        signUpPage.inputUsername(username);
    }

    @When("^on SignUp page, the user input into password box the value \"([^\"]*)\"$")
    public void onSignUpPageTheUserInputIntoPasswordBoxTheValue(String password) throws Throwable {
        signUpPage.inputPassword(password);
    }

    @When("^on SignUp page, the user input into name box the value \"([^\"]*)\"$")
    public void onSignUpPageTheUserInputIntoNameBoxTheValue(String name) throws Throwable {
        signUpPage.inputName(name);
    }

    @When("^on SignUp page, the user input into email box the value \"([^\"]*)\"$")
    public void onSignUpPageTheUserInputIntoEmailBoxTheValue(String email) throws Throwable {
        signUpPage.inputEmail(email);
    }

    @When("^on SignUp page, the user select as day the value \"([^\"]*)\"$")
    public void onSignUpPageTheUserSelectAsDayTheValue(String day) throws Throwable {
        signUpPage.selectDay(day);
    }

    @When("^on SignUp page, the user select as month the value \"([^\"]*)\"$")
    public void onSignUpPageTheUserSelectAsMonthTheValue(String month) throws Throwable {
        signUpPage.selectMonth(month);
    }

    @When("^on SignUp page, the user select as year the value \"([^\"]*)\"$")
    public void onSignUpPageTheUserSelectAsYearTheValue(String year) throws Throwable {
        signUpPage.selectYear(year);
    }

    @When("^on SignUp page, the user click on Submit button$")
    public void onSignUpPageTheUserClickOnSubmitButton() throws Throwable {
        profilePage = signUpPage.clickOnSubmitBtn();
    }

    @When("^the user perform SignUp using: username \"(.*)\", password \"(.*)\", name \"(.*)\", " +
            "email \"(.*)\", day \"(.*)\", month \"(.*)\", year \"(.*)\"$")
    public void signUpNewUser(String username, String password, String name, String email, String day, String month, String year) throws Throwable {
        homePage = new HomePage(getDriver());
        signUpPage = homePage.getHeaderMenu().clickOnSignUpBtn();
        signUpPage.inputUsername(username);
        signUpPage.inputPassword(password);
        signUpPage.inputName(name);
        signUpPage.inputEmail(email);
        signUpPage.selectDay(day);
        signUpPage.selectMonth(month);
        signUpPage.selectYear(year);
        profilePage = signUpPage.clickOnSubmitBtn();
    }

    @Then("^SignUp Page is displayed$")
    public void signupPageIsDisplayed() {
        signUpPage.isSignUpPageOpened();
    }

    @Then("^after signUp, page 'Your Profile' is opened$")
    public void pageProfileShouldBeOpen() {
        Assert.assertTrue(profilePage.isProfilePageOpened(), "Profile page is not opened!");
    }

    @Then("^after signUp, the Welcome message \"(.*)\" is displayed$")
    public void theWelcomeMessageIsDisplayed(String info) {
        Assert.assertEquals(profilePage.getQuestionInfoOrWelcomeMessage(), info, "Welcome Message doesn't mach!");
    }

    @Then("^unsuccessful SignUp error is displayed$")
    public void unsuccessfulSignUp() {
        Assert.assertEquals(homePage.getHeaderMenu().getStatusText(),
                "This hero is already registered. Try another one!",
                "Already user registered is created!");
    }

    @Then("^on SignUp page, \"(.*)\" field is validated with the text \"(.*)\"$")
    public void verifyField(String field, String message) {
        String currentMessage = "";
        switch (field.toLowerCase()) {
            case "username":
                currentMessage = signUpPage.getUsernameValidationMessage();
                break;
            case "password":
                currentMessage = signUpPage.getPasswordValidationMessage();
                break;
            case "name":
                currentMessage = signUpPage.getNameValidationMessage();
                break;
            case "email":
                currentMessage = signUpPage.getEmailValidationMessage();
                break;
            case "day":
                currentMessage = signUpPage.getDayValidationMessage();
                break;
            case "month":
                currentMessage = signUpPage.getMonthValidationMessage();
                break;
            case "year":
                currentMessage = signUpPage.getYearValidationMessage();
                break;
            default:
                throw new IllegalArgumentException("The field " + field + "is not a valid option.\n" +
                        "Available options are: Username, Password, Name, Email, Day, Month, Year");
        }
        Assert.assertEquals(currentMessage, message, "Expected validation for the field "
                + field + " doesn't match with the current validation");
    }

}
