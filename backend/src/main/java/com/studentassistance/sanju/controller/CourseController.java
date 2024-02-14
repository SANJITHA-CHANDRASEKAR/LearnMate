package com.studentassistance.sanju.controller;

import static com.studentassistance.sanju.Utils.MyConstant.ADDCOURSE;
import static com.studentassistance.sanju.Utils.MyConstant.COURSELIST;
import static com.studentassistance.sanju.Utils.MyConstant.DELETECOURSE;
import static com.studentassistance.sanju.Utils.MyConstant.EDITCOURSE;
import static com.studentassistance.sanju.Utils.MyConstant.USER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentassistance.sanju.dto.request.CourseRequest;
import com.studentassistance.sanju.dto.response.BasicResponse;
import com.studentassistance.sanju.dto.response.RegisterResponse;
import com.studentassistance.sanju.service.CourseService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @PostMapping(ADDCOURSE)
         public ResponseEntity<RegisterResponse> addcourse(@RequestBody CourseRequest course){
        RegisterResponse response = new RegisterResponse();
        try {
            response =courseService.addCourse(course);
            return new ResponseEntity<>(response,ACCEPTED);

            
        } catch (Exception e) {
            response.setMessage("Something went wrong.");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

     @GetMapping(COURSELIST)
        public ResponseEntity<BasicResponse<CourseRequest>> create() {
            BasicResponse<CourseRequest> response = new BasicResponse<>();
            try {
                response = courseService.getAllCourse();
                return new ResponseEntity<>(response, OK);
            } catch (Exception e) {
                response.setMessage("Course :(  !!");
                return new ResponseEntity<>(response, EXPECTATION_FAILED);
            }
        }

        @PutMapping(EDITCOURSE)
        public ResponseEntity<RegisterResponse> editCourse(@PathVariable String courseId, @RequestBody CourseRequest courseRequest) {
            RegisterResponse response = courseService.editCourse(courseId, courseRequest);
            if (response.getMessage().equals("Course updated successfully")) {
                return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
            } else if (response.getMessage().equals("Course not found")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            } else {
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(response);
            }
        }
        

    @DeleteMapping(DELETECOURSE)
    public ResponseEntity<RegisterResponse> deleteCourse(@PathVariable String courseId) {
        RegisterResponse response = courseService.deleteCourse(courseId);
        if (response.getMessage().equals("Course deleted successfully")) {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
        } else if (response.getMessage().equals("Course not found")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(response);
        }
    }

    @GetMapping("/searchcourse/{searchString}")
    public ResponseEntity<BasicResponse<CourseRequest>> searchCourseByName(@PathVariable String searchString) {
    BasicResponse<CourseRequest> response = new BasicResponse<>();
    try {
        response = courseService.searchCourseByName(searchString);
        return new ResponseEntity<>(response, OK);
    } catch (Exception e) {
        response.setMessage("Error searching courses by name");
        return new ResponseEntity<>(response, EXPECTATION_FAILED);
    }
}


}