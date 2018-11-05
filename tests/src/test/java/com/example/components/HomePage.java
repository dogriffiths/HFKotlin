package com.example.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.selenide.Page;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class HomePage extends BasicPage {
    public HomePage() {
        super("/");
    }

    public SelenideWidget welcome() {
        return new SelenideWidget(By.className("Content-container"), this);
    }

}
