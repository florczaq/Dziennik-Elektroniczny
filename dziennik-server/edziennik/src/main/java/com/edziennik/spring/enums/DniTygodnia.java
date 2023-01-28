package com.edziennik.spring.enums;

public enum DniTygodnia {

	Pon("Poniedziałek", 1),
	Wt("Wtorek", 2),
	Sr("Środa", 3),
	Czw("Czwartek", 4),
	Pi("Piątek", 5);

	public final String label;
	public final int numberOfDay;

	DniTygodnia(String label, int numberOfDay){
		this.label = label;
		this.numberOfDay = numberOfDay;
	}
}
