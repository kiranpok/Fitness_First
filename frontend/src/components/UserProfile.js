import React, { useEffect, useState } from "react";
//import { useAuth } from "../hooks/AuthContext";
import { getUserProfile } from "../services/authService";
import UserProfileEditForm from "./UserProfileEditForm"; // Import the UserProfileEditForm component

const UserProfile = () => {
  //const { user } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updatedProfileData, setUpdatedProfileData] = useState(null);

  useEffect(() => {
    const fetchUserProfileData = async () => {
      try {
        const userProfileData = await getUserProfile();
        setUserProfile(userProfileData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfileData();
  }, [updateSuccess]);

  const handleProfileUpdate = async (updatedData) => {
    // Logic to handle profile update, then set updateSuccess to trigger data refetch
    // Example:
    try {
      // Code to update profile data
      setUpdatedProfileData(updatedData); // Set updated profile data for display
      setUpdateSuccess(true); // Set update success flag
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {updateSuccess && <p>Profile updated successfully!</p>}
      {userProfile && (
        <div>
          <h2>User Profile</h2>
          <p>
            Welcome: {userProfile.name}, {userProfile.email}
          </p>
          {/* Pass handleProfileUpdate function as a prop to UserProfileEditForm */}
          <UserProfileEditForm
            userProfileData={userProfile}
            handleProfileUpdate={handleProfileUpdate}
          />
          {updatedProfileData && (
            <div>
              <h3>Updated Profile Data</h3>
              {/* Display updated profile data */}
            </div>
          )}
        </div>
      )}
      {!userProfile && <p>User profile data not available</p>}
    </div>
  );
};

export default UserProfile;
