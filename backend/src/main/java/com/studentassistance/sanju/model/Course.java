package com.studentassistance.sanju.model;


import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "course")
public class Course {

    @Id
    @Column(nullable = false)
    private String courseId;

    @OneToMany(mappedBy = "course")
    private List<Enquiry> enquiries;

    @OneToMany(mappedBy = "coursee")
    private List<Payment> payments;

     @Column(nullable = false)
    private String courseName;

    @Column(nullable = false)
    private String description;
    
    @Column(nullable = true)
    private String image;


    @Column(nullable = false)
    private String duration;

    @Column(nullable = false)
    private String fee;

}
