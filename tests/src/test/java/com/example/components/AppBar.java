package com.example.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.core.Component;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class AppBar extends SelenideWidget {
    public AppBar(By selector, Component parent) {
        super(selector, parent);
    }

    public SelenideWidget title() {
        return new SelenideWidget(By.cssSelector("h6"), this);
    }
}
