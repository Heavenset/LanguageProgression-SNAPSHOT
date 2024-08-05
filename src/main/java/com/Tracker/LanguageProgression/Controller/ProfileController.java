package com.Tracker.LanguageProgression.Controller;

import java.util.Base64;
import java.util.Optional;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.Tracker.LanguageProgression.Entity.User;
import com.Tracker.LanguageProgression.Repository.UserRepository;

import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
public class ProfileController {

	// TODO tweak profile so its gonna be showing certain things for the owner of a profile and
	// do not show others for the foreign profiles. (soundcloud)
	// also work on the post view (habr)
	
	private final UserRepository userRepository;

	@GetMapping("/profile/{userID}")
	public String profile(@PathVariable Long userID, Model model) {

		Optional<User> idOfAUser = userRepository.findById(userID);

		if (idOfAUser.isPresent() && idOfAUser.get().getProfilePicture() != null) {
			byte[] profilePictureBytes = idOfAUser.get().getProfilePicture();
			String base64Image = Base64.getEncoder().encodeToString(profilePictureBytes);
			model.addAttribute("avatarByID", "data:image/jpeg;base64," + base64Image);

		} else {
			String avatarPath = "/images/default_profile_picture.png";
			model.addAttribute("avatarByID", avatarPath);
		}
		return "profile";
	}
}
