package demo_hotel;

/**
 * 经理
 * @author Administrator
 *
 */
public class Manager extends Worker {
	private int reward;
	
	Manager() {
		
	}
	
	Manager(String name, int number, int reward) {
		super(name, number);
		// TODO 自动生成的构造函数存根
		this.reward = reward;
	}
	
	@Override
	public void work() {
		// TODO 自动生成的方法存根
		System.out.println("经理在上班！");
	}

	public int getReward() {
		return reward;
	}

	public void setReward(int reward) {
		this.reward = reward;
	}
	
	@Override
	public String toString() {
		return "经理:" + super.getName();
	}

}
