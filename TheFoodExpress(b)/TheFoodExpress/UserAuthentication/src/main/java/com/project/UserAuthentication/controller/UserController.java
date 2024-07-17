package com.project.UserAuthentication.controller;

import com.project.UserAuthentication.domain.UserData;
import com.project.UserAuthentication.exception.UserAlreadyExistsException;
import com.project.UserAuthentication.exception.InvalidCredentialException;
import com.project.UserAuthentication.security.SecurityTokenGenerator;
import com.project.UserAuthentication.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    private ResponseEntity responseEntity;
    private final IUserService iUserService;
    private final SecurityTokenGenerator securityTokenGenerator;

    @Autowired
    public UserController(IUserService iUserService, SecurityTokenGenerator securityTokenGenerator) {
        this.iUserService = iUserService;
        this.securityTokenGenerator = securityTokenGenerator;
    }


@PostMapping("/save")
public ResponseEntity<?> saveUser(@RequestBody UserData userData) {
    try {
        UserData user1=iUserService.saveUser(userData);
        responseEntity = new ResponseEntity<>(user1, HttpStatus.CREATED);
    } catch (UserAlreadyExistsException e) {
        responseEntity = new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
    } catch (Exception e) {
        responseEntity = new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return responseEntity;
}

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserData user) throws  InvalidCredentialException  {
        Map<String ,String> map=new HashMap<>();
        String token="";
        try{
        UserData retrievedUser = iUserService.getUserByEmailIdAndPassword(user.getEmailId(), user.getPassword());
        if(retrievedUser==null)
        {
            throw new InvalidCredentialException();
        }
        token = securityTokenGenerator.createToken(retrievedUser);
        System.out.println(token);
        responseEntity=new ResponseEntity(token,HttpStatus.OK);
    }
    catch (Exception e){
        responseEntity=new ResponseEntity("Try After Sometime",HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return responseEntity;
    }


}

