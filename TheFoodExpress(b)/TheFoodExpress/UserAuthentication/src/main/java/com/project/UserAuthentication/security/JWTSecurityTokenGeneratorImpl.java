package com.project.UserAuthentication.security;

import com.project.UserAuthentication.domain.UserData;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class JWTSecurityTokenGeneratorImpl implements SecurityTokenGenerator {

    public String createToken(UserData user) {
        // Write logic to create the Jwt
        Map<String, Object> claims = new HashMap<>();
        claims.put("emailId", user.getEmailId());
        return generateToken(claims, user.getEmailId());
    }

    public String generateToken(Map<String, Object> claims, String subject) {
        // Generate the token and set the user id in the claims
        String jwtToken = Jwts.builder().setIssuer("Food-App")
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, "mysecret").compact();
        //mysecret is the key that has to be shared every time you do encrypt and decrypt process

        return jwtToken;
    }
}
