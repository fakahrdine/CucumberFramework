#Author: your.email@your.domain.com
Feature: Adding skills to an exesting employee

  @temp
  Scenario Outline: As an Admin I should be able to add difrrent skills to an exesting employee
    Given Admin logged in successfully to Hrms application
    And Admin  navigate to employees list page and
    And Admin enter valid employee Id "<employee Id>" and click on search button
    And Admin click on employee name in the table list
    Then Admin click on qualification section button
    And Admin click on add skills button
    When Admin selects skill "<skills>" & enters "<Years of Experience>" & "<Comment>"
    And Amin click on save button
    Then Admin sees that the skill "<skills>" added to employes skills table

    Examples: 
      | employee Id | Years of Experience | skills   | Comment       |
      |       12852 |                   3 | Creative | good          |
      #|       12681 |                   4 | Creative | very good     |
      #|       14203 |                   1 | Creative | I an the best |
      #|       13395 |                   5 | Creative | awsome        |
