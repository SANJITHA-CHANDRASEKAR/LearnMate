package com.studentassistance.sanju.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studentassistance.sanju.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment,String> {

}
