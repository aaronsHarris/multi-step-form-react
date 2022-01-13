import React from "react";

const SignUpInfo = ({ formData, setFormData, handleChange }) => {
  const { email, password, confirmPassword } = formData;
  return (
    <div className="signUp-container">
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
      />
    </div>
  );
};

export default SignUpInfo;
