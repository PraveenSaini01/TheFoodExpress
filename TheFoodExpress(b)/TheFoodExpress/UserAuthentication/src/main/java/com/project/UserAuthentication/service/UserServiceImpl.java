package com.project.UserAuthentication.service;

import com.project.UserAuthentication.domain.UserData;
import com.project.UserAuthentication.exception.InvalidCredentialException;
import com.project.UserAuthentication.exception.UserAlreadyExistsException;
import com.project.UserAuthentication.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService  {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserData saveUser(UserData user) throws UserAlreadyExistsException {
        //save the user in the db
        System.out.println("in service");
        if(userRepository.findById(user.getEmailId()).isPresent())
        {
            throw new UserAlreadyExistsException();
        }
        System.out.println(user);
        return userRepository.save(user);
    }
    @Override
public UserData getUserByEmailIdAndPassword(String emailId, String password) throws InvalidCredentialException {
    // Validate for wrong credentials
        UserData user =  userRepository.findByEmailIdAndPassword(emailId , password);
        if(user == null){
            throw new InvalidCredentialException();
        }
        return user;

    }
}

