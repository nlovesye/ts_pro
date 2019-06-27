package stu_manage;

public class Person {
	private Role role;
	private String number;
	private String name;
	private int age;
	private String sex;
	
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	
	@Override
	public String toString() {
		return "人 [角色：" + role.getName() + ", 编号：" + number + ", 姓名：" + name + ", 年龄：" + age + ", 性别：" + sex + "]";
	}
	
	public Person() {
		super();
	}
	
	public Person(Role role, String number, String name, int age, String sex) {
		super();
		this.role = role;
		this.number = number;
		this.name = name;
		this.age = age;
		this.sex = sex;
	}
	
	@Override
	public boolean equals(Object number) {
		// TODO 自动生成的方法存根
		return this.number.equals(number);
	}

}
