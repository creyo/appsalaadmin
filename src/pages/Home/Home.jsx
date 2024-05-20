import React,{useState} from 'react'
import Navbar from '../../component/navBar/Navbar'
import ProductCard from '../../component/ProductCard/ProductCard'

export default function Home() {
  const [selectedValue, setselectedValue] = useState('');

  // Function to handle category selection from Navbar
  const handleSearchInput = (value) => {
    setselectedValue(value);
  };
  return (
    <div>
        <Navbar searchInput={handleSearchInput}/>
        <ProductCard selectedValue = {selectedValue}/>
    </div>
  )
}
