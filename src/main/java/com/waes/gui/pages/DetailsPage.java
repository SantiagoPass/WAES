package com.waes.gui.pages;

import com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement;
import com.qaprosoft.carina.core.gui.AbstractPage;
import com.waes.gui.components.HeaderMenu;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.FindBy;

/**
 * In this class are mapped all elements into Details page.
 * All methods to interact with each element were created here.
 *
 * @author Santiago Passalacqua
 * @version 1.0
 * @since 10/14/2019
 */
public class DetailsPage extends AbstractPage {

    @FindBy(tagName = "header")
    private HeaderMenu headerMenu;
    @FindBy(xpath = "//h1[text()='Your Details']")
    private ExtendedWebElement detailPageTitle;
    @FindBy(xpath = "//li[contains(text(),'Name')]")
    private ExtendedWebElement nameLbl;
    @FindBy(xpath = "//li[contains(text(),'Email')]")
    private ExtendedWebElement emailLbl;

    /**
     * The constructor create a DetailsPage object
     *
     * @param driver
     */
    public DetailsPage(WebDriver driver) {
        super(driver);
    }

    /**
     * This method return a header Menu object to interact with the elements into the header in the Details page
     *
     * @return headerMenu Object
     */
    public HeaderMenu getHeaderMenu() {
        return headerMenu;
    }

    /**
     * This method return a boolean to indicate if the Details Page is opened
     *
     * @return true or false
     */
    public boolean isDetailsPageOpened() {
        return detailPageTitle.isElementPresent();
    }

    /**
     * This method return the name displayed after colons on the Name Label
     *
     * @return Name of the logged user
     */
    public String getNameText() {
        return nameLbl.getText().split(": ")[1];
    }

    /**
     * This method return the Email address displayed after colons on the Email address Label
     *
     * @return Email address of the logged user
     */
    public String getEmailText() {
        return emailLbl.getText().split(": ")[1];
    }

}
