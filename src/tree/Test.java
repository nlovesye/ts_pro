package tree;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.TreeSet;

public class Test {

	public static void main(String[] args) {
		// TODO 自动生成的方法存根

//		TreeSet<Cat> treeList = new TreeSet<Cat>();
//		treeList.add(new Cat("小毛"));
//		treeList.add(new Cat("小黑"));
//		treeList.add(new Cat("小圆"));
////		
////		treeList.forEach(cat -> {
////			System.out.print(cat + ",");
////		});
//		
//		Iterator<Cat> it = treeList.iterator();
//		while(it.hasNext()) {
//			System.out.print(it.next() + ",");
//		}
		
		ArrayList<Cat2> arr = new ArrayList<>();
		arr.add(new Cat2("小毛"));
		arr.add(new Cat2("小黑"));
		arr.add(new Cat2("小圆"));
		
		Collections.sort(arr, new CatComparable());
		
		arr.forEach(cat -> {
			System.out.print(cat + ",");
		});
	}

}
