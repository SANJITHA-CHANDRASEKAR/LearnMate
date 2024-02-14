package com.studentassistance.sanju.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.studentassistance.sanju.enumerated.Role;
import com.studentassistance.sanju.model.User;
import com.studentassistance.sanju.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
       if(userRepository.count() > 0){
        return;
       }
       var user = User.builder()
       .username("Admin")
       .email("sanju@gmail.com")
       .password(passwordEncoder.encode("Admin@123"))
       .role(Role.ADMIN)
       .build();
       userRepository.save(user);
    }

}
