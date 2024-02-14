package com.studentassistance.sanju.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CourseRequest {

    private String courseId;
    private String courseName;
    private String description;
    private String duration;
    private String fee;
    private String image;

}
