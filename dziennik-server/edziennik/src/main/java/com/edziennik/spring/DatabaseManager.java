package com.edziennik.spring;

import com.edziennik.spring.database_objects.Grade;

import java.sql.*;
import java.util.ArrayList;

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

}
