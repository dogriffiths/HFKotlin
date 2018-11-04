package com.example.steps;

import com.example.components.*;
import cucumber.api.PendingException;
import cucumber.api.Transpose;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.blackpepper.relish.core.TableRow;

import java.util.List;

import static org.junit.Assert.assertEquals;

public class SomeSteps
{
    private HomePage homePage = new HomePage();
    private TableOfContentsPage tableOfContentsPage = new TableOfContentsPage();
    private SourceCodePage sourceCodePage = new SourceCodePage();
    private CurrentPage currentPage = new CurrentPage();
    private ChapterPage chapter = new ChapterPage();
    private ArticlePage articlePage = new ArticlePage();
    private BlogsPage blogsPage = new BlogsPage();
    private AliasStore aliasStore = AliasStore.getInstance();

    @When("^I launch the app$")
    public void iLaunchTheApp() {
        homePage.launch();
    }

    @Then("^I will see the welcome$")
    public void iWillSeeTheWelcome() {
        homePage.welcome().assertVisible();
    }

    @And("^the title will be '([^']*)'$")
    public void theTitleWillBeHeadFirstKotlin(String expectedTitle) {
        currentPage.pageTitle().matches(expectedTitle);
        currentPage.appBar().title().matches(expectedTitle);
    }

    @And("^I navigate to '([^']*)'$")
    public void iNavigateToTableOfContents(String drawerOption) {
        currentPage.drawer().open(drawerOption);
    }

    @Then("^I will see the following table of contents:$")
    public void iWillSeeTheFollowingTableOfContents(List<TableRow> tocs) {
        tableOfContentsPage.tableOfContents().matches(tocs);
    }

    @Then("^the home page will be visible$")
    public void theHomePageWillBeVisible() {
        homePage.assertVisible();
    }

    @And("^I will see a link to the Github repo$")
    public void iWillSeeALinkToTheGithubRepo() {
        sourceCodePage.repoLinkUrl().matches("https://github.com/dogriffiths/HFKotlin");
        sourceCodePage.repoLink().matches("source code from Github");
    }

    @When("^I open chapter '([^']*)'$")
    public void iOpenChapterGettingStarted(String chapterTitle) {
        tableOfContentsPage.tableOfContents().with("title", chapterTitle).click();
    }

    @Then("^I see this chapter$")
    public void iSeeThisChapter(@Transpose List<TableRow> details) {
        chapter.matches(details.get(0));
    }

    @When("^I open the first blog article with title '([^']*)'$")
    public void iOpenTheFirstBlogArticleWithTitleTitle(String titleAlias) {
        String title = blogsPage.articles().first().title().getStringValue();
        aliasStore.put(titleAlias, title);
        blogsPage.articles().first().title().click();
    }

    @Then("^I can see a blog article with title '([^']*)'$")
    public void iCanSeeABlogArticleWithTitleTitle(String titleAlias) {
        String expectedTitle = aliasStore.get(titleAlias, String.class);
        articlePage.title().matches(expectedTitle);
        articlePage.pageTitle().matches(expectedTitle);
    }

    @When("^I choose to return to blogs$")
    public void iChooseToReturnToBlogs() {
        articlePage.returnToBlogs().click();
    }
}
