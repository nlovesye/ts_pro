package err;

public class CusException extends Exception {
	private String name;
	
	CusException() {
		
	}
	
	CusException(String name) {
		this.name = name;
	}
	
	CusException(String name, String message) {
//		this(name);
		super(message);
	}
}
