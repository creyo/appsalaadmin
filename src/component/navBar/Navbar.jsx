import React from 'react'
import logo from "../../assets/logo.ico"
import { Link } from "react-router-dom"
import useLogOut from '../../hooks/useLogOut'

function Navbar({searchInput}) {

   const {loading, logout} = useLogOut()

   const  handleSearchInput=(e)=>{
    searchInput(e.target.value)
   }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1" >

                    <a className="btn btn-ghost text-xl" href='/'>
                        <img src={logo} style={{ height: "30px" }} />
                        <span style={{ fontFamily: "Manrope, sans-serif", color: "#F11A7B" }}>Appsala</span>
                    </a>
                </div>
                <div className="flex-none gap-2">
                    <Link to="/create/category"><button className="btn btn-secondary mr-2">Create Category</button></Link>
                    <Link to="/create/application"><button className="btn btn-accent mr-2">Create New Application</button></Link>
                    <div className="form-control">
                        <input type="text" placeholder="Search Application" className="input input-bordered w-24 md:w-auto"  onChange={handleSearchInput}/>

                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-11">
                                    <span>SY</span>
                                </div>
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                        <button onClick={logout}><li><a>Logout</a></li></button>    
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar