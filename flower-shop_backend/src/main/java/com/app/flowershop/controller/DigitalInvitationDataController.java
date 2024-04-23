package com.app.flowershop.controller;

import com.app.flowershop.model.DigitalInvitationData;
import com.app.flowershop.service.DigitalInvitationDataService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@Validated
public class DigitalInvitationDataController {

    private final DigitalInvitationDataService digitalInvitationDataService;

    @Autowired
    public DigitalInvitationDataController(DigitalInvitationDataService digitalInvitationDataService) {
        this.digitalInvitationDataService = digitalInvitationDataService;
    }

    @PostMapping("/saveData")
    public ResponseEntity<?> saveData(@Valid @RequestBody DigitalInvitationData digitalInvitationData, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            StringBuilder errorMessage = new StringBuilder();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errorMessage.append("Error in field: ");
                errorMessage.append(error.getField());
                errorMessage.append(", ");
                errorMessage.append(error.getDefaultMessage());
                errorMessage.append(". ");
            }
            return new ResponseEntity<>(errorMessage.toString(), HttpStatus.BAD_REQUEST);
        }
        if (!digitalInvitationDataService.isDigitalInvitationNameAvailable(digitalInvitationData.getDigitalInvitationName())) {
            return new ResponseEntity<>("Name already exists", HttpStatus.BAD_REQUEST);
        }

        try {
            DigitalInvitationData saveData = digitalInvitationDataService.saveData(digitalInvitationData);
            return new ResponseEntity<>(saveData, HttpStatus.CREATED);
        }
        catch (Exception e) {
            return new ResponseEntity<>("Error saving data", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getAllData")
    public ResponseEntity<?> getAllData() {
        try {
            return new ResponseEntity<>(digitalInvitationDataService.getAllData(), HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>("Error getting data", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getData/{digitalInvitationName}")
    public ResponseEntity<?> getDataByDigitalInvitationName(@PathVariable String digitalInvitationName) {
        try {
            Optional<DigitalInvitationData> data = digitalInvitationDataService.findByDigitalInvitationName(digitalInvitationName);
            if (data.isPresent()) {
                return new ResponseEntity<>(data.get(), HttpStatus.OK);
            }
            return new ResponseEntity<>("Data not found", HttpStatus.NOT_FOUND);
        }
        catch (Exception e) {
            return new ResponseEntity<>("Error getting data", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/checkNameAvailability/{digitalInvitationName}")
    public ResponseEntity<String> checkNameAvailability(@PathVariable String digitalInvitationName) {
        boolean isAvailable = digitalInvitationDataService.isDigitalInvitationNameAvailable(digitalInvitationName);
        if (isAvailable) {
            return new ResponseEntity<>("Name is available", HttpStatus.OK);
        }
        return new ResponseEntity<>("Name is not available", HttpStatus.CONFLICT);
    }
}
