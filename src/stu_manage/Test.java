package stu_manage;

public class Test {

	public static void main(String[] args) {
		// TODO 自动生成的方法存根
		
//		System.out.println(Person_db.admins);

		Person_db.showAdmins();
		Person_db.showTeachers();
		Person_db.showStudents();
		Person_db db = new Person_db();
		db.start();
	}

}
