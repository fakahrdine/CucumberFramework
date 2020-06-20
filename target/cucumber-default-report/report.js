$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featuress/employeeContactDetails.feature");
formatter.feature({
  "name": "Adding Employee Contact Details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "As an Admin user I should be able to change employees contact details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@inProgress"
    }
  ]
});
formatter.step({
  "name": "Admin logged in successfully to Hrms application",
  "keyword": "Given "
});
formatter.step({
  "name": "Admin  navigate to employees list page and",
  "keyword": "And "
});
formatter.step({
  "name": "Admin enter valid employee Id \"\u003cemployee Id\u003e\" and click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "Admin click on employee name in the table list",
  "keyword": "And "
});
formatter.step({
  "name": "Admin click on  Contact details section on personnel details page",
  "keyword": "When "
});
formatter.step({
  "name": "Admin enters employees contact details as \"\u003cAddress1\u003e\",\"\u003cAddress2\u003e\",  \"\u003cCity\u003e\",\"\u003cStateProvince\u003e\",\"\u003cZip\u003e\",\"\u003cCountry\u003e\", \"\u003cHphone\u003e\",\"\u003cMobile\u003e\",\"\u003cwork phone\u003e\",\"\u003cwork email\u003e\",\"\u003cother email\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin sees employee contact details saved",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Address1",
        "Address2",
        "City",
        "StateProvince",
        "Zip",
        "Country",
        "Hphone",
        "Mobile",
        "work phone",
        "employee Id",
        "other email",
        "work email"
      ]
    },
    {
      "cells": [
        "4949 manitoba  dr",
        "4949 manitoba  dr",
        "Alexandria",
        "N?A",
        "2312",
        "Afghanistan",
        "5744589878",
        "78455255",
        "54844875",
        "12852",
        "ronny2015@gmail.com",
        "kaghs785@gmail.com"
      ]
    },
    {
      "cells": [
        "101 row st",
        "101 row st",
        "veinna",
        "N?A",
        "22310",
        "Algeria",
        "458945822",
        "55555885",
        "444412681",
        "12681",
        "fuyam2015@gmail.com",
        "ka78po5@gmail.com"
      ]
    },
    {
      "cells": [
        "5975 s rynolds st",
        "5975 s rynolds st",
        "woodbrig",
        "N?A",
        "2000",
        "Bolivia",
        "4588259",
        "44588528",
        "147444203",
        "14203",
        "kuyamam2015@gmail.com",
        "kaft785@gmail.com"
      ]
    },
    {
      "cells": [
        "1213 duke st",
        "1213 duke st",
        "colombia",
        "N?A",
        "2354",
        "Canada",
        "852889455",
        "782646651",
        "70337741788",
        "13395",
        "albetm2015@gmail.com",
        "kfaa785@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As an Admin user I should be able to change employees contact details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@inProgress"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin logged in successfully to Hrms application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_logged_in_successfully_to_Hrms_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin  navigate to employees list page and",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_navigate_to_employees_list_page_and()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter valid employee Id \"12852\" and click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_enter_valid_employee_Id_and_click_on_search_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on employee name in the table list",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_click_on_employee_name_in_the_table_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on  Contact details section on personnel details page",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_click_on_Contact_details_section_on_personnel_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters employees contact details as \"4949 manitoba  dr\",\"4949 manitoba  dr\",  \"Alexandria\",\"N?A\",\"2312\",\"Afghanistan\", \"5744589878\",\"78455255\",\"54844875\",\"kaghs785@gmail.com\",\"ronny2015@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_enters_employees_contact_details_as(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin sees employee contact details saved",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_sees_employee_contact_details_saved()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As an Admin user I should be able to change employees contact details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@inProgress"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin logged in successfully to Hrms application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_logged_in_successfully_to_Hrms_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin  navigate to employees list page and",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_navigate_to_employees_list_page_and()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter valid employee Id \"12681\" and click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_enter_valid_employee_Id_and_click_on_search_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on employee name in the table list",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_click_on_employee_name_in_the_table_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on  Contact details section on personnel details page",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_click_on_Contact_details_section_on_personnel_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters employees contact details as \"101 row st\",\"101 row st\",  \"veinna\",\"N?A\",\"22310\",\"Algeria\", \"458945822\",\"55555885\",\"444412681\",\"ka78po5@gmail.com\",\"fuyam2015@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_enters_employees_contact_details_as(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin sees employee contact details saved",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_sees_employee_contact_details_saved()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As an Admin user I should be able to change employees contact details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@inProgress"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin logged in successfully to Hrms application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_logged_in_successfully_to_Hrms_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin  navigate to employees list page and",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_navigate_to_employees_list_page_and()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter valid employee Id \"14203\" and click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_enter_valid_employee_Id_and_click_on_search_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on employee name in the table list",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_click_on_employee_name_in_the_table_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on  Contact details section on personnel details page",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_click_on_Contact_details_section_on_personnel_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters employees contact details as \"5975 s rynolds st\",\"5975 s rynolds st\",  \"woodbrig\",\"N?A\",\"2000\",\"Bolivia\", \"4588259\",\"44588528\",\"147444203\",\"kaft785@gmail.com\",\"kuyamam2015@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_enters_employees_contact_details_as(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin sees employee contact details saved",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_sees_employee_contact_details_saved()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As an Admin user I should be able to change employees contact details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@inProgress"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin logged in successfully to Hrms application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_logged_in_successfully_to_Hrms_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin  navigate to employees list page and",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_navigate_to_employees_list_page_and()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter valid employee Id \"13395\" and click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_enter_valid_employee_Id_and_click_on_search_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on employee name in the table list",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_click_on_employee_name_in_the_table_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on  Contact details section on personnel details page",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_click_on_Contact_details_section_on_personnel_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters employees contact details as \"1213 duke st\",\"1213 duke st\",  \"colombia\",\"N?A\",\"2354\",\"Canada\", \"852889455\",\"782646651\",\"70337741788\",\"kfaa785@gmail.com\",\"albetm2015@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_enters_employees_contact_details_as(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin sees employee contact details saved",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_sees_employee_contact_details_saved()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/featuress/qualifications.feature");
formatter.feature({
  "name": "Adding skills to an exesting employee",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "As an Admin I should be able to add difrrent skills to an exesting employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@temp"
    }
  ]
});
formatter.step({
  "name": "Admin logged in successfully to Hrms application",
  "keyword": "Given "
});
formatter.step({
  "name": "Admin  navigate to employees list page and",
  "keyword": "And "
});
formatter.step({
  "name": "Admin enter valid employee Id \"\u003cemployee Id\u003e\" and click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "Admin click on employee name in the table list",
  "keyword": "And "
});
formatter.step({
  "name": "Admin click on qualification section button",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin click on add skills button",
  "keyword": "And "
});
formatter.step({
  "name": "Admin selects skill \"\u003cskills\u003e\" \u0026 enters \"\u003cYears of Experience\u003e\" \u0026 \"\u003cComment\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Amin click on save button",
  "keyword": "And "
});
formatter.step({
  "name": "Admin sees that the skill \"\u003cskills\u003e\" added to employes skills table",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "employee Id",
        "Years of Experience",
        "skills",
        "Comment"
      ]
    },
    {
      "cells": [
        "12852",
        "3",
        "Creative",
        "good"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As an Admin I should be able to add difrrent skills to an exesting employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin logged in successfully to Hrms application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_logged_in_successfully_to_Hrms_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin  navigate to employees list page and",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_navigate_to_employees_list_page_and()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter valid employee Id \"12852\" and click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_enter_valid_employee_Id_and_click_on_search_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on employee name in the table list",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddContactDetailsSteps.admin_click_on_employee_name_in_the_table_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on qualification section button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddingEmployeeSkillsSteps.admin_click_on_qualification_section_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click on add skills button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddingEmployeeSkillsSteps.admin_click_on_add_skills_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects skill \"Creative\" \u0026 enters \"3\" \u0026 \"good\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddingEmployeeSkillsSteps.admin_selects_skill_enters(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Creative\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-J49C07QH\u0027, ip: \u0027172.20.10.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.hrms.utils.CommonMethods.selectValueFromDd(CommonMethods.java:48)\r\n\tat com.hrms.steps.AddingEmployeeSkillsSteps.admin_selects_skill_enters(AddingEmployeeSkillsSteps.java:35)\r\n\tat ✽.Admin selects skill \"Creative\" \u0026 enters \"3\" \u0026 \"good\"(file:///C:/Users/Mohamed/IdeaProjects/HrmsCucumber/src/test/resources/featuress/qualifications.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Amin click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddingEmployeeSkillsSteps.amin_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin sees that the skill \"Creative\" added to employes skills table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddingEmployeeSkillsSteps.admin_sees_that_the_skill_added_to_employes_skills_table(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});