package com.project.UserAuthentication.repository;

import com.project.UserAuthentication.domain.UserData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserData, String> {
    UserData findByEmailIdAndPassword(String emailId, String password);


}