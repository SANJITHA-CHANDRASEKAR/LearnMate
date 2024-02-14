package com.studentassistance.sanju.Utils;

import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.HEAD;
import static org.springframework.http.HttpMethod.PATCH;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpHeaders;



public class MyConstant {
    public static final String AUTH = "/api/v1/auth";
    public static final String USER = "/api/v1/user";

    public static final String REGISTER = "/register";
    public static final String LOGIN = "/login";

    public static final String USERLIST = "/list";

    public static final String COURSELIST = "/course";
    public static final String ADDCOURSE = "/addcourse";
    public static final String EDITCOURSE = "/editCourse/{courseId}";
    public static final String DELETECOURSE = "/deleteCourse/{courseId}";
    
    public static final String ENQUIRYLIST = "/enquiry";
    public static final String ADDENQUIRY = "/addenquiry";
    public static final String DELETEENQUIRY = "/deleteenquiry/{enquiryId}";

    public static final String PAYMENTLIST = "/payment";
    public static final String ADDPAYMENT = "/addpayment";


    public static final List<String> ORGINS = Arrays.asList("http://localhost:4000");
    public static final List<String> HEADERS = Arrays.asList(HttpHeaders.AUTHORIZATION, HttpHeaders.CONTENT_TYPE);
    public static final List<String> METHODS = Arrays.asList(GET.name(), POST.name(),PUT.name(), PATCH.name(), DELETE.name(),HEAD.name());

    //JasonWebTokens
    public static final String SWAGGER_LOCALHOST_URL = "http://localhost:8181";
    public static final String SWAGGER_SECURITY_SCHEME_NAME = "bearerAuth";
    public static final String SWAGGER_SCHEME = "bearer";
    public static final String SWAGGER_BEARER_FORMAT = "JWT";
    public static final String SWAGGER_DESCRIPTION = "Produce a jwt token";


}
