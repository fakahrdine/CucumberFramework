#Author: your.email@your.domain.com
Feature: Adding Employee Contact Details

  @inProgress
  Scenario Outline: As an Admin user I should be able to change employees contact details
    Given Admin logged in successfully to Hrms application
    And Admin  navigate to employees list page and
    And Admin enter valid employee Id "<employee Id>" and click on search button
    And Admin click on employee name in the table list
    When Admin click on  Contact details section on personnel details page
    Then Admin enters employees contact details as "<Address1>","<Address2>",  "<City>","<StateProvince>","<Zip>","<Country>", "<Hphone>","<Mobile>","<work phone>","<work email>","<other email>"
    Then Admin sees employee contact details saved

    Examples: 
      | Address1          | Address2          | City       | StateProvince | Zip   | Country     | Hphone     | Mobile    | work phone  | employee Id | other email           | work email         |
      | 4949 manitoba  dr | 4949 manitoba  dr | Alexandria | N?A           |  2312 | Afghanistan | 5744589878 |  78455255 |    54844875 |       12852 | ronny2015@gmail.com   | kaghs785@gmail.com |
      | 101 row st        | 101 row st        | veinna     | N?A           | 22310 | Algeria     |  458945822 |  55555885 |   444412681 |       12681 | fuyam2015@gmail.com   | ka78po5@gmail.com  |
      | 5975 s rynolds st | 5975 s rynolds st | woodbrig   | N?A           |  2000 | Bolivia     |    4588259 |  44588528 |   147444203 |       14203 | kuyamam2015@gmail.com | kaft785@gmail.com  |
      | 1213 duke st      | 1213 duke st      | colombia   | N?A           |  2354 | Canada      |  852889455 | 782646651 | 70337741788 |       13395 | albetm2015@gmail.com  | kfaa785@gmail.com  |
