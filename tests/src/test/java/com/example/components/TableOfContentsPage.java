package com.example.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.selenide.Page;
import uk.co.blackpepper.relish.selenide.Table;

public class TableOfContentsPage extends BasicPage {

    public TableOfContentsPage() {
        super("/tableOfContents");
    }

    public Table tableOfContents() {
        return new Table(By.className("tableOfContents"), this);
    }
}
