package com.tech_prime_computers;

public class Computer {
    private final Number basePrice = 30;

    public Number finalPurchaseCost(){
        return basePrice + freedomCharges() + compressionLandCharges();
    }

    private Number freedomCharges() {

    }

    private Number compressionLandCharges() {
        return null;
    }
}
