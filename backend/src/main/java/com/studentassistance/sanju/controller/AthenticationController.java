package com.studentassistance.sanju.controller;

import static com.studentassistance.sanju.Utils.MyConstant.AUTH;
import static com.studentassistance.sanju.Utils.MyConstant.LOGIN;
import static com.studentassistance.sanju.Utils.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentassistance.sanju.dto.request.LoginRequest;
import com.studentassistance.sanju.dto.request.RegisterRequest;
import com.studentassistance.sanju.dto.response.LoginResponse;
import com.studentassistance.sanju.dto.response.RegisterResponse;
import com.studentassistance.sanju.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor
public class AthenticationController {

private final AuthenticationService authenticationService;

    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request){
        RegisterResponse response = new RegisterResponse();
        try {
            response=authenticationService.register(request);
            return new ResponseEntity<>(response,ACCEPTED);

            
        } catch (Exception e) {
            response.setMessage("Something went wrong.");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse>  login(@RequestBody LoginRequest request){
        LoginResponse response = new LoginResponse();
        try {
            response = authenticationService.login(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
           response.setMessage("Something went worng");
           response.setToken("");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
}
