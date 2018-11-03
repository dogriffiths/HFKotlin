package com.example.components;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;
import uk.co.blackpepper.relish.core.Component;
import uk.co.blackpepper.relish.selenide.SelenideAbstractListWidget;

public class ChapterCards extends SelenideAbstractListWidget<ChapterCard> {
    public ChapterCards(By selector, Component parent) {
        super(selector, parent);
    }

    @Override
    public By itemsSelector() {
        return By.className("ImageItem-container");
    }

    @Override
    protected ChapterCard createItem(SelenideElement selenideElement) {
        return new ChapterCard(selenideElement, this);
    }
}
