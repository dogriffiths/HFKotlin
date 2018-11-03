package com.example.components;

import org.openqa.selenium.By;

public class TableOfContentsPage extends BasicPage {

    public TableOfContentsPage() {
        super("/tableOfContents");
    }

    public ChapterCards tableOfContents() {
        return new ChapterCards(By.className("tableOfContents"), this);
    }
}
