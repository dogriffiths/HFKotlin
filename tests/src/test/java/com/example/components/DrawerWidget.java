package com.example.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.selenide.Page;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

import static java.lang.String.format;
import static org.openqa.selenium.By.cssSelector;
import static org.openqa.selenium.By.xpath;
import static uk.co.blackpepper.relish.core.TestUtils.attempt;

public class DrawerWidget extends SelenideWidget {

    public DrawerWidget(Page page) {
        super(cssSelector("body"), page);
    }

    public SelenideWidget title() {
        return new SelenideWidget(cssSelector("h1"), this);
    }

    public SelenideWidget drawerButton() {
        return new SelenideWidget(By.className("appBar-menu"), getRoot());
    }

    public void assertOptionNotAvailable(String option) {
        drawerButton().click();
        drawerItem(option).assertInvisible();
        click();
    }

    public SelenideWidget drawerItem(String itemName) {
        String xpath = format(
                "//div" +
                        "[contains(@class, '%s')]" +
                        "//span[text()[contains(.,'%s')]]", "AppBarAndMenu-drawer", itemName
        );
        return new SelenideWidget(xpath(
                xpath), this);
    }

    public void open(String drawerItem) {
        drawerButton().click();
        attempt(() -> {
            drawerItem(drawerItem).click();
//            if ("Dashboard".equals(drawerItem)) {
//                (new DashboardPage()).assertVisible();
//            }
        }, 500, 6);
    }
}
