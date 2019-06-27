package set_test;

import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;

public class Test {

	public static void main(String[] args) {
		// TODO 自动生成的方法存根
		
		HashSet<String> arr = new HashSet<String>();

		arr.add("2");
		arr.add("1");
		arr.add("3");
		
		show2(arr);

//		System.out.println("1".hashCode());
		
		LinkedHashSet<String> arr2 = new LinkedHashSet<String>();

		arr2.add("2");
		arr2.add("1");
		arr2.add("3");
		
		show2(arr2);
	}
	
	public static void show(Collection<?> list) {
		list.forEach(item -> {
			System.out.print(item + ",");
		});
		System.out.println();
		System.out.println("--------------------------");
	}
	
	public static void show2(Collection<?> list) {
		Iterator<?> it = list.iterator();
		while (it.hasNext()) {
			System.out.print(it.next() + ",");
		}
		System.out.println();
		System.out.println("--------------------------");
	}

}
