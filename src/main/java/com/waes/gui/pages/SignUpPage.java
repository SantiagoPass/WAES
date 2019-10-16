package com.waes.gui.pages;

import com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement;
import com.qaprosoft.carina.core.gui.AbstractPage;
import com.waes.gui.components.HeaderMenu;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.FindBy;

/**
 * In this class are mapped all elements into SignUp page.
 * All methods to interact with each element were created here
 *
 * @author Santiago Passalacqua
 * @version 1.0
 * @since 10/14/2019
 */
public class SignUpPage extends AbstractPage {

    @FindBy(tagName = "header")
    private HeaderMenu headerMenu;
    @FindBy(xpath = "//h1[text()='Sign Up']")
    private ExtendedWebElement signUpTitle;
    @FindBy(id = "username_input")
    private ExtendedWebElement usernameTxt;
    @FindBy(id = "password_input")
    private ExtendedWebElement passwordTxt;
    @FindBy(id = "name_input")
    private ExtendedWebElement nameTxt;
    @FindBy(id = "email_input")
    private ExtendedWebElement emailTxt;
    @FindBy(id = "day_select")
    private ExtendedWebElement dayCmb;
    @FindBy(id = "month_select")
    private ExtendedWebElement monthCmb;
    @FindBy(id = "year_select")
    private ExtendedWebElement yearCmb;
    @FindBy(id = "submit_button")
    private ExtendedWebElement submitBtn;

    /**
     * The constructor create a SignUpPage object
     *
     * @param driver
     */
    public SignUpPage(WebDriver driver) {
        super(driver);
    }

    /**
     * This method return an header Menu object to interact with the elements into the header in the SignUp page
     *
     * @return headerMenu Object
     */
    public HeaderMenu getHeaderMenu() {
        return headerMenu;
    }

    /**
     * This method return a boolean to indicate if the SignUp Page is opened
     *
     * @return true or false
     */
    public boolean isSignUpPageOpened() {
        return signUpTitle.isElementPresent();
    }

    /**
     * This method enter in the username field the text provided by parameter
     *
     * @param username
     */
    public void inputUsername(String username) {
        usernameTxt.type(username);
    }

    /**
     * This method enter in the password field the text provided by parameter
     *
     * @param password
     */
    public void inputPassword(String password) {
        passwordTxt.type(password);
    }

    /**
     * This method enter in the name field the text provided by parameter
     *
     * @param name
     */
    public void inputName(String name) {
        nameTxt.type(name);
    }

    /**
     * This method enter in the email field the text provided by parameter
     *
     * @param email
     */
    public void inputEmail(String email) {
        emailTxt.type(email);
    }

    /**
     * This method select from the day field the visible text provided by parameter
     *
     * @param day
     */
    public void selectDay(String day) {
        dayCmb.select(day);
    }

    /**
     * This method select from the month field the visible text provided by parameter
     *
     * @param month
     */
    public void selectMonth(String month) {
        monthCmb.select(month);
    }

    /**
     * This method select from the year field the visible text provided by parameter
     *
     * @param year
     */
    public void selectYear(String year) {
        yearCmb.select(year);
    }

    /**
     * This method perform click on Submit button and return a Profile Page object
     *
     * @return ProfilePage object
     */
    public ProfilePage clickOnSubmitBtn() {
        submitBtn.click();
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

    /**
     * This method return the message validation for the name field
     *
     * @return validation message
     */
    public String getNameValidationMessage() {
        return nameTxt.getAttribute("validationMessage");
    }

    /**
     * This method return the message validation for the email field
     *
     * @return validation message
     */
    public String getEmailValidationMessage() {
        return emailTxt.getAttribute("validationMessage");
    }

    /**
     * This method return the message validation for the day field
     *
     * @return validation message
     */
    public String getDayValidationMessage() {
        return dayCmb.getAttribute("validationMessage");
    }

    /**
     * This method return the message validation for the month field
     *
     * @return validation message
     */
    public String getMonthValidationMessage() {
        return monthCmb.getAttribute("validationMessage");
    }

    /**
     * This method return the message validation for the year field
     *
     * @return validation message
     */
    public String getYearValidationMessage() {
        return yearCmb.getAttribute("validationMessage");
    }

}
