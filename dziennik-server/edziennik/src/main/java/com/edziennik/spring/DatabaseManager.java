package com.edziennik.spring;

import java.sql.*;

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

}
