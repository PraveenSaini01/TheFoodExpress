package com.project.UserService.domain;
//
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//@Document
//public class UserData {
//    @Id
//    private String emailId;
//    private String password;
//    private String role;
//   // private Address address;
//
//    public UserData(String emailId, String password, String role) {
//        this.emailId = emailId;
//        this.password = password;
//        this.role = role;
//     //   this.address = address;
//    }
//    public UserData() {}
//
//    public String getEmailId() {
//        return emailId;
//    }
//
//    public void setEmailId(String emailId) {
//        this.emailId = emailId;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public String getRole() {
//        return role;
//    }
//
//    public void setRole(String role) {
//        this.role = role;
//    }
//
////    public Address getAddress() {
////        return address;
////    }
////
////    public void setAddress(Address address) {
////        this.address = address;
////    }
//
//    @Override
//    public String toString() {
//        return "User{" +
//                "userEmail='" + emailId + '\'' +
//                ", password='" + password + '\'' +
//                ", role='" + role + '\'' +
////                ", address=" + address +
//                '}';
//    }
//
//}
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class UserData {

    @Id
    private String emailId;
    private String password;
    private String role="USER";


    public UserData() {
    }

    public UserData(String emailId, String password, String role ) {
        this.emailId = emailId;
        this.password = password;
        this.role = role;

    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }


    @Override
    public String toString() {
        return "UserData{" +
                "emailId='" + emailId + '\'' +
                ", password='" + password + '\'' +
                ", role='" + role + '\'' +

                '}';
    }
}
