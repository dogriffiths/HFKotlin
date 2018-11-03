package com.example.steps;

import com.codeborne.selenide.Configuration;

import com.codeborne.selenide.WebDriverRunner;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;

import java.io.IOException;
import java.net.URL;

import cucumber.api.CucumberOptions;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

import static com.codeborne.selenide.Selenide.clearBrowserCookies;
import static com.codeborne.selenide.Selenide.clearBrowserLocalStorage;

@CucumberOptions(features = "features")
public class Hooks {
    @Before
    public void before() throws IOException {
        String driver = getDriverName();

        if (isRemote(driver)) {
            String hub = "http://192.168.1.119:4444/wd/hub";
            String hubProperty = System.getProperty("hub");
            if (hubProperty != null) {
                hub = hubProperty;
            }
            WebDriver webDriver = ("ie".equals(driver))
                    ? new RemoteWebDriver(new URL(hub), DesiredCapabilities.internetExplorer())
                    : new RemoteWebDriver(new URL(hub), DesiredCapabilities.edge());
            SelenideWidget.setEdgeQuirksMode("edge".equals(driver));
            WebDriverRunner.setWebDriver(webDriver);
            String property = System.getProperty("selenide.baseUrl");
            if (property == null) {
                Configuration.baseUrl = "http://localhost:3000";
            }
        } else {
            SelenideWidget.setEdgeQuirksMode(false);
            Configuration.browser = driver;
            Configuration.chromeSwitches = "disable-infobars";
            String property = System.getProperty("selenide.baseUrl");
            if (property == null) {
                Configuration.baseUrl = "http://localhost:3000";
            }
        }
        Configuration.browserSize = "1024x768";
        WebDriverRunner.getWebDriver().manage().window().setPosition(new Point(60, 80));
    }

    public boolean isRemote(String driver) {
        return ("edge".equals(driver)) || ("ie".equals(driver));
    }

    @After
    public void closeDown() {
        if (isRemote(getDriverName())) {
            WebDriverRunner.getWebDriver().close();
        }
    }

    @After
    public void after() throws IOException {
        clearBrowserCookies();
        try {
            clearBrowserLocalStorage();
        } catch (WebDriverException wde) {
            System.err.println("Cannot clear local storage. Non browser test?");
        }
    }

    private static String getDriverName() {
        return System.getProperty("driverName", "chrome");
    }
}
