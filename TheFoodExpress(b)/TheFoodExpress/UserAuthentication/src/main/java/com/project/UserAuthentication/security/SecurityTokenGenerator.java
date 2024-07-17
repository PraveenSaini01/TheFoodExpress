package com.project.UserAuthentication.security;

import com.project.UserAuthentication.domain.UserData;

public interface SecurityTokenGenerator {
    String createToken(UserData user);
}
