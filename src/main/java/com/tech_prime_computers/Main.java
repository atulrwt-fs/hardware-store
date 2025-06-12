package com.tech_prime_computers;

public class Main {

    public static void main(String[] args) {
        String led = "LED";
        String ddr = "DDR";
        Number price = MotherBoard.valueOf(led).getPrice();
        System.out.println(price);
    }
}
