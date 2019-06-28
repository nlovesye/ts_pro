package map_demo;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

public class Test {

	public static void main(String[] args) {
		// TODO 自动生成的方法存根
		HashMap<String,String> hashMap = new HashMap<String,String>();
		hashMap.put("name", "宝马");
		hashMap.put("title", "BMW");
		hashMap.put("price", "100w");

		System.out.println(hashMap.get("a") == null);
		System.out.println(hashMap.get("title"));
		show(hashMap);
		show2(hashMap);
		show3(hashMap);
		show4(hashMap);
		show5(hashMap);
	}
	
	public static void show(Map<?, ?> map) {
		Set<?> st = map.entrySet();
		Iterator<?> it = st.iterator();
		while(it.hasNext()) {
			Entry<?, ?> et = (Entry<?, ?>) it.next();
			System.out.println(et.getKey() + "," + et.getValue());
		}
		System.out.println("-------------------------------------");
	}
	
	public static void show2(Map<?,?> map) {
		for(Object key : map.keySet()) {
			System.out.println(map.get(key));
		}
		System.out.println("-------------------------------------");
	}
	
	public static void show3(Map<?, ?> map) {
		Set<?> st = map.entrySet();
		st.forEach(item -> {
			Entry<?, ?> et = (Entry<?, ?>) item;
			System.out.println(et.getKey() + ":" + et.getValue());
		});
		System.out.println("-------------------------------------");
	}
	
	public static void show4(Map<?,?> map) {
		Set<?> st = map.keySet();
		st.forEach(key -> {
			System.out.println(key + ":" + map.get(key));
		});
		System.out.println("-------------------------------------");
	}
	
	public static void show5(Map<?, ?> map) {
		map.forEach((key, val) -> {
			System.out.println(key + "->" + val);
		});
		System.out.println("-------------------------------------");
	}

}
