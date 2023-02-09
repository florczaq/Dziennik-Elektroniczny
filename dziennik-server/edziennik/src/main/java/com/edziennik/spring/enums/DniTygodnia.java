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

	public String getDayByNumber(int number) {
		return switch (number) {
			case 1 -> Pon.label;
			case 2 -> Wt.label;
			case 3 -> Sr.label;
			case 4 -> Czw.label;
			case 5 -> Pi.label;
			default -> "";
		};
	}
}
