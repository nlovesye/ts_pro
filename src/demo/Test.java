package demo;

import java.io.IOException;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
//import java.util.Calendar;
import java.util.Date;
import java.util.Properties;

public class Test {

	public static void main(String[] args) {
		// TODO 自动生成的方法存根
//		System.out.println("hello!");
//		Person ps = new Person();
//		String name = ps.getName();
//		System.out.println(name);
//		ps.setName("小明");
//		name = ps.getName();
//		System.out.println(name);
//		ps.run();
//		
//		Student st = new Student();
//		st.run();
//		st.read("小花");
//		st.name = "小明";
//		System.out.println(st.name);
		
//		Person ps2 = new Student("小花狗", 12);
//		ps2.run();
//		System.out.println(ps2.height);
//		System.out.println(((Student)ps2).height);
//		
//		if (ps2 instanceof Student) {
//			Student st2 = (Student)ps2;
//			System.out.println(st2.height);
//		}
		
		/**
		 * System类
		 */
//		System.out.println(System.currentTimeMillis());
//		
////		获取系统信息
//		Properties pt = System.getProperties();
//		pt.list(System.out);
//		String lan = System.getProperty("user.language");
//		System.out.println(lan);
//		
//		System.exit(0);
		
		/**
		 * Runtime类
		 */
//		Runtime.getRuntime().gc();
//		// 空闲内存
//		System.out.println(Runtime.getRuntime().freeMemory());
//		// 总内存
//		System.out.println(Runtime.getRuntime().totalMemory());
//		
//		try {
//			// 打开记事本程序
//			Runtime.getRuntime().exec("notepad.exe");
//		} catch (IOException e) {
//			// TODO 自动生成的 catch 块
//			e.printStackTrace();
//		}
		
		/**
		 * BigDecimal类
		 */
////		int i = 5452655555454444444444444444444;
//		BigDecimal big1 = new BigDecimal("5452655555454444444444444444444");
//		BigDecimal big2 = new BigDecimal("5452655555454444444444444444440.1");
////		System.out.println(i);
//		System.out.println(big1.add(big1));
//		System.out.println(big1.subtract(big2));
//		System.out.println(big1.multiply(big2));
//		System.out.println(big1.divide(big2, 5, BigDecimal.ROUND_HALF_UP));
		
		/**
		 * Date类
		 */
//		System.out.println(new Date());
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//		String t = sdf.format(new Date());
//		System.out.println(t);
//		System.out.println(sdf.format(Calendar.getInstance().getTime()));
//
//		System.out.println(Calendar.getInstance().get(Calendar.YEAR));
//		System.out.println(Calendar.getInstance().get(Calendar.MONTH));
//		
//		System.out.println((int)Math.ceil(32.16159f));
		
		System.out.println(sum(100));
	}
	
	public static int sum(int num) {
		if (num == 1) {
			return 1;
		}
		int total = num + sum(num - 1);
		System.out.println(total);
		return total;
	}

}
