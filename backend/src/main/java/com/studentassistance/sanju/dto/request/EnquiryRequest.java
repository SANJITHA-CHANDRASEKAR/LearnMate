package com.studentassistance.sanju.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EnquiryRequest {
   
        private String userId;
        private String courseId;
        private String enquiry;
        private String email;

}