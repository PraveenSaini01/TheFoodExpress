
package com.project.UserService.controller;

import com.project.UserService.domain.UserData;
import com.project.UserService.exception.UserAlreadyExistsException;
import com.project.UserService.service.IUserService;
import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v4")
public class UserController {
    private final IUserService userService;
    private ResponseEntity responseEntity;

    @Autowired
    public UserController(IUserService userService) {
        this.userService = userService;
    }

    private String getEmailIdFromClaims(HttpServletRequest request) {
        System.out.println("header " + request.getHeader("Authorization"));
        Claims claims = (Claims) request.getAttribute("claims");
        System.out.println("Email ID from claims :: " + claims.getSubject());
        return claims.getSubject();
    }


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserData user) throws UserAlreadyExistsException {
//        try {
//            UserData savedUser = userService.registerUser(user);
//            return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
//        } catch (UserAlreadyExistsException e) {
//            return new ResponseEntity<>("User already exists", HttpStatus.CONFLICT);
//
//        }
        try {
            System.out.println("inside register method of userService");
            responseEntity = new ResponseEntity<>(userService.registerUser(user), HttpStatus.OK);
        } catch (UserAlreadyExistsException e) {
            throw new UserAlreadyExistsException();
        } catch (Exception e) {
            System.out.println(e.getMessage() + " User");
//            responseEntity = new ResponseEntity<>("Try After SomeTime", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }


}
