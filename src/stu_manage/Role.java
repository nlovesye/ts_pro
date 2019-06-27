package stu_manage;

public enum Role {
	teacher("老师"),
	student("学生"),
	admin("管理员");
	
	private String name;
	
	private Role(String name) {
		this.setName(name);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
