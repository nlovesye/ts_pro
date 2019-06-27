package stu_manage;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.Random;
import java.util.Scanner;

public class Person_db {
	public static ArrayList<Admin> admins = new ArrayList<Admin>();
	public static ArrayList<Teacher> teachers = new ArrayList<Teacher>();
	public static ArrayList<Student> students = new ArrayList<Student>();
	boolean isLogin = false;
	public static Scanner sc = new Scanner(System.in);
	
	static {
		admins.addAll(makeAdmin(5, 20, 60));
		teachers.addAll(makeTeacher(5, 12, 32));
		students.addAll(makeStudent(5, 12, 60));
		Collections.sort(admins);
		Collections.sort(teachers);
		Collections.sort(students);
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
			temp.add(new Admin(Role.admin, "A000" + (i + 1), "索聋" + i, age, rd.nextInt(10) < 5 ? "男" : "女"));
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
			temp.add(new Teacher(Role.teacher, "T000" + (i + 1), "污索普" + i, age, rd.nextInt(10) < 5 ? "男" : "女"));
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
			temp.add(new Student(Role.student, "S000" + (i + 1), "路非" + i, age, rd.nextInt(10) < 5 ? "男" : "女"));
		}
		return temp;
	}
	
	/**
	 * 启动
	 */
	public void start() {
		System.out.println("-----------------欢迎进入管理系统，请选择登陆角色---------------------");
		System.out.println("老师请输入：1， 学生请输入：2， 管理员请输入：3");
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
		System.out.println("请输入登陆编号：");
		String number = sc.next();
		Admin user = (Admin)findByNumber(admins, number);
		if (user != null) {
			System.out.println("登陆成功,当前登陆角色为>>>>>>>" + user);
			user.showActions();
		} else {
			System.out.println("登陆编号不存在，请重新输入：");
			adminLogin();
		}
	}
	
	private void login() {
		System.out.println("请输入登陆编号：");
		String number = sc.next();
		admins.forEach(admin -> {
			if (admin.equals((Object)number)) {
				System.out.println("登陆成功,当前登陆角色为" + 1);
			} else {
				System.out.println("不存在该用户");
				System.out.println("重新输入：Y，退出系统：N");
				String isExit = sc.next();
				if (isExit.equalsIgnoreCase("y")) {
					login();
				} else {
					System.exit(0);
				}
			}
		});
	}
	
	/**
	 * 显示管理员列表
	 */
	public static void showAdmins() {
		System.out.println("管理员列表：");
		admins.forEach(admin -> {
			System.out.println(admin);
		});
		System.out.println("---------------------------");
	}
	
	public static void showTeachers() {
		System.out.println("老师列表：");
		teachers.forEach(teacher -> {
			System.out.println(teacher);
		});
		System.out.println("---------------------------");
	}
	
	public static void showStudents() {
		System.out.println("学生列表：");
		students.forEach(student -> {
			System.out.println(student);
		});
		System.out.println("---------------------------");
	}
	
	/**
	 * 根据编号查询对应角色
	 */
	public static Person findByNumber(ArrayList<? extends Person> list, String number) {
		Person ps = null;
		Iterator<? extends Person> it = list.iterator();
		while(it.hasNext()) {
			ps = it.next();
			if (ps.getNumber().equals(number)) {
				return ps;
			} else {
				ps = null;
			}
		}
		return ps;
	}
	
	/**
	 * 重试或退出系统
	 */
	public static boolean isRetry() {
		System.out.println("编号不存在，重试(Y)，退出(N)");
		String isExit = sc.next();
		if (isExit.equalsIgnoreCase("y")) {
			return true;
		}
		return false;
	}
}
