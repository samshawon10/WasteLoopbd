package com.wasteloopbd.auth.dto;

import com.wasteloopbd.user.entity.UserRole;

import java.time.LocalDateTime;
import java.util.UUID;

public class RegisterResponse {

    private UUID id;
    private String fullName;
    private String email;
    private UserRole role;
    private LocalDateTime createdAt;

    public RegisterResponse() {
    }

    public RegisterResponse(
            UUID id,
            String fullName,
            String email,
            UserRole role,
            LocalDateTime createdAt
    ) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.role = role;
        this.createdAt = createdAt;
    }

    // Getters and Setters

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
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

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}