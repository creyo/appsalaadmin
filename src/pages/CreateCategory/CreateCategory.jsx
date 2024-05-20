import React from 'react'
import CategoryDropDown from '../../component/CategoryDropDown/CategoryDropDown'

function CreateCategory() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-6">Create Category</h2>
        <CategoryDropDown />
      </div>
    </div>

  )
}

export default CreateCategory