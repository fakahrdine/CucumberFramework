package com.hrms.pages;

import com.hrms.testbase.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class EmployeeQualificationselements {
	@FindBy(linkText = "Qualifications")

	public WebElement QualificationsBtn;

	@FindBy(id = "addSkill")

	public WebElement addSkillsBtn;

	@FindBy(xpath = "//select[@id='skill_code']")

	public WebElement skillsDd;

	@FindBy(css = "input#skill_years_of_exp")

	public WebElement yearsOfSkillTxtBx;

	@FindBy(id = "skill_comments")

	public WebElement CommentsTxtBx;

	@FindBy(id = "btnSkillSave")

	public WebElement skillsSaveBtn;

	@FindBy(xpath = "//p[@id='actionSkill']/following-sibling::table//tr//td[2]")

	public List<WebElement> skillsTable;

	public EmployeeQualificationselements() {

		PageFactory.initElements(BaseClass.driver, this);
	}

}
