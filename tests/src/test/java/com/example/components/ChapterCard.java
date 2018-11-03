package com.example.components;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;
import uk.co.blackpepper.relish.core.Component;
import uk.co.blackpepper.relish.selenide.SelenideWidget;

public class ChapterCard extends SelenideWidget {
    public ChapterCard(SelenideElement peer, Component parent) {
        super(peer, parent);
    }

    public SelenideWidget number() {
        return new SelenideWidget(By.className("chapter-number"), this);
    }

    public SelenideWidget title() {
        return new SelenideWidget(By.className("chapter-title"), this);
    }

    public SelenideWidget subtitle() {
        return new SelenideWidget(By.className("ImageItem-description"), this);
    }

    public Image image() {
        return new Image(By.className("cover-image"), this);
    }
}
