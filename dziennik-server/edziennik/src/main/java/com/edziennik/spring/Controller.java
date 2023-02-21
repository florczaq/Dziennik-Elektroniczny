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

	@GetMapping("/messages")
	public ArrayList<Message> getStudentMessages(@RequestParam(name = "c") String studentCode) throws SQLException {
		return dbManager.getStudentMessages(studentCode);
	}

	@PostMapping("/messages/new")
	public void sendNewMessage(@RequestBody Message message) throws SQLException {
		dbManager.sendNewMessage(message);
	}

	@PutMapping("/messages/read")
	public void changeMessageState(@RequestParam() String id) throws SQLException {
		dbManager.changeMessageStatus(id);
	}

	@GetMapping("/student/timetable")
	public ArrayList<Day> getStudentTimetable(@RequestParam() String classCode) throws SQLException {
		return dbManager.getTimetable(classCode);
	}

	// TODO: 14.02.2023 Login system  
	@GetMapping("/login")
	public Student validateLoginData(@RequestParam(name = "s") String studentCode, @RequestParam(name = "p") String password) throws SQLException {
		return dbManager.loginStudent(studentCode, password);
	}

	@GetMapping("/school/teachers")
	public Map<String, String> getListOfTeachers() throws SQLException {
		return dbManager.getListOfTeachers();
	}


}
