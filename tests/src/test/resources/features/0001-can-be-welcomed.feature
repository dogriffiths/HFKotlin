Feature: Welcome users

  Scenario: Welcome is visible
    When I launch the app
    Then I will see the welcome
    And the title will be 'Head First Kotlin'