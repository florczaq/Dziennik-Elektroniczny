package com.edziennik.spring.database_objects;

public class Message {
	int id;
	String title;
	String from;
	String to;
	String date;
	String content;
	Boolean read = false;

	public Message() {
	}

	public Message(int id, String title, String from, String to, String date, String content, Boolean read) {
		this.id = id;
		this.title = title;
		this.from = from;
		this.to = to;
		this.date = date;
		this.content = content;
		this.read = read;

	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Message{" +
			"id=" + id +
			", title='" + title + '\'' +
			", from='" + from + '\'' +
			", to='" + to + '\'' +
			", date='" + date + '\'' +
			", content='" + content + '\'' +
			", read=" + read +
			'}';
	}
}
