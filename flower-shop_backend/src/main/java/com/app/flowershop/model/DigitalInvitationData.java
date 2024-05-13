package com.app.flowershop.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@Data
public class DigitalInvitationData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    private String digitalInvitationName;
    @NotEmpty
    private String weedingDate;
    @NotEmpty
    private String email;
    @NotEmpty
    private String brideFirstName;
    @NotEmpty
    private String brideLastName;
    @NotEmpty
    private String brideDescription;
    private String bridePhoto;
    @NotEmpty
    private String groomFirstName;
    @NotEmpty
    private String groomLastName;
    @NotEmpty
    private String groomDescription;
    private String groomPhoto;
    @NotEmpty
    private String parentsName;
    @NotEmpty
    private String godparentsName;
    @Column(nullable = true)

    private String civilAddress;
    @Column(nullable = true)
    private String civilCityCountry;
    @Column(nullable = true)
    private String civilHour;
    @Column(nullable = true)
    private LocalDate civilDate;
    @Column(nullable = true)
    private String civilLocationName;
    @Column(nullable = true)
    private String religiousAddress;
    @Column(nullable = true)
    private String religiousCityCountry;
    @Column(nullable = true)
    private String religiousHour;
    @Column(nullable = true)
    private LocalDate religiousDate;
    @Column(nullable = true)
    private String religiousLocationName;
    @NotEmpty
    private String partyAddress;
    @NotEmpty
    private String partyCityCountry;
    @NotEmpty
    private String partyHour;
    @NotNull
    private LocalDate partyDate;
    @NotEmpty
    private String partyLocationName;
}
