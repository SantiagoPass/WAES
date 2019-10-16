package com.waes.gui.components;

import com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement;
import com.qaprosoft.carina.core.gui.AbstractUIObject;
import com.waes.gui.pages.*;
import org.openqa.selenium.SearchContext;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.FindBy;

/**
 * In this class are mapped all elements into Header object.
 * All methods to interact with each element were created here.
 *
 * @author Santiago Passalacqua
 * @version 1.0
 * @since 10/14/2019
 */
public class HeaderMenu extends AbstractUIObject {

    @FindBy(id = "home_link")
    private ExtendedWebElement homeLink;
    @FindBy(id = "login_link")
    private ExtendedWebElement loginBtn;
    @FindBy(id = "signup_link")
    private ExtendedWebElement signupBtn;
    @FindBy(id = "status")
    private ExtendedWebElement statusBar;
    @FindBy(id = "profile_link")
    private ExtendedWebElement profileBtn;
    @FindBy(id = "details_link")
    private ExtendedWebElement detailsBtn;
    @FindBy(xpath = "//a[text()='log out']")
    private ExtendedWebElement logOutLnk;

    /**
     * The constructor create a HeaderMenu object
     *
     * @param driver
     * @param searchContext
     */
    public HeaderMenu(WebDriver driver, SearchContext searchContext) {
        super(driver, searchContext);
    }

    /**
     * Click on Home button in the header of the page and return an object that allows interactions with
     * elements on the Home page.
     *
     * @return HomePage object
     */
    public HomePage openHomePage() {
        homeLink.click();
        return new HomePage(driver);
    }

    /**
     * Click on Login button in the header of the page and return an object that allows interactions with
     * elements on the login page.
     *
     * @return LoginPage object
     */
    public LoginPage clickOnLoginBtn() {
        loginBtn.click();
        LoginPage loginPage = new LoginPage(driver);
        return loginPage;
    }

    /**
     * Click on SignUp button in the header of the page and return an object that allows interactions with
     * elements on the SignUp page.
     *
     * @return SignUpPage object
     */
    public SignUpPage clickOnSignUpBtn() {
        signupBtn.click();
        SignUpPage signUpPage = new SignUpPage(driver);
        return signUpPage;
    }

    /**
     * Click on Profile button in the header of the page and return an object that allows interactions with
     * elements on the Profile page.
     *
     * @return ProfilePage object
     */
    public ProfilePage clickOnProfileBtn() {
        profileBtn.click();
        ProfilePage profilePage = new ProfilePage(driver);
        return profilePage;
    }

    /**
     * Click on Details button in the header of the page and return an object that allows interactions with
     * elements on the Details page.
     *
     * @return DetailsPage object
     */
    public DetailsPage clickOnDetailsBtn() {
        detailsBtn.click();
        DetailsPage detailsPage = new DetailsPage(driver);
        return detailsPage;
    }

    /**
     * This method return the text displayed on the status bar below the header page
     *
     * @return text displayed on status bar
     */
    public String getStatusText() {
        return statusBar.getText();
    }

    /**
     * Click on Logout link in the header of the page and return an object that allows interactions with
     * elements on the Login page.
     *
     * @return LoginPage object
     */
    public LoginPage clickOnLogoutLnk() {
        logOutLnk.click();
        LoginPage loginPage = new LoginPage(driver);
        return loginPage;
    }
}
