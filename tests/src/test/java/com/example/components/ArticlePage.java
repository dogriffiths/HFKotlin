package com.example.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.selenide.PageTitle;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class ArticlePage extends BasicPage {
    public ArticlePage() {
        super("/blogs");
    }

    @Override
    protected boolean matchesUrl(String currentUrl) {
        return currentUrl.matches(".+/blogs/[^/]+");
    }

    public SelenideWidget title() {
        return appBar().title();
    }

    public SelenideWidget returnToBlogs() {
        return new SelenideWidget(By.className("returnToBlogs"), this);
    }
}
