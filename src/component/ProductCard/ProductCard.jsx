import React from 'react';
import useFetchApplication from '../../hooks/useFetchApplication';
import shortDescription from "../../utils/shortDescription"
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import {filterData} from "../../utils/filterSearchInput"



function ProductCard({selectedValue}) {
    const { loading, data } = useFetchApplication();

    const filteredData = filterData(data,selectedValue)
    
    

    return (
        <div className="flex flex-wrap justify-center items-center h-full">
            {!loading ? (filteredData.map((product) => (
                <div key={product._id} className="card-container">
                    <div className="card w-96 bg-gray-700 shadow-xl m-1">
                        <figure className="px-10 pt-10">
                            <img
                                src={product.logo}
                                alt=""
                                className="rounded-xl"
                                style={{ width: '100px', height: '100px' }}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.shortname}</h2>
                            <p>{shortDescription(product.shortDescription)}</p>
                            <div className="flex flex-wrap justify-between card-actions">
                                <button className="btn bg-red-700 border-red-700 hover:bg-red-600 hover:border-red-600"><MdDelete />Delete</button>
                                <div className="ml-20"></div> {/* Adjust the margin as needed */}
                                <Link to={`/update/application/${product._id}`}>  <button className="btn btn-primary w-15"><MdModeEdit />Edit</button></Link>
                            </div>

                        </div>
                    </div>
                </div>
            ))) :
                (<div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <span className="loading loading-spinner text-info" style={{ fontSize: '3rem', width: '3rem', height: '3rem' }}></span>
                </div>)
            }
        </div>
    );
}

export default ProductCard;
