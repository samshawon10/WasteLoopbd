
package com.wasteloopbd.user.controller;

import com.wasteloopbd.user.dto.UserProfileResponse;
import com.wasteloopbd.user.dto.UpdateUserRequest;
import com.wasteloopbd.user.dto.ChangePasswordRequest;
import com.wasteloopbd.user.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Get Current User Profile
    @GetMapping("/me")
    public ResponseEntity<UserProfileResponse> getCurrentUser(
            Authentication authentication
    ) {

        UserProfileResponse response =
                userService.getCurrentUserProfile(
                        authentication.getName()
                );

        return ResponseEntity.ok(response);
    }

    // Get User By ID
    @GetMapping("/{userId}")
    public ResponseEntity<UserProfileResponse> getUserById(
            @PathVariable UUID userId
    ) {

        UserProfileResponse response =
                userService.getUserById(userId);

        return ResponseEntity.ok(response);
    }

    // Update Current User Profile
    @PutMapping("/me")
    public ResponseEntity<UserProfileResponse> updateCurrentUserProfile(
            Authentication authentication,
            @Valid @RequestBody UpdateUserRequest request
    ) {

        UserProfileResponse response =
                userService.updateCurrentUserProfile(
                        authentication.getName(),
                        request
                );

        return ResponseEntity.ok(response);
    }

    // Change Current User Password
    @PutMapping("/me/change-password")
    public ResponseEntity<Map<String, String>> changePassword(
            Authentication authentication,
            @Valid @RequestBody ChangePasswordRequest request
    ) {

        userService.changePassword(
                authentication.getName(),
                request
        );

        return ResponseEntity.ok(
                Map.of("message", "Password changed successfully")
        );
    }
}
