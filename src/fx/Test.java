package fx;

import java.util.ArrayList;
import java.util.List;

public class Test {

	public static void main(String[] args) {
		// TODO 自动生成的方法存根
		List<String> list1 = new ArrayList<String>();
		list1.add("小明");
		list1.add("小红");
		list1.add("小花");
		
		List<Cat> list2 = new ArrayList<Cat>();
		list2.add(new Cat("小黑"));
		list2.add(new Cat("小点"));
		list2.add(new Cat("小毛"));
		
		List<Animal> list3 = new ArrayList<Animal>();
		list3.add(new Animal("小黑"));
		list3.add(new Animal("小点"));
		list3.add(new Animal("小毛"));
		
		show(list2);

		System.out.println();
		System.out.println("---------------");
		
		show2(list3);
	}
	
	public static void show(List<? extends Animal> list) {
		list.forEach(item -> {
			System.out.print(item + ",");
		});
	}
	
	public static void show2(List<? super Cat> list) {
		list.forEach(item -> {
			System.out.print(item + ",");
		});
	}

}
