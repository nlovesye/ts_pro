package stu_manage;

public class Test {

	public static void main(String[] args) {
		// TODO 自动生成的方法存根
		Person_db db = new Person_db();
		db.start();
		run();
	}

	static void run() {
		System.out.println("请输入登录编号：");
		String number = Person_db.sc.next();
		Person_db.user = new Person().login(number);
		if (Person_db.user == null) {
			System.out.println("不存在的编号");
			if (Person_db.isRetry()) {
				run();
			} else {
				System.exit(0);
			}
		}
		if (Person_db.user.getRole() == Role.teacher) {
			((Teacher)Person_db.user).showActions();
		} else if (Person_db.user.getRole() == Role.student) {
			((Student)Person_db.user).showActions();
		} else if (Person_db.user.getRole() == Role.admin) {
			((Admin)Person_db.user).showActions();
		}
	}

}
