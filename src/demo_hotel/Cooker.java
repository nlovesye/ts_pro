package demo_hotel;

/**
 * 厨师
 * @author Administrator
 *
 */
public class Cooker extends Worker implements IVip {

	Cooker() {
		
	}
	
	Cooker(String name, int number) {
		super(name, number);
		// TODO 自动生成的构造函数存根
	}
	
	@Override
	public void work() {
		// TODO 自动生成的方法存根
		System.out.println("厨师在上班！");
	}

	@Override
	public void service() {
		// TODO 自动生成的方法存根
		System.out.println("厨师vip服务：加菜！");
	}
	
	@Override
	public String toString() {
		return "厨师:" + super.getName();
	}

}
