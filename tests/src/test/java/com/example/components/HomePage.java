package com.example.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.selenide.Page;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class HomePage extends Page {
    public HomePage() {
        super("/");
    }

    public SelenideWidget welcome() {
        return new SelenideWidget(By.className("welcome"), this);
    }

    public PageTitle pageTitle() {
        return new PageTitle(this);
    }

    public SelenideWidget title() {
        return new SelenideWidget(By.cssSelector("h1"), this);
    }
}
