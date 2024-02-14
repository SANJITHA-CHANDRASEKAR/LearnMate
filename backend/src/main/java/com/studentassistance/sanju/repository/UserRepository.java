package com.studentassistance.sanju.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studentassistance.sanju.model.User;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
}
