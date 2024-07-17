package com.project.UserAuthentication.service;

import com.project.UserAuthentication.domain.UserData;
import com.project.UserAuthentication.exception.InvalidCredentialException;
import com.project.UserAuthentication.exception.UserAlreadyExistsException;


public interface IUserService {
     UserData saveUser(UserData user) throws UserAlreadyExistsException;

     UserData getUserByEmailIdAndPassword(String emailId, String password) throws InvalidCredentialException ;



}

