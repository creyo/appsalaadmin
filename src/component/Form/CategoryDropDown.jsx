import React, { useState, useEffect } from 'react';
import useFetchsubCategory from '../../hooks/useFetchsubCategory';

function CategoryDropDown({ onCategorySelect, categoryData }) {
  const { subCategories, loading } = useFetchsubCategory();
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to handle category selection change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category); // Update the selected category state
    onCategorySelect(category); // Call the function passed as prop with the selected category
  };

  // Set the selected category when categoryData changes
  useEffect(() => {
    console.log("categoryData in useEffect:", categoryData);
    if (categoryData && categoryData.Category) {
      setSelectedCategory(categoryData.Category);
    }
  }, [categoryData]);

 

  return (
    <>
      {loading ? (
        <span className="loading loading-spinner loading-lg" />
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Category</h2>
          <select
            id="categories"
            className="block text-sm font-medium w-full rounded border-none text-gray-700"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">{selectedCategory  ? selectedCategory :"Please select a category"}</option>
            {subCategories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}

export default CategoryDropDown;
