package com.hrms.steps;

import java.util.List;

//import org.junit.Assert;
import com.hrms.utils.CommonMethods;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

//import com.hrmsia.utils.CommonMethods;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static com.hrms.testbase.PageInitializer.empQualification;
import static com.hrms.utils.CommonMethods.*;

public class AddingEmployeeSkillsSteps extends CommonMethods {

	@Then("Admin click on qualification section button")
	public void admin_click_on_qualification_section_button() {
		jsClick(empQualification.QualificationsBtn);

	}

	@Then("Admin click on add skills button")
	public void admin_click_on_add_skills_button() {
		Click(empQualification.addSkillsBtn);

	}

	@When("Admin selects skill {string} & enters {string} & {string}")
	public void admin_selects_skill_enters(String skill, String yearsOfex, String comments) {
		selectValueFromDd(empQualification.skillsDd, skill);
		SendText(empQualification.yearsOfSkillTxtBx, yearsOfex);
		SendText(empQualification.CommentsTxtBx, comments);

	}

	@When("Amin click on save button")
	public void amin_click_on_save_button() {
		Click(empQualification.skillsSaveBtn);

	}

	@Then("Admin sees that the skill {string} added to employes skills table")
	public void admin_sees_that_the_skill_added_to_employes_skills_table(String selectedSkill) {
		wait(3);
		webDriverWaitObj().until(ExpectedConditions.visibilityOfAllElements(empQualification.skillsTable));

		List<WebElement> skillsintable = empQualification.skillsTable;
		for (WebElement skill : skillsintable) {
			String skilltext = skill.getText();

			if (skilltext.equals(selectedSkill)) {

				Assert.assertEquals("the skills are not mathxhed", selectedSkill, skilltext);
				System.out.println("!!!!!!!!!");
			}

		}

		System.out.println("test ends");

	}

}
