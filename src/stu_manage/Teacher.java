package stu_manage;

public class Teacher extends Person implements IActions {

	public Teacher() {
		super();
		// TODO 自动生成的构造函数存根
	}

	public Teacher(Role role, String number, String name, int age, String sex) {
		super(role, number, name, age, sex);
		// TODO 自动生成的构造函数存根
	}

	@Override
	public void showActions() {
		// TODO 自动生成的方法存根
		System.out.println("可进行操作如下");
		System.out.println("A:修改学生成绩\nB:查看学生成绩");
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
	 * 修改学生成绩
	 */
	public void actionA() {
		System.out.println("输入要修改的学生编号");
		String number = Person_db.sc.next();
		Student st = (Student)Person_db.findByNumber(Person_db.students, number);
		if (st == null) {
			if (Person_db.isRetry()) {
				actionA();
			} else {
				System.exit(0);
			}
		}
		System.out.println("输入语文成绩");
		int chinese = Person_db.sc.nextInt();
		System.out.println("输入数学成绩");
		int math = Person_db.sc.nextInt();
		System.out.println("输入英语成绩");
		int english = Person_db.sc.nextInt();
		st.setChinese(chinese);
		st.setMath(math);
		st.setEnglish(english);
		System.out.println("修改成功");
		Person_db.showStudents();
		if (Person_db.isRetry()) {
			showActions();
		} else {
			System.exit(0);
		}
	}
	
	/**
	 * 查看学生成绩
	 */
	public void actionB() {
		Person_db.showStudents();
		if (Person_db.isRetry()) {
			showActions();
		} else {
			System.exit(0);
		}
	}

}
