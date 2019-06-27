package game;

import java.util.Random;
import java.util.Scanner;

public class Game {
	private String[] arrows = {"↑", "↓", "←", "→", "j", "k"};
	private String[] keys = {"w", "s", "a", "d", "j", "k"};
	private long t;
	
	public void run() {
		int index = new Random().nextInt(5);
		System.out.println(this.arrows[index]);
		Scanner sc = new Scanner(System.in);
		String input = sc.nextLine();
		int targetIndex = getIndex(input);
		if (targetIndex == index) {
			run();
		} else {
			System.out.println("游戏结束，你太菜了!");
			System.exit(0);
		}
	}
	
	// 获取输入下标
	private int getIndex(String str) {
		for(int i = 0; i < keys.length; i++) {
			if(keys[i].equals(str)) {
				return i;
			}
		}
		return -1;
	}
	
	public void start() {
		System.out.println("----------游戏开始----------");
		this.setT(System.currentTimeMillis());
		run();
	}

	public long getT() {
		return t;
	}

	public void setT(long t) {
		this.t = t;
	}
}
