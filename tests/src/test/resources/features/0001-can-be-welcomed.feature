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
      | Number | Title                            | Subtitle                           | Image            |
      | 1      | getting started                  | A Quick Dip                        | images/11254.jpg |
      | 2      | basic types and variables        | Being a Variable                   | images/11120.jpg |
      | 3      | functions                        | Getting Out of Main                | images/11114.jpg |
      | 4      | classes and objects              | A Bit of Class                     | images/11240.jpg |
      | 5      | superclasses and subclasses      | Using your Inheritance             | images/11165.jpg |
      | 6      | abstract classes and interfaces  | Serious Polymorphism               | images/11131.jpg |
      | 7      | data classes                     | Dealing with Data                  | images/53212.jpg |
      | 8      | nulls and exceptions             | Safe and Sound                     | images/11077.jpg |
      | 9      | collections                      | Get Organized                      | images/11004.jpg |
      | 10     | generics                         | Know your Ins from your Outs       | images/11148.jpg |
      | 11     | lambdas & higher-order functions | Treating Code like Data            | images/11333.jpg |
      | 12     | built-in higher-order functions  | Power Up your Code                 | images/11142.jpg |
      | App I  | testing                          | Hold your Code to Account          | images/11199.jpg |
      | App II | leftovers                        | The Top Ten Things we didn't cover | images/11287.jpg |
    When I open chapter 'getting started'
    Then I see this chapter
      | Page title | getting started |
      | Title      | getting started |
      | Subtitle   | A Quick Dip     |
    When I navigate to 'Head First Kotlin'
    Then the home page will be visible

  Scenario: Can get to the source code
    When I launch the app
    And I navigate to 'Source code'
    Then the title will be 'Source code'
    And I will see a link to the Github repo
    When I navigate to 'Head First Kotlin'
    Then the home page will be visible

    Scenario: Can open a blog
      When I launch the app
      And I navigate to 'Blog'
      Then the title will be 'Blog'
      When I open the first blog article with title 'title'
      Then I can see a blog article with title 'title'
      When I choose to return to blogs
      Then the title will be 'Blog'
