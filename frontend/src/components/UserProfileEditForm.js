import React, { useEffect, useState } from "react";
import { updateUserProfile } from "../services/authService";

import "../styles/userProfileEditForm.css";

const UserProfileEditForm = ({ userProfileData }) => {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [user, setUser] = useState({
    name: "",
    gender: "",
    birthdate: "",
    height: "",
    weight: "",
  });

  useEffect(() => {
    console.log("userProfileData", userProfileData);
    setUser({
      userProfileData,
    });
  }, [userProfileData]);

  const handleSave = async () => {
    try {
      // Call updateUserProfile function to update the profile data
      await updateUserProfile(user).then((res) => {
        console.log("Profile updated successfully", res);
        setShowSuccessMsg(true);
        setUser(res);
      });
      // Optionally, you can handle success action (e.g., show a success message)
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="user-profile-edit-form">
      {showSuccessMsg && (
        <p className="success-msg">Profile updated successfully!</p>
      )}
      <h2 className="user-profile-edit-title">Update Your Profile</h2>
      {/* Input fields for editing profile data */}
      <input
        type="text"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        placeholder="Name"
        className="input-field"
      />
      <input
        type="text"
        onChange={(e) => setUser({ ...user, gender: e.target.value })}
        placeholder="Gender"
        className="input-field"
      />
      <input
        type="text"
        onChange={(e) => setUser({ ...user, birthdate: e.target.value })}
        placeholder="Birthdate"
        className="input-field"
      />
      <input
        type="text"
        onChange={(e) => setUser({ ...user, height: e.target.value })}
        placeholder="Height (cm)"
        className="input-field"
      />
      <input
        type="text"
        onChange={(e) => setUser({ ...user, weight: e.target.value })}
        placeholder="Weight (kg)"
        className="input-field"
      />
      {/* Save button */}
      <button onClick={handleSave} className="save-button">
        Update
      </button>
    </div>
  );
};

export default UserProfileEditForm;
