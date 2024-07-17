package com.project.UserService.service;

import com.project.UserService.domain.UserData;
import com.project.UserService.exception.UserAlreadyExistsException;


public interface IUserService {
UserData registerUser(UserData user) throws UserAlreadyExistsException;




}
