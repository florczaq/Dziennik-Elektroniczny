package com.edziennik.spring;

import com.edziennik.spring.database_objects.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class DatabaseManager {
	private Connection connection = null;

	DatabaseManager() throws SQLException, ClassNotFoundException {
		Class.forName("com.mysql.cj.jdbc.Driver");

		connection = DriverManager.getConnection(
			"jdbc:mysql://localhost:3306/edziennik",
			"root",
			"root"
		);

		System.out.printf("\t%nConnection with database [%s] established. %n%n", connection.getCatalog());
	}

	public ArrayList<Grade> getStudentGrades(String id) throws SQLException {
		PreparedStatement preparedStatement = connection.prepareStatement(String.format("CALL `edziennik`.`getStudentGrades`(%s);", id));
		ResultSet resultSet = preparedStatement.executeQuery();
		ArrayList<Grade> grades = new ArrayList<>();

		while (resultSet.next())
			grades.add(new Grade(resultSet.getString(1), resultSet.getString(2), resultSet.getString(3)));

		return grades;
	}

	public ArrayList<Comment> getStudentComments(String id) throws SQLException {
		PreparedStatement preparedStatement = connection.prepareStatement(String.format("CALL `edziennik`.`getStudentComments`(%s);", id));
		ResultSet resultSet = preparedStatement.executeQuery();
		ArrayList<Comment> comments = new ArrayList<>();

		while (resultSet.next())
			comments.add(
				new Comment(
					resultSet.getString(1),
					resultSet.getString(2),
					resultSet.getString(3),
					resultSet.getBoolean(4)
				)
			);
		return comments;
	}

	public Student getStudentInfo(String id) throws SQLException {
		PreparedStatement preparedStatement = connection.prepareStatement(String.format("CALL `edziennik`.`getStudentInfo`(%s);", id));
		ResultSet resultSet = preparedStatement.executeQuery();

		if (resultSet.next()) {
			return new Student(
				resultSet.getString("imie"),
				resultSet.getString("nazwisko"),
				resultSet.getString("adres"),
				resultSet.getString("numer_telefonu"),
				resultSet.getString("email"),
				resultSet.getString("klasa"),
				resultSet.getString("kod")
			);
		}
		return new Student();
	}

	public ArrayList<News> getSchoolNews() throws SQLException {
		PreparedStatement preparedStatement = connection.prepareStatement("CALL `edziennik`.`getSchoolNews`();");
		ResultSet resultSet = preparedStatement.executeQuery();
		ArrayList<News> news = new ArrayList<>();

		while (resultSet.next())
			news.add(
				new News(
					resultSet.getString("tytul"),
					resultSet.getString("data"),
					resultSet.getString("opis"))
			);
		return news;
	}

	public ArrayList<Message> getStudentMessages(String receiverCode) throws SQLException {
		PreparedStatement preparedStatement = connection.prepareStatement(String.format("CALL `edziennik`.`getStudentMessages`('%s');", receiverCode));
		ResultSet resultSet = preparedStatement.executeQuery();

		ArrayList<Message> messages = new ArrayList<>();

		while (resultSet.next()) {
			messages.add(new Message(
					resultSet.getInt("id"),
					resultSet.getString("tytul"),
					resultSet.getString("kod_autora"),
					receiverCode,
					resultSet.getString("data"),
					resultSet.getString("tresc"),
					resultSet.getBoolean("odczytana")
				)
			);
		}

		return messages;
	}

	public Map<String, String> getListOfTeachers() throws SQLException {
		PreparedStatement preparedStatement = connection.prepareStatement("CALL `edziennik`.`getListOfTeachers`();");
		ResultSet resultSet = preparedStatement.executeQuery();
		Map<String, String> teachers = new HashMap<>();

		while (resultSet.next())
			teachers.put(resultSet.getString("kod"), resultSet.getString("name"));
		return teachers;
	}
}
