package collections_demo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Test {

	public static void main(String[] args) {
		// TODO 自动生成的方法存根
		ArrayList<Integer> arr = new ArrayList<>();
		arr.add(1);
		arr.add(2);
		arr.add(3);
		arr.add(4);

		ArrayList<Order> arr2 = new ArrayList<>();
		arr2.add(new Order(123, "123454"));
		arr2.add(new Order(122, "12342"));
		arr2.add(new Order(124, "123451"));
		
		Collections.reverse(arr);

//		Collections.shuffle(arr);
		
		Collections.swap(arr, 0, 3);
		
		Collections.sort(arr2, new OrderComparator());

		show(arr);
		show(arr2);
	}
	
	public static void show(List<?> list) {
		list.forEach(item -> {
			System.out.println(item);
		});
	}

}
