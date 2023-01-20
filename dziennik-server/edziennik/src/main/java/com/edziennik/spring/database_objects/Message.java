package com.edziennik.spring.database_objects;

public class Message {
	String title;
	String from;
	String date;
	String content;
	Boolean read;

	public Message() {
	}

	public Message(String title, String from, String date, String content, Boolean read) {
		this.title = title;
		this.from = from;
		this.date = date;
		this.content = content;
		this.read = read;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
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

	public Boolean getRead() {
		return read;
	}

	public void setRead(Boolean read) {
		this.read = read;
	}
}
