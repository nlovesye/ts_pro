package tree;

public class Cat2 {
	private String name;
	
	Cat2(String name) {
		// TODO 自动生成的构造函数存根
		this.setName(name);
	}

	@Override
	public String toString() {
		// TODO 自动生成的方法存根
		return "猫：" + this.getName();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
