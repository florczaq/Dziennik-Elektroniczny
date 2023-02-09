package com.edziennik.spring.database_objects;

public class Student {
	int id;
	String firstName;
	String lastName;
	String address;
	String phoneNumber;
	String email;
	String classCode;
	String studentCode;

	public Student() {
	}

	public Student(int id, String firstName, String lastName, String address, String phoneNumber, String email, String classCode, String studentCode)
	{
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.classCode = classCode;
		this.studentCode = studentCode;
	}

	@Override
	public String toString() {
		return "Student{" +
			"id=" + id +
			", firstName='" + firstName + '\'' +
			", lastName='" + lastName + '\'' +
			", address='" + address + '\'' +
			", phoneNumber='" + phoneNumber + '\'' +
			", email='" + email + '\'' +
			", classCode='" + classCode + '\'' +
			", studentCode='" + studentCode + '\'' +
			'}';
	}

	public String getStudentCode() {
		return studentCode;
	}

	public void setStudentCode(String studentCode) {
		this.studentCode = studentCode;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getClassCode() {
		return classCode;
	}

	public void setClassCode(String classCode) {
		this.classCode = classCode;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}
