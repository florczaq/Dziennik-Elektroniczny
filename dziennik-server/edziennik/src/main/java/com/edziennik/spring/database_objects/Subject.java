package com.edziennik.spring.database_objects;

public class Subject {
	String name;
	int hour;

	public Subject() {
	}

	public Subject(String name, int hour) {
		this.name = name;
		this.hour = hour;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getHour() {
		return hour;
	}

	public void setHour(int hour) {
		this.hour = hour;
	}
}