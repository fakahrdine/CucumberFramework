package com.hrms.testbase;

import com.hrms.utils.ConfigReader;
import com.hrms.utils.Constans;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class BaseClass {

	public static WebDriver driver;
	//private static Object Constans;

	public static void setup() {

		ConfigReader.readProperties(Constans.CONFIGS_FILE_PATH);

		String browser = ConfigReader.getProperties("browser");
		if ("chrome".equals(browser)) {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		} else if ("firefox".equals(browser)) {
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
		} else {
			throw new RuntimeException("browser is not supported !!!");
		}

		driver.get(ConfigReader.getProperties("url"));

		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);

		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

		PageInitializer.initialize();

	}

	public static void tearDown() {

		driver.quit();
	}

}
