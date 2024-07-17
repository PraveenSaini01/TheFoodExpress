package com.project.UserAuthentication.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class UserData {
     @Id
        private String emailId;
        private String password;
        private String role;

        // Default constructor sets the role to "User"
        public UserData() {
        }

        public UserData(String emailId, String password, String role) {
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
            return "User{" +
                    "emailId='" + emailId + '\'' +
                    ", password='" + password + '\'' +
                    ", role='" + role + '\'' +
                    '}';
        }
    }


