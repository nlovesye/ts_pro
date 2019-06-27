package list;

import java.util.Scanner;

public class AddClass {
	public void start(IAdd add) {
		Scanner sc = new Scanner(System.in);
		System.out.println("请输入第一个数：");
		int a = sc.nextInt();
		System.out.println("请输入第二个数：");
		int b = sc.nextInt();
		add.add(a, b);
	}
}
