import React, { useState } from "react";
import  '../UserProfile.css'
const ProfileSection = ({ avatar, name, username, onAvatarChange }) => (
  <div className="profile-section">
    <img
      src={avatar}
      alt={`${name}'s avatar`}
      className="avatar"
    />
    <h3>{name}</h3>
    <p>@{username}</p>
    <input
      type="file"
      accept="image/*"
      onChange={onAvatarChange}
      className="file-input"
    />
  </div>
);

const EditForm = ({ onSubmit, currentPassword, newPassword, newName, onChange }) => (
  <form onSubmit={onSubmit} className="edit-form">
    <h3>Edit Profile</h3>

    <label htmlFor="newName">New Name</label>
    <input
      type="text"
      id="newName"
      value={newName}
      onChange={(e) => onChange("newName", e.target.value)}
      placeholder="Enter your new name"
      className="input-field"
    />

    <label htmlFor="currentPassword">Current Password</label>
    <input
      type="password"
      id="currentPassword"
      value={currentPassword}
      onChange={(e) => onChange("currentPassword", e.target.value)}
      placeholder="Enter your current password"
      className="input-field"
    />

    <label htmlFor="newPassword">New Password</label>
    <input
      type="password"
      id="newPassword"
      value={newPassword}
      onChange={(e) => onChange("newPassword", e.target.value)}
      placeholder="Enter your new password"
      className="input-field"
    />

    <button type="submit" className="submit-btn">
      Save Changes
    </button>
  </form>
);

const QuoteSection = ({ quote, onGenerateQuote }) => (
  <div className="quote-section">
    <h3>Inspiring Quote</h3>
    <p className="quote">{quote}</p>
    <button onClick={onGenerateQuote} className="generate-btn">
      Generate Quote
    </button>
  </div>
);

const UserProfile = () => {
  const [avatar, setAvatar] = useState("path/to/default/avatar.jpg");
  const [name, setName] = useState("John Doe");
  const [username, setUsername] = useState("johndoe");
  const [newName, setNewName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [quote, setQuote] = useState("Your inspiring quote here!");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) setAvatar(URL.createObjectURL(file));
  };

  const handleFormChange = (field, value) => {
    if (field === "newName") setNewName(value);
    if (field === "currentPassword") setCurrentPassword(value);
    if (field === "newPassword") setNewPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add save logic here
    console.log("Profile updated:", { newName, currentPassword, newPassword });
  };

  const fetchQuote = () => {
    // Replace with API call for fetching a random quote
    setQuote("The only limit to our realization of tomorrow is our doubts of today.");
  };

  return (
    <div className="user-profile">
      <div className="left-section">
        <ProfileSection
          avatar={avatar}
          name={name}
          username={username}
          onAvatarChange={handleAvatarChange}
        />
        <EditForm
          onSubmit={handleSubmit}
          currentPassword={currentPassword}
          newPassword={newPassword}
          newName={newName}
          onChange={handleFormChange}
        />
      </div>
      <div className="right-section">
        <QuoteSection quote={quote} onGenerateQuote={fetchQuote} />
      </div>
    </div>
  );
};

export default UserProfile;
