package com.edziennik.spring.database_objects;

public class News {
	String title;
	String date;
	String content;

	public News(String title, String date, String content) {
		this.title = title;
		this.date = date;
		this.content = content;
	}

	public News() {
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
}
