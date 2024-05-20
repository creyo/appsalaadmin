import React, { useState, useEffect } from 'react';

const AppPricing = ({ onPricingChange ,AppPricingData}) => {
  const [pricingData, setPricingData] = useState([
    {
      package: '',
      price: '',
      description: '',
      duration: 'month'
    }
  ]);

 
  useEffect(()=>{
  if(AppPricingData && AppPricingData.appPricing) {  setPricingData(AppPricingData.appPricing)}
  },[AppPricingData])

  const handleAddField = () => {
    setPricingData([...pricingData, {
      package: '',
      price: '',
      description: '',
      duration: 'month'
    }]);
  };

  const handleRemoveField = (index) => {
    const updatedPricingData = [...pricingData];
    updatedPricingData.splice(index, 1);
    setPricingData(updatedPricingData);
    onPricingChange(updatedPricingData); // Notify parent after removing a field
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPricingData = [...pricingData];
    updatedPricingData[index][name] = value;
    setPricingData(updatedPricingData);
    onPricingChange(updatedPricingData); // Notify parent on every change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPricingChange(pricingData); // Notify parent on form submission
  };

  return (
    <div className="max-w-md mx-auto">
     <form onSubmit={handleSubmit}>
        
        {pricingData.map((pricing, index) => (
          <div key={index} className="relative border rounded p-4 mb-4">
            <button
              type="button"
              onClick={() => handleRemoveField(index)}
              className="absolute top-0 right-0 -mt-2 -mr-2 text-gray-500 hover:text-red-500 focus:outline-none"
            >
              &#x2716;
            </button>
            <div className="mb-4">
              <label htmlFor={`package-${index}`} className="block text-sm font-medium text-gray-700">Package:</label>
              <input
                type="text"
                id={`package-${index}`}
                name="package"
                value={pricing.package}
                onChange={(e) => handleChange(index, e)}
                className="border rounded px-3 py-2 w-full"
                placeholder="Enter package name"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor={`price-${index}`} className="block text-sm font-medium text-gray-700">Price:</label>
                <input
                  type="number"
                  id={`price-${index}`}
                  name="price"
                  value={pricing.price}
                  onChange={(e) => handleChange(index, e)}
                  className="border rounded px-3 py-2 w-full"
                  placeholder="Enter price"
                  required
                />
              </div>
              <div>
                <label htmlFor={`duration-${index}`} className="block text-sm font-medium text-gray-700">Duration:</label>
                <select
                  id={`duration-${index}`}
                  name="duration"
                  value={pricing.duration}
                  onChange={(e) => handleChange(index, e)}
                  className="border rounded px-3 py-2 w-full"
                  required
                >
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor={`description-${index}`} className="block text-sm font-medium text-gray-700">Description:</label>
              <textarea
                id={`description-${index}`}
                name="description"
                value={pricing.description}
                onChange={(e) => handleChange(index, e)}
                className="border rounded px-3 py-2 w-full"
                placeholder="Enter description"
                required
              ></textarea>
            </div>
          </div>
        ))}
        <div className="flex justify-center ">
          <button
            type="button"
            onClick={handleAddField}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Package
          </button>
        
        </div>
      </form>
    </div>
  );
};

export default AppPricing;
