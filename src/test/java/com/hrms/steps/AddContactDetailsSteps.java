package com.hrms.steps;

import com.hrms.utils.CommonMethods;
import com.hrms.utils.ConfigReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static com.hrms.testbase.PageInitializer.*;

public class AddContactDetailsSteps extends CommonMethods {
	@Given("Admin logged in successfully to Hrms application")
	public void admin_logged_in_successfully_to_Hrms_application() throws InterruptedException {
		// login.loginTHrms(ConfigReader.getProperties("username"),
		// ConfigReader.getProperties("password"));
		// setup();

		SendText(login.userName, ConfigReader.getProperties("username"));
		SendText(login.passWord, ConfigReader.getProperties("password"));
		Click(login.loginBtn);
		// Thread.sleep(2000);
		
	

	}

	@Given("Admin  navigate to employees list page and")
	public void admin_navigate_to_employees_list_page_and() {
		jsClick(dash.PIMbutton);

	}

	@Given("Admin enter valid employee Id {string} and click on search button")
	public void admin_enter_valid_employee_Id_and_click_on_search_button(String empid) {
		SendText(empList.empId, empid);
		Click(empList.searchBtn);

	}

	@Given("Admin click on employee name in the table list")
	public void admin_click_on_employee_name_in_the_table_list() {

		jsClick(empList.searchedEmployee);

	}

	@When("Admin click on  Contact details section on personnel details page")
	public void admin_click_on_Contact_details_section_on_personnel_details_page() throws InterruptedException {
		// waitForVisibilty(empConD.contactDetailsBtn);
		// waitForClicibity(empConD.contactDetailsBtn);
		// Thread.sleep(3000);
		Click(empConD.contactDetailsBtn);

		// Thread.sleep(3000);

	}

	@Then("Admin enters employees contact details as {string},{string},  {string},{string},{string},{string}, {string},{string},{string},{string},{string}")
	public void admin_enters_employees_contact_details_as(String adds1, String adds2, String city, String state,
			String zip, String country, String homeph, String mobile, String workph, String workemail,
			String otheremail) throws InterruptedException {

		Click(empConD.saveOrEditBtn);

		SendText(empConD.address1Txtbx, adds1);
		SendText(empConD.address2TxtBx, adds2);
		SendText(empConD.cityTextBx, city);
		SendText(empConD.provinceCityTxtBx, state);
		SendText(empConD.zipCodeTxtBx, zip);
		selectValueFromDd(empConD.countryDd, country);
		SendText(empConD.homephoneTxtBx, homeph);
		SendText(empConD.mobilePhoneTxtBx, mobile);
		SendText(empConD.workPhoneTxtBx, workph);
		SendText(empConD.workEmailTxtBx, workemail);
		SendText(empConD.otherEmailTxtBx, otheremail);
		// Thread.sleep(3000);

		Click(empConD.saveOrEditBtn);

	}

	@Then("Admin sees employee contact details saved")
	public void admin_sees_employee_contact_details_saved() {

		System.out.println("test ends");

	}

}
