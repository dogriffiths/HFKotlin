package com.example.components;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;
import uk.co.blackpepper.relish.core.Component;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class ArticlePreview extends SelenideWidget {
    public ArticlePreview(SelenideElement peer, Component parent) {
        super(peer, parent);
    }

    public SelenideWidget title() {
        return new SelenideWidget(By.cssSelector(".ArticlePreview-title a"), this);
    }
}
