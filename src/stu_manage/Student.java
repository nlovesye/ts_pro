package stu_manage;

public class Student extends Person {
	private int chinese;
	private int math;
	private int english;
	public int getChinese() {
		return chinese;
	}
	public void setChinese(int chinese) {
		this.chinese = chinese;
	}
	public int getMath() {
		return math;
	}
	public void setMath(int math) {
		this.math = math;
	}
	public int getEnglish() {
		return english;
	}
	public void setEnglish(int english) {
		this.english = english;
	}
	public Student() {
		super();
		// TODO 自动生成的构造函数存根
	}
	public Student(Role role, String number, String name, int age, String sex) {
		super(role, number, name, age, sex);
		// TODO 自动生成的构造函数存根
	}
	public Student(Role role, String number, String name, int age, String sex, int chinese, int math, int english) {
		super(role, number, name, age, sex);
		this.chinese = chinese;
		this.math = math;
		this.english = english;
	}
	
}
