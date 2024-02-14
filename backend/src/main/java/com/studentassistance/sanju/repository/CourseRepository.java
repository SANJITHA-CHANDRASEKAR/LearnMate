package com.studentassistance.sanju.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studentassistance.sanju.model.Course;

public interface CourseRepository extends JpaRepository<Course,String>{

}
