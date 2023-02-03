package com.edziennik.spring.database_objects;

public class Teacher {
	String name, code;

	public Teacher() {
	}

	public Teacher(String name, String code) {
		this.name = name;
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	@Override
	public String toString() {
		return "Teacher{" +
			"name='" + name + '\'' +
			", code='" + code + '\'' +
			'}';
	}
}
