package list;

public class Order {
	private int id;
	private String number;
	
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	Order(int id, String number) {
		this.id = id;
		this.number = number;
	}
	@Override
	public String toString() {
		// TODO 自动生成的方法存根
		return "ID：" + this.id + "，订单号：" + this.number;
	}
}
