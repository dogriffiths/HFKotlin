package com.example.steps;

import com.example.components.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SomeSteps
{
    private HomePage homePage = new HomePage();

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
        homePage.pageTitle().matches(expectedTitle);
        homePage.title().matches(expectedTitle);
    }
}
