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
	public static Scanner sc = new Scanner(System.in);
	public static Person user = null;
	
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
		System.out.println("-----------------欢迎进入管理系统---------------------");
		showAdmins();
		showTeachers();
		showStudents();
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
	 * 根据对应角色和编号查询对应角色
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
	 * 根据编号查询用户
	 * @param number
	 * @return
	 */
	public static Person findOne(String number) {
		Person ps = findByNumber(admins, number);
		if (ps != null) {
			return ps;
		}
		ps = findByNumber(teachers, number);
		if (ps != null) {
			return ps;
		}
		ps = findByNumber(students, number);
		return ps;
	}
	
	/**
	 * 重试或退出系统
	 */
	public static boolean isRetry() {
		System.out.println("重试(Y)，退出(N)");
		String isExit = sc.next();
		if (isExit.equalsIgnoreCase("y")) {
			return true;
		}
		return false;
	}
	
	/**
	 * 添加一个老师/学生
	 */
	public static void addPerson(Person ps) {
		if (ps.getRole().getName().equals("老师")) {
			teachers.add((Teacher)ps);
			System.out.println("添加老师成功!");
			showTeachers();
		} else if (ps.getRole().getName().equals("学生")) {
			students.add((Student)ps);
			System.out.println("添加学生成功!");
			showStudents();
		} else {
			System.out.println("不存在的角色类型");
		}
	}
	
	/**
	 * 删除一个老师/学生
	 */
	
	public static void removerPerson(Role role, String number) {
		if (role.getName().equals("老师")) {
			for(int i = 0; i < teachers.size(); i++) {
				if (teachers.get(i).equals((Object)number)) {
					teachers.remove(i);
					break;
				}
			}
			System.out.println("删除老师成功!");
			showTeachers();
		} else if (role.getName().equals("学生")) {
			for(int i = 0; i < students.size(); i++) {
				if (students.get(i).equals((Object)number)) {
					students.remove(i);
					break;
				}
			}
			System.out.println("删除学生成功!");
			showStudents();
		} else {
			System.out.println("不存在的角色类型");
		}
	}
	
}
