package com.edziennik.spring.enums;

public enum DniTygodnia {

	Pon("Poniedziałek"),
	Wt("Wtorek"),
	Sr("Środa"),
	Czw("Czwartek"),
	Pi("Piątek");

	public final String label;

	DniTygodnia(String label) {
		this.label = label;
	}

}
