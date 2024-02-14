package com.studentassistance.sanju.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.studentassistance.sanju.dto.response.BasicResponse;
import com.studentassistance.sanju.dto.response.UserResponse;
import com.studentassistance.sanju.model.User;
import com.studentassistance.sanju.repository.UserRepository;
import com.studentassistance.sanju.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public BasicResponse<UserResponse> getAllUser(){
        List<User> users = userRepository.findAll();
        List<UserResponse> userResponses = users.stream().map(user-> UserResponse.builder()
            .id(user.getId())
            .username(user.getUsername())
            .email(user.getEmail())
            .phoneNumber((user.getPhoneNumber() != null) ? user.getPhoneNumber() : Long.valueOf(0))
            .Address(user.getAddress())
            .role(user.getRole())
            .build())
            .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder()
            .message("User data fetched successfully!!!")
            .data(userResponses)
            .build();
    }

    @Override
    public BasicResponse<String> deleteUser(String userId) {
    BasicResponse<String> response = new BasicResponse<>();
    try {
        userRepository.deleteById(userId);
        response.setMessage("User deleted successfully");
        return response;
    } catch (Exception e) {
        response.setMessage("Failed to delete user");
        return response;
    }
}


}
