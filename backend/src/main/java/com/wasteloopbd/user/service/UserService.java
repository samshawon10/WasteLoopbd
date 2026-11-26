
package com.wasteloopbd.user.service;

import com.wasteloopbd.user.dto.UserProfileResponse;
import com.wasteloopbd.user.dto.UpdateUserRequest;
import com.wasteloopbd.user.dto.ChangePasswordRequest;
import com.wasteloopbd.user.entity.User;
import com.wasteloopbd.user.repository.UserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // Get Current User Profile
    public UserProfileResponse getCurrentUserProfile(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found")
                );

        return mapToProfileResponse(user);
    }

    // Get User By ID
    public UserProfileResponse getUserById(UUID userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found")
                );

        return mapToProfileResponse(user);
    }

    // Update Current User Profile
    public UserProfileResponse updateCurrentUserProfile(
            String email,
            UpdateUserRequest request
    ) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found")
                );

        user.setFullName(request.getFullName().trim());

        User updatedUser = userRepository.save(user);

        return mapToProfileResponse(updatedUser);
    }

    // Change Current User Password
    public void changePassword(
            String email,
            ChangePasswordRequest request
    ) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found")
                );

        if (!passwordEncoder.matches(
                request.getCurrentPassword(),
                user.getPassword()
        )) {
            throw new IllegalArgumentException(
                    "Current password is incorrect"
            );
        }

        user.setPassword(
                passwordEncoder.encode(request.getNewPassword())
        );

        userRepository.save(user);
    }

    // Convert User Entity to Profile Response
    private UserProfileResponse mapToProfileResponse(User user) {

        return new UserProfileResponse(
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getRole(),
                user.isActive(),
                user.getCreatedAt(),
                user.getUpdatedAt()
        );
    }
}
