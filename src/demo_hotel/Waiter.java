package demo_hotel;

/**
 * 服务员
 * @author Administrator
 *
 */
public class Waiter extends Worker implements IVip {

	Waiter() {
		
	}
	
	Waiter(String name, int number) {
		super(name, number);
		// TODO 自动生成的构造函数存根
	}

	@Override
	public void work() {
		// TODO 自动生成的方法存根
		System.out.println("服务员在上班！");
	}
	
	@Override
	public void service() {
		// TODO 自动生成的方法存根
		System.out.println("服务员vip服务：倒酒！");
	}

	@Override
	public String toString() {
		return "服务员:" + super.getName();
	}

}
