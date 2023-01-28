package com.edziennik.spring;


import com.edziennik.spring.database_objects.*;
import org.springframework.web.bind.annotation.*;
import com.edziennik.spring.enums.DniTygodnia;

import java.util.ArrayList;


/**
 * TODO
 * Uwagi
 * Plan lekcji
 */


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
		al.add(new Grade("6", "2020-01-01", "HIS"));
		al.add(new Grade("6", "2020-01-01", "HIS"));
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
		for (int i = 1; i <= 30; i++)
			al.add(new News(String.format("Tytuł %s", i), "2020-01-01", "123 123 123 123 123 123 123 "));
		return al;
	}

	@GetMapping("/student/{id}/messages")
	public ArrayList<Message> getStudentMessages(@PathVariable String id) {
		ArrayList<Message> al = new ArrayList<>();
		for (int i = 1; i <= 30; i++)
			al.add(new Message(i, String.format("Tytuł wiadomości %S", i), "abcabc00", "mikflo00", "2020-01-01", "Ta wiadomość jest przeczytana", true));
		for (int i = 31; i <= 60; i++)
			al.add(new Message(i, String.format("Tytuł wiadomości %S", i), "bcabca00", "mikflo00", "2020-01-01", "Ta wiadomość jest nieprzeczytana", false));
		return al;
	}

	@PostMapping("/newMessage")
	public void sendNewMessage(@RequestBody Message message) {
		System.out.println(message.toString());
	}

	@PutMapping("/messages/read")
	public void changeMessageState(@RequestParam(required = true) String id) {
		System.out.printf("Message %s has been read.%n", id);
	}

	@GetMapping("/student/timetable")
	public ArrayList<Day> getStudentTimetable(@RequestParam(required = true) String classCode){

		ArrayList<Day> timetable = new ArrayList<>();
		ArrayList<Subject> subjects = new ArrayList<>();
		subjects.add(new Subject("HIS", 1));
		subjects.add(new Subject("Matematyka", 2));
		subjects.add(new Subject("Polski", 3));
		subjects.add(new Subject("Angielski", 4));

		timetable.add(new Day(DniTygodnia.Pon.label, subjects));
		timetable.add(new Day(DniTygodnia.Wt.label, subjects));
		timetable.add(new Day(DniTygodnia.Sr.label, subjects));
		timetable.add(new Day(DniTygodnia.Czw.label, subjects));
		timetable.add(new Day(DniTygodnia.Pi.label, subjects));


		return timetable;
	}

}
