package com.example.components;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;
import uk.co.blackpepper.relish.core.Component;
import uk.co.blackpepper.relish.selenide.SelenideAbstractListWidget;

public class ArticleList extends SelenideAbstractListWidget<ArticlePreview> {

    public ArticleList(By selector, Component parent) {
        super(selector, parent);
    }

    public ArticlePreview first() {
        return createItem(items().get(0));
    }

    @Override
    public By itemsSelector() {
        return By.className("ArticlePreview");
    }

    @Override
    protected ArticlePreview createItem(SelenideElement selenideElement) {
        return new ArticlePreview(selenideElement, this);
    }
}
