package list;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Test {
	public static void main(String[] args) {
		ArrayList<Order> orderList = new OrderList().getList();

		orderList.add(new Order(1, "20190625"));
		orderList.add(new Order(2, "20190619"));
		orderList.add(new Order(3, "20190628"));
		
		orderList.set(1, new Order(11, "12343112"));
		
//		System.out.println(orderList.get(0));
//		System.out.println(orderList.get(1));
//		System.out.println(orderList.get(2));
//		
//		System.out.println(orderList.remove(0));
		
//		orderList.clear();
		
//		for(Order order: orderList) {
//			System.out.println(order);
//		}
		
//		orderList.forEach(order -> System.out.println(order));
		
//		AddClass addCls = new AddClass();
//		addCls.start(new IAdd() {
//
//			@Override
//			public void add(int a, int b) {
//				// TODO 自动生成的方法存根
//				System.out.println(a + b);
//			}
//			
//		});
		
//		List<Integer> arr = new ArrayList<Integer>();
//		
//		addCls.start((a, b) -> {
//			System.out.println("结果是：" + (a + b));
//		});
//		
		FXClass<String> fx = new FXClass<String>();
		fx.test("abc");
		
		FXClass<Order> fx2 = new FXClass<Order>();
		fx2.test(new Order(123, "abc"));
		
		System.out.println(new A().show(new Order(705, "20190627")));
		
//		A ia = new A();
	
		List<String> arr2 = new LinkedList<String>();

		arr2.add("123");
		arr2.add("456");
		
		arr2.forEach(item -> System.out.print(item + ","));
	}
}
