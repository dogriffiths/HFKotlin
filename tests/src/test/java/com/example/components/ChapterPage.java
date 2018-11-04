package com.example.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.selenide.PageTitle;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class ChapterPage extends BasicPage {
    public ChapterPage() {
        super("/chapters");
    }

    @Override
    protected boolean matchesUrl(String currentUrl) {
        return currentUrl.matches(".+/chapters/[^/]+");
    }

    public SelenideWidget subtitle() {
        return new SelenideWidget(By.className("subtitle"), this);
    }

    public SelenideWidget title() {
        return appBar().title();
    }

    public PageTitle pageTitle() {
        return super.pageTitle();
    }
}
