package com.edziennik.spring;


import com.edziennik.spring.database_objects.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@CrossOrigin
public class Controller {

	@GetMapping("/student/{id}/grades")
	public ArrayList<Grade> getStudentGrades(@PathVariable String id) {
		ArrayList<Grade> al = new ArrayList<>();
		al.add(new Grade("5", "2020-01-01", "Matematyka"));
		al.add(new Grade("5", "2020-01-01", "J. Polski"));
		al.add(new Grade("4", "2020-01-01", "J. Angielski"));
		al.add(new Grade("3", "2020-01-01", "Informatyka"));
		al.add(new Grade("2", "2020-01-01", "Matematyka"));
		return al;
	}

	@GetMapping("/student/{id}/comments")
	public ArrayList<Comment> getStudentComments(@PathVariable String id) {
		ArrayList<Comment> al = new ArrayList<>();
		al.add(new Comment("Ta uwaga jest pozytywna", "Zawartość pozytywnej uwagi", "2020-01-01", true));
		al.add(new Comment("Ta uwaga jest negatywna", "Zawartość negatywnej uwagi", "2020-01-01", false));
		return al;
	}

	@GetMapping("/student/{id}/info")
	public Student getStudentInfo(@PathVariable String id) {
		return new Student("Mikołaj", "Florczak", "Adres 123", "000000000", "email@example.com");
	}

	@GetMapping("/school/news")
	public ArrayList<News> getNews() {
		ArrayList<News> al = new ArrayList<>();
		al.add(new News("Tytul 1", "2020-01-01", "123 123 123 123 123 123 123 "));
		al.add(new News("Tytul 2", "2020-01-01", "456 123 123 123 123 123 123 "));
		al.add(new News("Tytul 3", "2020-01-01", "789 123 123 123 123 123 123 "));
		return al;
	}

	@GetMapping("/student/{id}/messages")
	public ArrayList<Message> getStudentMessages (@PathVariable String id){
		ArrayList<Message> al = new ArrayList<>();
		al.add(new Message("Tytul wiadomosci 1","abcabc00","2020-01-01","Ta wiadomość jest przeczytana",true));
		al.add(new Message("Tytul wiadomosci 2","bcabca00","2020-01-01","Ta wiadomość jest nieprzeczytana",false));
		return al;
	}

}
