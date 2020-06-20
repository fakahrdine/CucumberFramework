package com.hrms.utils;

import com.hrms.testbase.BaseClass;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ConfigReader extends BaseClass {

	public static FileInputStream fis;
	public static Properties prop;

	public static void readProperties(String propertiesPath) {
		try {
			fis = new FileInputStream(propertiesPath);
			prop = new Properties();
			prop.load(fis);
			// prop.getProperty(propkey);

		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public static String getProperties(String propkey) {

		readProperties(Constans.CONFIGS_FILE_PATH);
		return prop.getProperty(propkey);
	}

}
