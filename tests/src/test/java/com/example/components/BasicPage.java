package com.example.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.selenide.Page;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class BasicPage extends Page {
    public BasicPage(String path) {
        super(path);
    }

    public SelenideWidget title() {
        return new SelenideWidget(By.cssSelector("h1"), this);
    }

    public DrawerWidget drawer() {
        return new DrawerWidget(this);
    }

    public AppBar appBar() {
        return new AppBar(By.className("appBar"), this);
    }
}
