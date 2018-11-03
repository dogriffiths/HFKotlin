package com.example.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.core.Component;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class PageTitle extends SelenideWidget {
    public PageTitle(Component parent) {
        super(By.cssSelector("title"), parent.getRoot());
    }

    @Override
    public String getStringValue() {
        return get().attr("text");
    }
}
