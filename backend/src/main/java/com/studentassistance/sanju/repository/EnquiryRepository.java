package com.studentassistance.sanju.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studentassistance.sanju.model.Enquiry;

public interface EnquiryRepository extends JpaRepository<Enquiry, String> {

}
