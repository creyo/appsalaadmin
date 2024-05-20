import React, { useState, useEffect } from 'react';
import YearDropDown from './YearDropDown';

const SellerDetails = ({ onSellerChange, sellerData }) => {
  const [formData, setFormData] = useState({
    seller: '',
    Website: '',
    companyWebsite: '',
    yearFounded: '',
    HQLocation: '',
    socialmedia: {
      twitter: '',
      linkedInPage: ''
    }
  });
  

  useEffect(()=>{
    if(sellerData && sellerData.sellerDetails){
      setFormData(sellerData.sellerDetails)
    }
   
  },[sellerData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const updatedFormData = {
        ...prevState,
        [name]: value
      };
      // Call the parent callback with the updated form data
      onSellerChange(updatedFormData);
      return updatedFormData;
    });
  };

  const handleYearChange = (year) => {
    setFormData((prevState) => {
      const updatedFormData = {
        ...prevState,
        yearFounded: year
      };
      // Call the parent callback with the updated form data
      onSellerChange(updatedFormData);
      return updatedFormData;
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <form>
        <div className="mb-4">
          <label htmlFor="seller">Seller:</label>
          <input
            type="text"
            id="seller"
            name="seller"
            value={formData.seller}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Website">Website:</label>
          <input
            type="text"
            id="Website"
            name="Website"
            value={formData.Website}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="companyWebsite">Company Website:</label>
          <input
            type="text"
            id="companyWebsite"
            name="companyWebsite"
            value={formData.companyWebsite}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
        <YearDropDown onYearChange={handleYearChange} yearData ={formData.yearFounded}/>
        <div className="mb-4">
          <label htmlFor="HQLocation">HQ Location:</label>
          <input
            type="text"
            id="HQLocation"
            name="HQLocation"
            value={formData.HQLocation}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div className="max-w-md mx-auto border rounded p-4">
          <h2 className="text-xl font-bold mb-4">Social Media Links</h2>
          <div className="mb-4">
            <label htmlFor="twitter">Twitter:</label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              value={formData.socialmedia.twitter}
              onChange={(e) => {
                const { value } = e.target;
                setFormData((prevState) => {
                  const updatedFormData = {
                    ...prevState,
                    socialmedia: {
                      ...prevState.socialmedia,
                      twitter: value
                    }
                  };
                  // Call the parent callback with the updated form data
                  onSellerChange(updatedFormData);
                  return updatedFormData;
                });
              }}
              className="border rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="linkedInPage">LinkedIn Page:</label>
            <input
              type="text"
              id="linkedInPage"
              name="linkedInPage"
              value={formData.socialmedia.linkedInPage}
              onChange={(e) => {
                const { value } = e.target;
                setFormData((prevState) => {
                  const updatedFormData = {
                    ...prevState,
                    socialmedia: {
                      ...prevState.socialmedia,
                      linkedInPage: value
                    }
                  };
                  // Call the parent callback with the updated form data
                  onSellerChange(updatedFormData);
                  return updatedFormData;
                });
              }}
              className="border rounded px-3 py-2 w-full"
            />
          </div>
        </div>
       
      </form>
    </div>
  );
};

export default SellerDetails;
