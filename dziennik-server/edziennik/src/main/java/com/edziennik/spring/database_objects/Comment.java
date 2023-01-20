package com.edziennik.spring.database_objects;

public class Comment {
	String title;
	String content;
	String date;
	Boolean positive;

	public Comment(String title, String content, String date, Boolean positive) {
		this.title = title;
		this.content = content;
		this.date = date;
		this.positive = positive;
	}

	public Comment() {
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Boolean getPositive() {
		return positive;
	}

	public void setPositive(Boolean positive) {
		this.positive = positive;
	}
}
