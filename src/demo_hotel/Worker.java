package demo_hotel;

/**
 * 员工类
 * @author Administrator
 *	@param name 姓名
 *	@param number 工号
 */
public abstract class Worker {
	private String name;
	private int number;
	private static String type = "员工";
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	Worker() {
		
	}
	
	Worker(String name, int number) {
		this.name = name;
		this.number = number;
	}
	
	public abstract void work();

	@Override
	public String toString() {
		return this.name + "(" + this.number + ")";
	}

	public static String getType() {
		return type;
	}

	public static void setType(String type) {
		Worker.type = type;
	}
	
	
}
