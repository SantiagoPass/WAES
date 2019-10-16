package com.waes.gui.pages;

import com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement;
import com.waes.gui.components.HeaderMenu;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.FindBy;

import com.qaprosoft.carina.core.gui.AbstractPage;

/**
 * In this class are mapped all elements into Home page.
 * All methods to interact with each element were created here.
 *
 * @author Santiago Passalacqua
 * @version 1.0
 * @since 10/14/2019
 */
public class HomePage extends AbstractPage {

    @FindBy(tagName = "header")
    private HeaderMenu headerMenu;
    @FindBy(xpath = "//h1[text()='WAES Tester Assignment']")
    private ExtendedWebElement homePageTitle;

    /**
     * The constructor create a HomePage object
     *
     * @param driver
     */
    public HomePage(WebDriver driver) {
        super(driver);
    }

    /**
     * This method return an header Menu object to interact with the elements into the header in the Home page
     *
     * @return headerMenu Object
     */
    public HeaderMenu getHeaderMenu() {
        return headerMenu;
    }

}
