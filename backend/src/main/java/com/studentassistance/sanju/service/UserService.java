package com.studentassistance.sanju.service;

import com.studentassistance.sanju.dto.response.BasicResponse;
import com.studentassistance.sanju.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();
    public BasicResponse<String> deleteUser(String userId);
}
