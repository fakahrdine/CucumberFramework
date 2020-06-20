package com.hrms.steps;

import com.hrms.testbase.BaseClass;
import com.hrms.utils.CommonMethods;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class Hooks {

    @Before

    public void starts() {
        BaseClass.setup();

    }

    @After
    public void ends(Scenario scenario) {
        byte[] pic;
        if (scenario.isFailed()) {
            pic = CommonMethods.takeScreenshot("/failed/" + scenario.getName());
            scenario.attach(pic, "img/png", scenario.getName());
        } else {

            pic = CommonMethods.takeScreenshot("/passed/" + scenario.getName());
            scenario.attach(pic, "img/png", scenario.getName());


        }


        BaseClass.tearDown();

    }

}
