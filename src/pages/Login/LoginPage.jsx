import React, { useState } from 'react';
import logo from "../../assets/logo.ico"
import useLogin from '../../hooks/useLogin';

const LoginPage = () => {



    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const { loading, login } = useLogin()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(form)
    };

    return (
        <div className="bg-gradient-to-br from-pink-600 to-gray-100 min-h-screen bg-gray-100 flex justify-center items-center space-x-1">
            <div className="bg-gray-200 p-8 rounded-lg shadow-md w-96">
                <img src={logo} alt="Logo" className="mx-auto mb--2" />
                <h2 className="text-3xl font-bold italic mb-4 text-pink-600 ">Welcome to AppSala Admin</h2>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-pink-600  p-8 rounded-lg shadow-md w-96  mg-12 h-96">
                <h2 className="text-3xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex justify-between items-center mb-4">

                        {/* <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a> */}
                    </div>
           {loading ?    <span className='loading loading-spinner'></span> :(<button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Log In
                    </button>)}
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
