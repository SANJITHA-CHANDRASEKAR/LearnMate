package com.studentassistance.sanju.service;

import com.studentassistance.sanju.dto.request.PaymentRequest;
import com.studentassistance.sanju.dto.response.BasicResponse;
import com.studentassistance.sanju.dto.response.PaymentResponse;
import com.studentassistance.sanju.dto.response.RegisterResponse;

public interface PaymentService {

    public BasicResponse<PaymentResponse> getAllPayment();
    public RegisterResponse addPayment(PaymentRequest paymentRequest);

}
