import React, { useState } from 'react';
import useCreateCategory from '../../hooks/useCreateCategory';

const CategoryDropDown = () => {

  const {loading , createCategory } = useCreateCategory()

    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        subCategory_ids: [],
        description: '',
        image: { url: '', public_id: '' }
    });

    const [subCategoryFormData, setSubCategoryFormData] = useState({
        name: '',
        slug: '',
        description: '',
        image: { url: '', public_id: '' }
    });

    const [showSubCategoryForm, setShowSubCategoryForm] = useState(false);
    const [subCategoryButton, setsubCategoryButton] = useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubCategoryChange = (e) => {
        const { name, value } = e.target;
        setSubCategoryFormData({
            ...subCategoryFormData,
            [name]: value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
         await  createCategory(formData)
        // Handle form submission, e.g., send data to an API
    };

    const handleAddSubCategory = () => {
        setShowSubCategoryForm(true);
    };

    const handleSubCategorySubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        setFormData({
            ...formData,
            subCategory_ids: [...formData.subCategory_ids, subCategoryFormData]
        });
        setsubCategoryButton(false)

    };

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter category name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug:</label>
                    <input
                        type="text"
                        id="slug"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        placeholder="Enter category slug"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter category description"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL:</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image.url}
                        onChange={handleChange}
                        placeholder="Enter image URL"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="public_id" className="block text-sm font-medium text-gray-700">Image Public ID:</label>
                    <input
                        type="text"
                        id="public_id"
                        name="public_id"
                        value={formData.image.public_id}
                        onChange={handleChange}
                        placeholder="Enter image public ID"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        
                    />
                </div> */}

                {showSubCategoryForm && (
                    <div className="border rounded p-4 mb-4">
                        <form >
                            <div className="relative border rounded p-4 mb-4">
                                <button
                                    type="button"
                                    onClick={() => { setShowSubCategoryForm(false) }}
                                    className="absolute top-0 right-0 -mt-2 -mr-2 text-gray-500 hover:text-red-500 focus:outline-none"
                                >
                                    &#x2716;
                                </button>
                                <h3 className="text-xl font-bold mb-2">Add Subcategory</h3>

                                <label htmlFor="subName" className="block text-sm font-medium text-gray-700">SubCategory name</label>
                                <input
                                    type="text"
                                    id="subName"
                                    name="name"
                                    value={subCategoryFormData.name}
                                    onChange={handleSubCategoryChange}
                                    placeholder="Enter subcategory name"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />

                                <div className="mb-4">
                                    <label htmlFor="subSlug" className="block text-sm font-medium text-gray-700">Slug:</label>
                                    <input
                                        type="text"
                                        id="subSlug"
                                        name="slug"
                                        value={subCategoryFormData.slug}
                                        onChange={handleSubCategoryChange}
                                        placeholder="Enter category slug"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="subDescription" className="block text-sm font-medium text-gray-700">Subcategory Description:</label>
                                    <textarea
                                        id="subDescription"
                                        name="description"
                                        value={subCategoryFormData.description}
                                        onChange={handleSubCategoryChange}
                                        placeholder="Enter subcategory description"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>



                                
{/* 
                                <div className="mb-4">
                                    <label htmlFor="subImage" className="block text-sm font-medium text-gray-700">Image URL:</label>
                                    <input
                                        type="text"
                                        id="subImage"
                                        name="image"
                                        value={subCategoryFormData.image.url}
                                        onChange={handleSubCategoryChange}
                                        placeholder="Enter image URL"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="subPublicId" className="block text-sm font-medium text-gray-700">Image Public ID:</label>
                                    <input
                                        type="text"
                                        id="subPublicId"
                                        name="public_id"
                                        value={subCategoryFormData.image.public_id}
                                        onChange={handleSubCategoryChange}
                                        placeholder="Enter image public ID"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div> */}







                            </div>


                            {
                                subCategoryButton ? (<button
                                    type="submit"
                                    onClick={handleSubCategorySubmit}
                                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                >
                                    {!showSubCategoryForm ? "Add Subcategory" : "Create Subcategory"}
                                </button>)
                                    :
                                    (
                                        <div className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                                            Created!  now you can submit Category
                                        </div>
                                    )
                            }
                        </form>
                    </div>
                )}

                <div className="flex justify-evenly">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                    {loading ? <span className='loading loading-spinner '></span> : "Submit"}
                    </button>

                    {!showSubCategoryForm && <button
                        type="button"
                        onClick={handleAddSubCategory}
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                        Add Subcategory
                    </button>}
                </div>
            </form>
        </div>
    );
};

export default CategoryDropDown;
