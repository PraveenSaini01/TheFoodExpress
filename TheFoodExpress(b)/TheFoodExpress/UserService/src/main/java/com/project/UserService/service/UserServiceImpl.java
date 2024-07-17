
package com.project.UserService.service;

import com.project.UserService.domain.UserData;
import com.project.UserService.exception.UserAlreadyExistsException;
import com.project.UserService.proxy.UserProxy;
import com.project.UserService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {

    private final UserRepository userRepository;
    private final UserProxy userProxy;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, UserProxy userProxy) {
        this.userRepository = userRepository;
        this.userProxy = userProxy;
    }

    @Override
    public UserData registerUser(UserData user) throws UserAlreadyExistsException {
//        UserData existingUser = userRepository.findByEmailIdAndPassword(user.getEmailId(), user.getPassword());
//
//        if (existingUser != null) {
//            throw new UserAlreadyExistsException();
//        }
//
//        UserData savedUser = userRepository.save(user);
//
//        if (userProxy != null) {
//            ResponseEntity<?> responseEntity1 = userProxy.saveUser(savedUser);
//            System.out.println(responseEntity1.getBody());
//        } else {
//            System.out.println("userProxy is null");
//        }
//
//        return savedUser;
//        if (userRepository.findById(user.getEmailId()).isPresent()) {
//            throw new UserAlreadyExistsException();
//        }
        System.out.println(" in serviceImpl "+user);
        UserData savedUser = userRepository.save(user);
        System.out.println(savedUser+" "+user.getEmailId());
        if (!(savedUser.getEmailId().isEmpty())) {
            ResponseEntity response = userProxy.saveUser(user);
            System.out.println(response.getBody()+" response ");
        }
        return savedUser;
    }


}






