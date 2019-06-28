package stu_manage;

public class Student extends Person implements IActions {
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
	
	@Override
	public String toString() {
		return "[角色：" + super.getRole().getName() + ", 编号：" + super.getNumber() + ", 姓名：" + super.getName() + ", 年龄：" + super.getAge() + ", 性别：" + super.getSex() + ", 语文成绩：" + this.getChinese() + ", 数学成绩：" + this.getMath() + ", 英语成绩：" + this.getEnglish() + "]";
	}
	
	@Override
	public void showActions() {
		// TODO 自动生成的方法存根
		System.out.println("可进行操作如下");
		System.out.println("A:修改信息\nB:查看信息");
		String action = Person_db.sc.next();
		if (action.equalsIgnoreCase("A")) {
			actionA();
		} else if (action.equalsIgnoreCase("B")) {
			actionB();
		} else {
			if (Person_db.isRetry()) {
				showActions();
			} else {
				System.exit(0);
			}
		}
	}
	
	/**
	 * 修改信息
	 */
	public void actionA() {
		System.out.println("输入姓名");
		String name = Person_db.sc.next();
		System.out.println("输入年龄");
		int age = Person_db.sc.nextInt();
		System.out.println("输入性别");
		String sex = Person_db.sc.next();
		((Student)Person_db.user).setName(name);
		((Student)Person_db.user).setAge(age);
		((Student)Person_db.user).setSex(sex);
		System.out.println("修改成功");
		System.out.println(Person_db.user);
		if (Person_db.isRetry()) {
			showActions();
		} else {
			System.exit(0);
		}
	}
	
	/**
	 * 查看信息
	 */
	public void actionB() {
		System.out.println(Person_db.user);
		if (Person_db.isRetry()) {
			showActions();
		} else {
			System.exit(0);
		}
	}
	
}
