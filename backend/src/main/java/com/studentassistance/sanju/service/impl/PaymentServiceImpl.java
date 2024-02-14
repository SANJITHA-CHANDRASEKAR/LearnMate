package com.studentassistance.sanju.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.studentassistance.sanju.dto.request.PaymentRequest;
import com.studentassistance.sanju.dto.response.BasicResponse;
import com.studentassistance.sanju.dto.response.PaymentResponse;
import com.studentassistance.sanju.dto.response.RegisterResponse;
import com.studentassistance.sanju.model.Course;
import com.studentassistance.sanju.model.Payment;
import com.studentassistance.sanju.model.User;
import com.studentassistance.sanju.repository.PaymentRepository;
import com.studentassistance.sanju.service.PaymentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

     private final PaymentRepository paymentRepository;

    @Override
    public BasicResponse<PaymentResponse> getAllPayment() {
        List<Payment> payments =  paymentRepository.findAll();
        List<PaymentResponse> paymentRequests = payments.stream()
                .map(payment -> PaymentResponse.builder()
                    .courseId(payment.getCoursee().getCourseId())
                    .userId(payment.getUserr().getId())
                    .paymentId(payment.getPaymentId())
                    .payment(payment.getPayment())
                    .paymentType(payment.getPaymentType())
                    .build())
                .collect(Collectors.toList());
        return BasicResponse.<PaymentResponse>builder()
                .message("Enquiries data fetched successfully")
                .data(paymentRequests)
                .build();
    }

    @Override
    public RegisterResponse addPayment(PaymentRequest paymentRequest) {
        Payment payment = Payment.builder()
                .paymentId(paymentRequest.getPaymentId())
                .userr(User.builder().id(paymentRequest.getUserId()).build()) // Assuming User is imported and has a builder method
                .coursee(Course.builder().courseId(paymentRequest.getCourseId()).build()) // Assuming Course is imported and has a builder method
                .payment(paymentRequest.getPayment())
                .paymentType(paymentRequest.getPaymentType())
                .build();
        paymentRepository.save(payment);
        return RegisterResponse.builder()
                .message("Payment added successfully")
                .build();
    }

}
