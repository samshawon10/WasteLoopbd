package com.wasteloopbd.auth.dto;

import com.wasteloopbd.user.entity.UserRole;

import java.util.UUID;

public class LoginResponse {

    private String token;
    private String tokenType;
    private UUID userId;
    private String fullName;
    private String email;
    private UserRole role;

    public LoginResponse() {
    }

    public LoginResponse(
            String token,
            String tokenType,
            UUID userId,
            String fullName,
            String email,
            UserRole role
    ) {
        this.token = token;
        this.tokenType = tokenType;
        this.userId = userId;
        this.fullName = fullName;
        this.email = email;
        this.role = role;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }
}