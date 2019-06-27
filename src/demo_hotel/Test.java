package demo_hotel;

import java.util.Random;

public class Test {
	public static void main(String[] args) {
		Manager m = new Manager("毛子", 1, 1200);
		Cooker ck = new Cooker("三治", 2);
		Waiter lf = new Waiter("路飞", 10);
		Waiter wsp = new Waiter("污索普", 11);
		
		Worker[] wks = {m, ck, lf, wsp};
		
		Worker wk = getLuck(wks, new Random().nextInt(wks.length - 1));
		
		System.out.println("今天的幸运员工是：" + wk);
		
		System.out.println("--------------------------------");

		m.work();
		ck.work();
		ck.service();
		lf.work();
		lf.service();
		wsp.work();
		wsp.service();
	}
	
	public static Worker getLuck(Worker[] wks, int index) {
		return wks[index];
	}
}
