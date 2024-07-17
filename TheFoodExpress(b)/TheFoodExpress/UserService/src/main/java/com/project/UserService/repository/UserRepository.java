package com.project.UserService.repository;

import com.project.UserService.domain.UserData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository  extends MongoRepository<UserData,String> {
  //   UserData findByEmailIdAndPassword(String emailId, String password);
}