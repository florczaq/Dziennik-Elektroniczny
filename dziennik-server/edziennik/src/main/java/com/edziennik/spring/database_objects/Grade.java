package com.edziennik.spring.database_objects;

public class Grade {
	String value;
	String date;
	String Subject;

	public Grade() {
	}

	public Grade(String value, String date, String subject) {
		this.value = value;
		this.date = date;
		Subject = subject;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getSubject() {
		return Subject;
	}

	public void setSubject(String subject) {
		Subject = subject;
	}
}
