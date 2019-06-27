package stu_manage;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Random;
import java.util.Scanner;

public class Person_db {
	public static ArrayList<Admin> admins = new ArrayList<Admin>();
	public static ArrayList<Teacher> teachers = new ArrayList<Teacher>();
	public static ArrayList<Student> students = new ArrayList<Student>();
	boolean isLogin = false;
	
	static {
		admins.addAll(makeAdmin(5, 20, 60));
		teachers.addAll(makeTeacher(5, 12, 32));
		students.addAll(makeStudent(5, 12, 60));
	}
	
	/**
	 * 生成管理员
	 * @param count
	 * @param minAge
	 * @param maxAge
	 * @return
	 */
	static ArrayList<Admin> makeAdmin(int count, int minAge, int maxAge) {
		ArrayList<Admin> temp = new ArrayList<Admin>();
		for(int i = 0; i < count; i++) {
			Random rd = new Random();
			int age = minAge + (rd.nextInt(maxAge - minAge + 1));
			temp.add(new Admin(Role.admin, "A000" + (i + 1), "索聋" + count, age, rd.nextInt(10) < 5 ? "男" : "女"));
		}
		return temp;
	}
	
	/**
	 * 生成老师
	 * @param count
	 * @param minAge
	 * @param maxAge
	 * @return
	 */
	static ArrayList<Teacher> makeTeacher(int count, int minAge, int maxAge) {
		ArrayList<Teacher> temp = new ArrayList<Teacher>();
		for(int i = 0; i < count; i++) {
			Random rd = new Random();
			int age = minAge + (rd.nextInt(maxAge - minAge + 1));
			temp.add(new Teacher(Role.teacher, "T000" + (i + 1), "污索普" + count, age, rd.nextInt(10) < 5 ? "男" : "女"));
		}
		return temp;
	}
	
	/**
	 * 生成学生
	 * @param count
	 * @param minAge
	 * @param maxAge
	 * @return
	 */
	static ArrayList<Student> makeStudent(int count, int minAge, int maxAge) {
		ArrayList<Student> temp = new ArrayList<Student>();
		for(int i = 0; i < count; i++) {
			Random rd = new Random();
			int age = minAge + (rd.nextInt(maxAge - minAge + 1));
			temp.add(new Student(Role.student, "S000" + (i + 1), "路非" + count, age, rd.nextInt(10) < 5 ? "男" : "女"));
		}
		return temp;
	}
	
	public void start() {
		System.out.println("-----------------欢迎进入管理系统，请选择登陆角色---------------------");
		System.out.println("老师请输入：1， 学生请输入：2， 管理员请输入：3");
		Scanner sc = new Scanner(System.in);
		int type = sc.nextInt();
		if (type == 1) {
			login();
		} else if (type == 2) {
			login();
		} else if (type == 3) {
			adminLogin();
		} else {
			System.out.println("不存在该角色，请重新输入");
			System.exit(0);
		}
	}
	
	private void adminLogin() {
		Scanner sc = new Scanner(System.in);
		System.out.println("请输入登陆编号：");
		String number = sc.nextLine();
		Admin user = null;
		Iterator<Admin> it = admins.iterator();
		while(it.hasNext()) {
			if (it.next().equals(number)) {
				isLogin = true;
				user = it.next();
				break;
			}
		}
		if (isLogin) {
			System.out.println("登陆成功,当前登陆角色为>>>>>>>" + user);
		} else {
			adminLogin();
		}
	}
	
	private void login() {
		System.out.println("请输入登陆编号：");
		Scanner sc = new Scanner(System.in);
		String number = sc.nextLine();
		admins.forEach(admin -> {
			if (admin.equals(number)) {
				System.out.println("登陆成功,当前登陆角色为" + 1);
			} else {
				System.out.println("不存在该用户");
				System.exit(0);
			}
		});
	}
}
