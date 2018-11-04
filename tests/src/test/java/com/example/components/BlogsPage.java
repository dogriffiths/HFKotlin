package com.example.components;

import org.openqa.selenium.By;

public class BlogsPage extends BasicPage {
    public BlogsPage() {
        super("/blogs");
    }

    public ArticleList articles() {
        return new ArticleList(By.className("articles"), this);
    }
}
