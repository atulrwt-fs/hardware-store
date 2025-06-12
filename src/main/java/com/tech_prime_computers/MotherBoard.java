package com.tech_prime_computers;

public enum MotherBoard {
    BASEPRICE(200),
    LED(50),
    DDR(200);

    private final int price;

    MotherBoard(int price) {
        this.price = price;
    }

    public Number getPrice() {
        return price;
    }

    public int add(MotherBoard... addons) {
        int total = 0;
        for (MotherBoard addon : addons) {
            total += addon.price;
        }

        return total;
    }
}
