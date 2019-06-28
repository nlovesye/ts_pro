package stu_manage;

public class Admin extends Person implements IActions {

	public Admin() {
		super();
		// TODO 自动生成的构造函数存根
	}
	public Admin(Role role, String number, String name, int age, String sex) {
		super(role, number, name, age, sex);
		// TODO 自动生成的构造函数存根
	}
	
	@Override
	public void showActions() {
		System.out.println("可进行操作如下");
		System.out.println("A:修改老师或学生信息\nB:添加老师或学生\nC:删除老师或学生");
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
			addPerson();
		} else if (opt.equalsIgnoreCase("C")) {
			removePerson();
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
		System.out.println("角色：老师(1)，学生(2)");
		int type = Person_db.sc.nextInt();
		Role role = type == 1 ? Role.teacher : type == 2 ? Role.student : null;
		if (role == null) {
			System.out.println("不存在该角色类型");
			if (Person_db.isRetry()) {
				addPerson();
			} else {
				System.exit(0);
			}
		}
		System.out.println("请输入" + role.getName() + "编号");
		String number = Person_db.sc.next();
		if (Person_db.findByNumber(Person_db.teachers, number) != null || Person_db.findByNumber(Person_db.students, number) != null) {
			System.out.println("该编号已存在");
			if (Person_db.isRetry()) {
				addPerson();
			} else {
				System.exit(0);
			}
		}
		System.out.println("请输入" + role.getName() + "姓名");
		String name = Person_db.sc.next();
		System.out.println("请输入" + role.getName() + "性别");
		String sex = Person_db.sc.next();
		System.out.println("请输入" + role.getName() + "年龄");
		int age = Person_db.sc.nextInt();
		Person_db.addPerson(role.getName().equals("老师") ? new Teacher(role, number, name, age, sex) : new Student(role, number, name, age, sex));
		if (Person_db.isRetry()) {
			showActions();
		} else {
			System.exit(0);
		}
	}
	
	/**
	 * 删除老师或学生
	 */
	public void removePerson() {
		System.out.println("要删除的角色：老师(1)，学生(2)");
		int type = Person_db.sc.nextInt();
		Role role = type == 1 ? Role.teacher : type == 2 ? Role.student : null;
		if (role == null) {
			System.out.println("不存在该角色类型");
			if (Person_db.isRetry()) {
				removePerson();
			} else {
				System.exit(0);
			}
		}
		System.out.println("请输入" + role.getName() + "编号");
		String number = Person_db.sc.next();
		if (Person_db.findByNumber(Person_db.teachers, number) == null && Person_db.findByNumber(Person_db.students, number) == null) {
			System.out.println("该编号不存在");
			if (Person_db.isRetry()) {
				removePerson();
			} else {
				System.exit(0);
			}
		}
		Person_db.removerPerson(role, number);
		if (Person_db.isRetry()) {
			showActions();
		} else {
			System.exit(0);
		}
	}
	
}
