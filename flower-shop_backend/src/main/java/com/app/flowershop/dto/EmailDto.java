package com.app.flowershop.dto;

import lombok.Data;

@Data
public class EmailDto {
    private String to;
    private String subject;
    private String text;

    // getters and setters
}
