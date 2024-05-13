package com.app.flowershop.model;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import lombok.Data;

import java.time.LocalDate;

@Embeddable
@Data
public class BuyerDetails {
    private String name;
    private String address;
    private String paymentOption;

    private LocalDate buyDate;
}