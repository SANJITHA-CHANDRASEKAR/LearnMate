package com.studentassistance.sanju.service.impl;


import static com.studentassistance.sanju.enumerated.Role.USER;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.studentassistance.sanju.Utils.JwtUtil;
import com.studentassistance.sanju.dto.request.LoginRequest;
import com.studentassistance.sanju.dto.request.RegisterRequest;
import com.studentassistance.sanju.dto.response.LoginResponse;
import com.studentassistance.sanju.dto.response.RegisterResponse;
import com.studentassistance.sanju.model.User;
import com.studentassistance.sanju.repository.UserRepository;
import com.studentassistance.sanju.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class AuthenticationServiceImpl implements AuthenticationService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    @Override
    public RegisterResponse register(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if(isUserExists.isPresent())
        {
            return RegisterResponse.builder().message("User with mail id "+request.getEmail()+" is already exists!")
            .build();
        }
        var user = User.builder()
            .username(request.getUsername())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(USER)
            .Address(request.getAddress())
            .phoneNumber(request.getPhoneNumber())
            .build();
        userRepository.save(user);
        return RegisterResponse.builder()
            .message("User created successfully")
            .build();
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("id",user.getId());
        extraClaims.put("role", user.getRole());
        var token = jwtUtil.generateToken(user);
        return LoginResponse.builder()
            .message("User Logged in successfully!")
            .token(token)
            .build();
    }
}