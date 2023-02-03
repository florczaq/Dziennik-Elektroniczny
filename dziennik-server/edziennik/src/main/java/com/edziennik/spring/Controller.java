package com.edziennik.spring;


import com.edziennik.spring.database_objects.*;
import org.springframework.web.bind.annotation.*;
import com.edziennik.spring.enums.DniTygodnia;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Map;

@RestController
@CrossOrigin
public class Controller {

	DatabaseManager dbManager = new DatabaseManager();

	public Controller() throws SQLException, ClassNotFoundException {
	}

	@GetMapping("/student/{id}/grades")
	public ArrayList<Grade> getStudentGrades(@PathVariable String id) throws SQLException {
		return dbManager.getStudentGrades(id);
	}

	@GetMapping("/student/{id}/comments")
	public ArrayList<Comment> getStudentComments(@PathVariable String id) throws SQLException {
		return dbManager.getStudentComments(id);
	}

	@GetMapping("/student/{id}/info")
	public Student getStudentInfo(@PathVariable String id) throws SQLException {
		return dbManager.getStudentInfo(id);
	}

	@GetMapping("/school/news")
	public ArrayList<News> getNews() throws SQLException {
		return dbManager.getSchoolNews();
	}

	@GetMapping("/student/messages")
	public ArrayList<Message> getStudentMessages(@RequestParam(name = "c") String studentCode) throws SQLException {
		return dbManager.getStudentMessages(studentCode);
	}

	@PostMapping("/newMessage")
	public void sendNewMessage(@RequestBody Message message) {
		System.out.println(message.toString());
	}

	@PutMapping("/messages/read")
	public void changeMessageState(@RequestParam() String id) throws SQLException {
		System.out.printf("Message %s has been read.%n", id);
		dbManager.changeMessageStatus(id);
	}

	@GetMapping("/student/timetable")
	public ArrayList<Day> getStudentTimetable(@RequestParam() String classCode) {

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

	@GetMapping("/login")
	public Student validateLoginData(@RequestParam(name = "s") String studentCode, @RequestParam(name = "p") String password) {
		if (studentCode.equals("admin") && password.equals("admin"))
			return new Student("Mikołaj", "Florczak", "Adres 123", "000000000", "a@b.c", "4ig", "mikflo00");
		return null;
	}

	@GetMapping("/school/teachers")
	public Map<String, String> getListOfTeachers() throws SQLException {
		return dbManager.getListOfTeachers();
	}


}
