package com.studentassistance.sanju.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentRequest {

    private String paymentId;
    private String userId;
    private String courseId;
    private String payment;
    private String paymentType;


}
