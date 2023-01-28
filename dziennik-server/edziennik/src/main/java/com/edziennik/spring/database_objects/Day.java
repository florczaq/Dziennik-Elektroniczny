package com.edziennik.spring.database_objects;

import java.util.ArrayList;

public class Day {
	String name;
	ArrayList<Subject> subjects;

	public Day(String name, ArrayList<Subject> subjects) {
		this.name = name;
		this.subjects = subjects;
	}

	public Day() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public ArrayList<Subject> getSubjects() {
		return subjects;
	}

	public void setSubjects(ArrayList<Subject> subjects) {
		this.subjects = subjects;
	}
}



/**
 * SELECT p.nazwa, dzien, godzina FROM plan_lekcji INNER JOIN przedmioty as p ON p.id = przedmiot_id WHERE klasa = "4ig" ORDER BY dzien, godzina;
 */