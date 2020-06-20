package com.hrms.runners;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        features = "src/test/resources/featuress"
        ,glue = "com/hrms/steps"
        ,monochrome = true
        ,dryRun = false

        ,plugin = {
                "pretty",
          "html:target/cucumber-default-report"
         ,"json:target/cucumbereport.json"




}






)

public class SmokeRunner {
}
