package com.hrms.pages;

import com.hrms.testbase.BaseClass;
import com.hrms.utils.CommonMethods;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EmployeeContactDetailsPage extends CommonMethods {

	@FindBy(id = "btnSave")
	public WebElement saveOrEditBtn;

	@FindBy(id = "contact_street1")

	public WebElement address1Txtbx;

	@FindBy(id = "contact_street2")

	public WebElement address2TxtBx;

	@FindBy(id = "contact_city")

	public WebElement cityTextBx;

	@FindBy(id = "contact_province")

	public WebElement provinceCityTxtBx;

	@FindBy(id = "contact_emp_zipcode")

	public WebElement zipCodeTxtBx;

	@FindBy(id = "contact_country")
	public WebElement countryDd;

	@FindBy(name = "contact[emp_hm_telephone]")

	public WebElement homephoneTxtBx;

	@FindBy(name = "contact[emp_mobile]")
	public WebElement mobilePhoneTxtBx;

	@FindBy(id  = "contact_emp_work_telephone")

	public WebElement workPhoneTxtBx;
	@FindBy(id = "contact_emp_work_email")

	public WebElement workEmailTxtBx;

	@FindBy(name = "contact[emp_oth_email]")

	public WebElement otherEmailTxtBx;
	
	@FindBy(xpath = "//a[text()='Contact Details']")

	public WebElement contactDetailsBtn;

	public EmployeeContactDetailsPage() {
		PageFactory.initElements(BaseClass.driver, this);
	}

}
