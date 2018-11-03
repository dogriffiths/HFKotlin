package com.example.steps;

import com.codeborne.selenide.Configuration;

import com.codeborne.selenide.WebDriverRunner;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriverException;

import java.io.IOException;

import cucumber.api.CucumberOptions;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

import static com.codeborne.selenide.Selenide.clearBrowserCookies;
import static com.codeborne.selenide.Selenide.clearBrowserLocalStorage;

@CucumberOptions(features = "features")
public class Hooks {
    @Before
    public void before() throws IOException {
        String driver = getDriverName();
        SelenideWidget.setEdgeQuirksMode(false);
        Configuration.browser = driver;
        Configuration.chromeSwitches = "disable-infobars";
        String property = System.getProperty("selenide.baseUrl");
        if (property == null) {
            Configuration.baseUrl = "http://localhost:3000";
        }
        Configuration.browserSize = "1024x768";
        WebDriverRunner.getWebDriver().manage().window().setPosition(new Point(60, 80));
    }

    @After
    public void after() throws IOException {
        clearBrowserCookies();
        try {
            clearBrowserLocalStorage();
        } catch(WebDriverException wde) {
            System.err.println("Cannot clear local storage. Non browser test?");
        }
    }

    private static String getDriverName() {
        String driver = System.getProperty("driverName");
        if (driver == null) {
            driver = "chrome";
        }
        return driver;
    }
}
