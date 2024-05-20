import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ onRatingChange ,ratingData}) => {
  const [formData, setFormData] = useState({
    Usability: 0,
    Performance: 0,
    Features: 0,
    Support: 0,
    Value: 0,
    Company: 0
  });



  useEffect(() => {
    
    // Check if ratingData exists and has 'rating' property
    if (ratingData && ratingData.rating) {
      // Set the rating value from ratingData
        setFormData(ratingData.rating);
    }
    console.log(ratingData)
}, [ratingData]);

  const handleChange = (category, rating) => {
    const updatedFormData = {
      ...formData,
      [category]: rating
    };
    setFormData(updatedFormData);
    onRatingChange(updatedFormData);
  };

  return (
    <div className="max-w-md ml-3">
      <h2 className="text-2xl font-bold mb-4">Rating</h2>
      {Object.entries(formData).map(([category, rating]) => (
        <div key={category} className="mb-4 ml-8">
          <label htmlFor={category} className="mb-2 block">{category}:</label>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`text-lg ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
                onClick={() => handleChange(category, index + 1)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rating;
