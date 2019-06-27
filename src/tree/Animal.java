package tree;

public class Animal implements Comparable<Animal> {
	private String name;

	Animal (String name) {
		this.name = name;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public int compareTo(Animal arg0) {
		// TODO 自动生成的方法存根
//		System.out.println(arg0);
		return 1;
	}
}
