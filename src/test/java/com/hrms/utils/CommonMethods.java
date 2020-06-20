package com.hrms.utils;


import com.hrms.testbase.BaseClass;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;

//import com.hrmsia.testbase.PageInitializer;

public class CommonMethods{

	public static void Click(WebElement element) {
		waitForClicibity(element);

		element.click();

	}

	public static void SendText(WebElement element, String text) {

		element.clear();
		element.sendKeys(text);

	}

	public static WebDriverWait webDriverWaitObj() {
		WebDriverWait wait = new WebDriverWait(BaseClass.driver, Constans.EXPLICIT_WAIT_TIME);
		return wait;

	}

	public static void waitForClicibity(WebElement element) {
		webDriverWaitObj().until(ExpectedConditions.elementToBeClickable(element));

	}

	public static void selectValueFromDd(WebElement element, String text) {
		Select select = new Select(element);
		select.selectByVisibleText(text);

	}

	public static byte[] takeScreenshot(String filename) {
		byte[] tsb;
		TakesScreenshot ts = (TakesScreenshot)BaseClass.driver;
		tsb = ts.getScreenshotAs(OutputType.BYTES);
		File file = ts.getScreenshotAs(OutputType.FILE);

		try {
			FileUtils.copyFile(file, new File(Constans.SCREEN_SHOTS_PATH + filename + ".png"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return tsb;

	}

	public static void waitForVisibilty(WebElement element) {
		webDriverWaitObj().until(ExpectedConditions.visibilityOf(element));

	}

	public static void jsClick(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor)BaseClass.driver;
		js.executeScript("arguments[0].click();", element);

	}

	public static void wait(int second) {

		try {
			Thread.sleep(second * 1000);
		} catch (InterruptedException e) {

			e.printStackTrace();
		}

	}

}
