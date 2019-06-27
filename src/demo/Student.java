package demo;
/**
 * 	一个学生
 * @author Administrator
 *
 */
public class Student extends Person {
	private int score;
	public int height = 172;
	Student() {
		super();
	}
	
	Student(String name, int age) {
		super(name, age);
		System.out.println("这是Student constructor:" + this.name);
	}
	
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	/**
	 * 	阅读
	 * name: 名字
	 * @param name
	 */
	public void read(String name) {
		System.out.println(name + "会阅读！");
	}
	
	@Override
	public void run() {
		// TODO 自动生成的方法存根
		super.run();
//		System.out.println("学生跑步");
	}
}
