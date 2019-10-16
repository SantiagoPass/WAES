package com.waes.gui.pages;

import com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement;
import com.qaprosoft.carina.core.gui.AbstractPage;
import com.waes.gui.components.HeaderMenu;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.FindBy;

/**
 * In this class are mapped all elements into Profile page.
 * All methods to interact with each element were created here
 *
 * @author Santiago Passalacqua
 * @version 1.0
 * @since 10/14/2019
 */
public class ProfilePage extends AbstractPage {

    @FindBy(tagName = "header")
    private HeaderMenu headerMenu;
    @FindBy(xpath = "//h1[text()='Your Profile']")
    private ExtendedWebElement profileTitle;
    @FindBy(xpath = "//section//p[1]")
    private ExtendedWebElement questionInfo;
    @FindBy(xpath = "//section//p[2]")
    private ExtendedWebElement powerInfo;
    @FindBy(xpath = "//section//div/p[1]")
    private ExtendedWebElement extendedInfo;

    /**
     * The constructor create a ProfilePage object
     *
     * @param driver
     */
    public ProfilePage(WebDriver driver) {
        super(driver);
    }

    /**
     * This method return an header Menu object to interact with the elements into the header in the Profile page
     *
     * @return headerMenu Object
     */
    public HeaderMenu getHeaderMenu() {
        return headerMenu;
    }

    /**
     * This method return a boolean to indicate if the Profile Page is opened
     *
     * @return true or false
     */
    public boolean isProfilePageOpened() {
        return profileTitle.isElementPresent();
    }

    /**
     * This method return the first paragraph text displayed below of the Title Page Label
     *
     * @return first paragraph in the page: "How are you doing, <Name of the logged user>?" or
     *         "Welcome to your new profile page, <name new user>!" according to the scenario.
     */
    public String getQuestionInfoOrWelcomeMessage() {
        return questionInfo.getText();
    }

    /**
     * This method return the second paragraph text displayed in the page
     *
     * @return second paragraph in the page: "Your super power: <Power of the current logged user>."
     */
    public String getPowerInfo() {
        return powerInfo.getText();
    }

    /**
     * This method indicate if there are information below of the second paragraph
     *
     * @return true or false
     */
    public boolean isExtendedInfoDisplayed() {
        return extendedInfo.isElementPresent();
    }
}
