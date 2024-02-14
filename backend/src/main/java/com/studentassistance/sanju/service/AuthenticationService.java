package com.studentassistance.sanju.service;

import com.studentassistance.sanju.dto.request.LoginRequest;
import com.studentassistance.sanju.dto.request.RegisterRequest;
import com.studentassistance.sanju.dto.response.LoginResponse;
import com.studentassistance.sanju.dto.response.RegisterResponse;

public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

}
