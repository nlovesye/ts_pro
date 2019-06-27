package instance;

public class DemoInstance {
	private final static DemoInstance demoInstance = new DemoInstance();
	
	private DemoInstance() {
		
	}

	public static DemoInstance getInstance() {
		return demoInstance;
	}
}
