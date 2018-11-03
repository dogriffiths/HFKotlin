package com.example.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.core.Component;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class Image extends SelenideWidget {
    public Image(By selector, Component parent) {
        super(selector, parent);
    }

    @Override
    public String getStringValue() {
        return get().attr("src");
    }
}
