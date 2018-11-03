package com.example.components;

import org.openqa.selenium.By;
import uk.co.blackpepper.relish.selenide.Page;

public class BasicPage extends Page {
    public BasicPage(String path) {
        super(path);
    }

    public DrawerWidget drawer() {
        return new DrawerWidget(this);
    }

    public AppBar appBar() {
        return new AppBar(By.className("appBar"), this);
    }
}
