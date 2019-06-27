package demo;
/**
 * 人类
 * @author Administrator
 *	@param age, name, sex
 */
public class Person {
	public String name;
	private int age;
	private char sex;
	public int height = 190;
	
	Person() {
		
	}
	
	Person(String name, int age) {
		this.name = name;
		this.age = age;
		System.out.println("这是Person constructor:" + this.name);
	}
	
	{
		System.out.println("这是Person:" + this.name);
	}
	
	public char getSex() {
		return sex;
	}

	public void setSex(char sex) {
		this.sex = sex;
	}

	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void run() {
		System.out.println(this.name + "会跑");
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
}
