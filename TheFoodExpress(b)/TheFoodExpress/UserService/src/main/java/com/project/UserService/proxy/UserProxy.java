package com.project.UserService.proxy;

import com.project.UserService.domain.UserData;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "user-authentication", url = "localhost:8083") // Fix the URL format
public interface UserProxy {

    @PostMapping("/api/v1/save")
    ResponseEntity<?> saveUser(@RequestBody UserData user);
}
