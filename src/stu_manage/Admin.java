package stu_manage;

public class Admin extends Person {

	public Admin() {
		super();
		// TODO 自动生成的构造函数存根
	}
	public Admin(Role role, String number, String name, int age, String sex) {
		super(role, number, name, age, sex);
		// TODO 自动生成的构造函数存根
	}
	
	public void showActions() {
		System.out.println("可进行操作如下");
		System.out.println("修改老师或学生信息：A，添加老师或学生：B，删除老师或学生：C");
		String opt = Person_db.sc.next();
		if (opt.equalsIgnoreCase("A")) {
			Person_db.showTeachers();
			Person_db.showStudents();
			System.out.println("请输入要修改的编号：");
			String number = Person_db.sc.next();
			Person ps = Person_db.findByNumber(Person_db.teachers, number);
			if (ps == null) {
				ps = Person_db.findByNumber(Person_db.students, number);
				if (ps == null) {
					if (Person_db.isRetry()) {
						showActions();
					} else {
						System.exit(0);
					}
				} else {
					editInfo(ps);
				}
			} else {
				editInfo(ps);
			}
		} else if (opt.equalsIgnoreCase("B")) {
			
		} else if (opt.equalsIgnoreCase("C")) {
			
		} else {
			System.out.println("不存在的指令！");
			showActions();
		}
	}
	
	/**
	 * 修改老师或学生信息
	 */
	public void editInfo(Person ps) {
		System.out.println("请输入姓名：");
		String name = Person_db.sc.next();
		System.out.println("请输入年龄：");
		int age = Person_db.sc.nextInt();
		System.out.println("请输入性别：");
		String sex = Person_db.sc.next();
		ps.setName(name);
		ps.setAge(age);
		ps.setSex(sex);
		Person_db.showTeachers();
		Person_db.showStudents();
		if (Person_db.isRetry()) {
			showActions();
		} else {
			System.exit(0);
		}
	}
	
	/**
	 * 添加老师或学生
	 */
	public void addPerson() {
		
	}
	
	/**
	 * 删除老师或学生
	 */
	public void removePerson() {
		
	}
}
