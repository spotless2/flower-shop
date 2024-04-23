package com.app.flowershop.service;

import com.app.flowershop.model.DigitalInvitationData;
import com.app.flowershop.repository.DigitalInvitationDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DigitalInvitationDataService {

    private final DigitalInvitationDataRepository digitalInvitationDataRepository;

    @Autowired
    public DigitalInvitationDataService(DigitalInvitationDataRepository digitalInvitationDataRepository) {
        this.digitalInvitationDataRepository = digitalInvitationDataRepository;
    }

    public DigitalInvitationData saveData(DigitalInvitationData digitalInvitationData) {
        return digitalInvitationDataRepository.save(digitalInvitationData);
    }

    public List<DigitalInvitationData> getAllData() {
        return digitalInvitationDataRepository.findAll();
    }

    public Optional<DigitalInvitationData> findByDigitalInvitationName(String digitalInvitationName) {
        return digitalInvitationDataRepository.findByDigitalInvitationName(digitalInvitationName);
    }

    public boolean isDigitalInvitationNameAvailable(String digitalInvitationName) {
        return !digitalInvitationDataRepository.existsByDigitalInvitationName(digitalInvitationName);
    }
}
