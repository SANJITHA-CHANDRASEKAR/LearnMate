package com.studentassistance.sanju.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "payment")
public class Payment {

    @Id
    private String paymentId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = true)
    private User userr;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = true)
    private Course coursee;


    @Column(nullable = false)
    private String payment;

    @Column(nullable = false)
    private String paymentType;


}
