import React from 'react'

const AdditionalInfo = ({ formData, handleChange }) => {
  const {additional1, additional2, additional3} = formData
  return (
    <div className="addtionalInfo-container">
      <input
        type="text"
        placeholder="Favorite Color"
        name="additional1"
        value={additional1}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Favorite Animal"
        name="additional2"
        value={additional2}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Favorite Quote"
        name="additional3"
        value={additional3}
        onChange={handleChange}
      />
    </div>
  );
};

export default AdditionalInfo
