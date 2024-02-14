package com.studentassistance.sanju.service;

import com.studentassistance.sanju.dto.request.CourseRequest;
import com.studentassistance.sanju.dto.response.BasicResponse;
import com.studentassistance.sanju.dto.response.RegisterResponse;

public interface CourseService {
    BasicResponse<CourseRequest> getAllCourse();
    RegisterResponse addCourse(CourseRequest course);
    RegisterResponse editCourse(String courseId, CourseRequest course);
    RegisterResponse deleteCourse(String courseId);
    public BasicResponse<CourseRequest> searchCourseByName(String searchString);
}
