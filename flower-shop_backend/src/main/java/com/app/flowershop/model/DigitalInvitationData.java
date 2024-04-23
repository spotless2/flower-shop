package com.app.flowershop.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    @NotEmpty
    private String civilAddress;
    @NotEmpty
    private String civilCityCountry;
    @NotEmpty
    private String civilHour;
    @NotNull
    private LocalDate civilDate;
    @NotEmpty
    private String civilLocationName;
    @NotEmpty
    private String religiousAddress;
    @NotEmpty
    private String religiousCityCountry;
    @NotEmpty
    private String religiousHour;
    @NotNull
    private LocalDate religiousDate;
    @NotEmpty
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
