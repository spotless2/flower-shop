package com.app.flowershop.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "`order`")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productName;
    private Long quantity;
    private Double price;
    @Embedded
    private BuyerDetails buyerDetails;
}