import React from "react";

const PersonalInfo = ({ formData, handleChange }) => {
  const { firstName, age, city } = formData;
  return (
    <div className="personalInfo-container">
      <input
        type="text"
        placeholder="Name"
        name="firstName"
        value={firstName}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        value={age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        value={city}
        onChange={handleChange}
      />
    </div>
  );
};

export default PersonalInfo;
