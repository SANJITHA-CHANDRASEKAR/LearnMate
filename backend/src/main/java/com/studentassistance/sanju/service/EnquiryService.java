package com.studentassistance.sanju.service;

import com.studentassistance.sanju.dto.request.EnquiryRequest;
import com.studentassistance.sanju.dto.response.BasicResponse;
import com.studentassistance.sanju.dto.response.EnquiryResponse;
import com.studentassistance.sanju.dto.response.RegisterResponse;

public interface EnquiryService {
    public BasicResponse<EnquiryResponse> getAllEnquiries();
    public RegisterResponse addEnquiry(EnquiryRequest enquiryRequest);
    RegisterResponse deleteEnquiry(String enquiryId);
    public RegisterResponse editEnquiry(String enquiryId, EnquiryRequest enquiryRequest);


}
