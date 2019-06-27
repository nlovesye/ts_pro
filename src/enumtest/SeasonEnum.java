package enumtest;

public enum SeasonEnum implements IColor {
	chun("春天") {
		@Override
		public void test() {
			// TODO 自动生成的方法存根
			
		}
	}, xia("夏天") {
		@Override
		public void test() {
			// TODO 自动生成的方法存根
			
		}
	}, qiu("秋天") {
		@Override
		public void test() {
			// TODO 自动生成的方法存根
			
		}
	}, dong("冬天") {
		@Override
		public void test() {
			// TODO 自动生成的方法存根
			
		}
	};
	
	private String name;

	private SeasonEnum(String name) {
		this.name = name;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public abstract void test();
	
	@Override
	public void show() {
		// TODO 自动生成的方法存根
		
	}
	
	public String toString() {
		return this.name;
	}
}
