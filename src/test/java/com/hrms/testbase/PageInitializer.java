package com.hrms.testbase;

import com.hrms.pages.*;
//import com.hrmsia.pages.*;

public class PageInitializer extends BaseClass {

	public static EmployeeContactDetailsPage empConD;
	public static EmployeeQualificationselements empQualification;
	public static LoginPageelements login;
	public static EmployeeListPage empList;
	public static HrmDashBaordElements dash;

	public static void initialize() {

		empConD = new EmployeeContactDetailsPage();
		empQualification = new EmployeeQualificationselements();
		login = new LoginPageelements();
		empList = new EmployeeListPage();
		dash = new HrmDashBaordElements();

	}

}
