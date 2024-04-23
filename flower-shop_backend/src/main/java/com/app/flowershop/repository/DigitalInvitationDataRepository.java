package com.app.flowershop.repository;

import com.app.flowershop.model.DigitalInvitationData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DigitalInvitationDataRepository extends JpaRepository<DigitalInvitationData, Long> {
    Optional<DigitalInvitationData> findByDigitalInvitationName(String digitalInvitationName);
    boolean existsByDigitalInvitationName(String digitalInvitationName);
}
