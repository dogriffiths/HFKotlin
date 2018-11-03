Feature: Welcome users

  Scenario: Welcome is visible
    When I launch the app
    Then I will see the welcome
    And the title will be 'Head First Kotlin'

  Scenario: Can get to table of contents
    When I launch the app
    And I navigate to 'Table of contents'
    Then the title will be 'Table of contents'
    And I will see the following table of contents:
      | Number | Title                           | Subtitle               |
      | 1      | Getting started                 | A Quick Dip            |
      | 2      | Basic types and variables       | Being a Variable       |
      | 3      | Functions                       | Getting Out of Main    |
      | 4      | Classes and objects             | A Bit of Class         |
      | 5      | Subclasses and superclasses     | Using Your Inheritance |
      | 6      | Abstract classes and interfaces | Serious Polymorphism   |
      | 7      | Data classes                    | Dealing with Data      |
    When I navigate to 'Head First Kotlin'
    Then the home page will be visible

    Scenario: Can get to the source code
      When I launch the app
      And I navigate to 'Source code'
      Then the title will be 'Source code'
      And I will see a link to the Github repo
      When I navigate to 'Head First Kotlin'
      Then the home page will be visible
