package io_demo;

import java.io.File;
import java.io.IOException;

public class Test {

	public static void main(String[] args) throws IOException {
		// TODO 自动生成的方法存根
		String curPath = "E:\\java\\Test\\src\\io_demo";
//		File f = new File(curPath, "test.js");
//		if (!f.createNewFile()) {
//			f.createNewFile();
//		}
//		File f = new File("C:\\Users\\Administrator\\Videos\\java\\day15");
//		f.delete();
		
		File source = new File(curPath, "source.json");
		System.out.println(source.getAbsolutePath());
		System.out.println();
	}

}
