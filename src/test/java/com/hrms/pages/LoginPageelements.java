package com.hrms.pages;

import com.hrms.testbase.BaseClass;
import com.hrms.utils.CommonMethods;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPageelements extends CommonMethods {

	@FindBy(id = "txtUsername")
	public WebElement userName;
	@FindBy(id = "txtPassword")
	public WebElement passWord;
	@FindBy(id = "btnLogin")
	public WebElement loginBtn;
	@FindBy(xpath = "//a[@target='_blank']/img")
	public WebElement logoPresent;

	@FindBy(xpath = "//span[text()='Invalid credentials']")

	public WebElement invalidCredentialsErrorMsg;

	@FindBy(xpath = "//span[text()='Password cannot be empty']")
	public WebElement emptyPasswordErrorMsg;

	@FindBy(xpath = "Username cannot be empty")
	public WebElement emptyUsernameErrorMsg;

	public LoginPageelements() {
		PageFactory.initElements(BaseClass.driver, this);
	}

	public void loginTHrms(String uSerName, String passWord) {
		SendText(userName, uSerName);
		SendText(this.passWord, passWord);
		Click(loginBtn);

	}

}
