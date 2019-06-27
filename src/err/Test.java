package err;

import java.util.Random;

public class Test {

	public static void main(String[] args) throws CusException {
		// TODO 自动生成的方法存根
		hello();
	}
	
	public static void hello() throws CusException {
		int a = new Random().nextInt(100);
		if (a > 50) {
			throw new CusException("xxx", "大于50!");
		} else {
			throw new CusException("xxx", "小于或等于50!");	
		}
	}

}
