package com.example.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class SourceCodePage extends BasicPage {
    public SourceCodePage() {
        super("/sourceCode");
    }

    public Link repoLinkUrl() {
        return new Link(By.className("repoLink"), this);
    }

    public SelenideWidget repoLink() {
        return new SelenideWidget(By.className("repoLink"), this);
    }
}
