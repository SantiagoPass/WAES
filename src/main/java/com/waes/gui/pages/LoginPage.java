package com.waes.gui.pages;

import com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement;
import com.qaprosoft.carina.core.gui.AbstractPage;
import com.waes.gui.components.HeaderMenu;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.FindBy;

/**
 * In this class are mapped all elements into Login page.
 * All methods to interact with each element were created here
 *
 * @author Santiago Passalacqua
 * @version 1.0
 * @since 10/14/2019
 */
public class LoginPage extends AbstractPage {

    @FindBy(tagName = "header")
    private HeaderMenu headerMenu;
    @FindBy(xpath = "//h1[text()='Log In']")
    private ExtendedWebElement loginPageTitle;
    @FindBy(id = "username_input")
    private ExtendedWebElement usernameTxt;
    @FindBy(id = "password_input")
    private ExtendedWebElement passwordTxt;
    @FindBy(id = "login_button")
    private ExtendedWebElement loginBtn;

    @FindBy(id = "1234")
    private ExtendedWebElement usernameError;
    @FindBy(id = "1234")
    private ExtendedWebElement passwordError;

    /**
     * The constructor create a LoginPage object
     *
     * @param driver
     */
    public LoginPage(WebDriver driver) {
        super(driver);
    }

    /**
     * This method return an header Menu object to interact with the elements into the header in the Login page
     *
     * @return headerMenu Object
     */
    public HeaderMenu getHeaderMenu() {
        return headerMenu;
    }

    /**
     * This method return a boolean to indicate if the Login Page is opened
     *
     * @return true or false
     */
    public boolean isLoginPageOpened() {
        return loginPageTitle.isElementPresent();
    }

    /**
     * This method enter in the username field the text provided by parameter
     *
     * @param username
     */
    public void inputUsername(String username) {
        assertElementPresent(usernameTxt);
        usernameTxt.type(username);
    }

    /**
     * This method enter in the password field the text provided by parameter
     *
     * @param password
     */
    public void inputPassword(String password) {
        assertElementPresent(passwordTxt);
        passwordTxt.type(password);
    }

    /**
     * This method perform click on Log In button and return a Profile Page object
     *
     * @return ProfilePage object
     */
    public ProfilePage clickOnLoginBtn() {
        loginBtn.click();
        return new ProfilePage(driver);
    }

    /**
     * This method return the message validation for the username field
     *
     * @return validation message
     */
    public String getUsernameValidationMessage() {
        return usernameTxt.getAttribute("validationMessage");
    }

    /**
     * This method return the message validation for the password field
     *
     * @return validation message
     */
    public String getPasswordValidationMessage() {
        return passwordTxt.getAttribute("validationMessage");
    }
}
