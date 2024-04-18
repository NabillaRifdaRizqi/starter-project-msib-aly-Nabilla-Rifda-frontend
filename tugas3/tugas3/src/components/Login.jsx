import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 

import COVER_IMAGE from '../assets/cover2.png';
import LOGO_IMAGE from '../assets/logo.png';
import GOOGLE_IMAGE from '../assets/google.png';
import EYE_IMAGE from '../assets/eye.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 
    const navigate = useNavigate();  

    const handleLogin = () => {
        console.log("Email:", email); 
        console.log("Password:", password); 
    
        if (email === 'nabillarifda849@gmail.com' && password === 'Billa111103#') {
            localStorage.setItem('isLoggedIn', 'true');
            navigate("/profile"); 
            console.log("Login successful"); 
        } else {
            console.log("Login failed"); 
        }
    };
    

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 
    };

    return (
       <div className="h-screen mx-auto flex flex-col md:flex-row">
    <div className="w-full md:w-1/2 h-full overflow-hidden">
        <img 
            src={COVER_IMAGE} 
            className="w-full h-full object-cover" 
            alt="Cover" 
        />
    </div>
            <div className="w-full md:w-1/2 h-full md:h-full bg-white flex flex-col justify-center items-center p-10">
                <div className="w-2/3">
                    <img 
                        src={LOGO_IMAGE} 
                        className="w-10 h-auto mb-4" 
                        alt="Logo" 
                    />
                    <h3 className="text-3xl text-[#425180] font-bold mb-4">Login</h3>
                    <p className='text-sm mb-5 font-roboto '> Enter to get unlimited access to data & information.</p>
                    <p className='w-full flex items-start justify-between '> Email</p>
                    <input 
                        type="email"
                        placeholder='Enter Your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full text-black py-4 my-4 bg-white border border-[#C1D1FF]   rounded-md p-4  focus:border-indigo-500'
                        autoComplete="username" 
                    /> 
                    <p className='w-full flex items-start justify-between'>Password</p>
                    <div className="relative w-full">
                    <input 
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter Your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full text-black py-4 my-4 bg-white border border-[#C1D1FF] text-sm rounded-md p-4  focus:border-indigo-50 '
                        autoComplete="current-password"
                    />
                        <img 
                            src={EYE_IMAGE} 
                            className='h-6 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'
                            onClick={togglePasswordVisibility}
                            alt="Toggle Password Visibility" 
                        />
                    </div>
                    
                    <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center'>
                            <input type='checkbox' className='w-4 h-4 mr-2'/>
                            <p className='text-sm'> Remember me </p>
                        </div>
                        <p className='text-sm font-semibold text-[#576CAA]'>Forgot your password ?</p>
                    </div>

                    <div className='w-full flex flex-col my-4'>
                        <button onClick={handleLogin} className='w-full text-white bg-[#576CAA] rounded-md p-4 text-center flex items-center justify-center'>
                            Login Now
                        </button>
                    </div>


                    <div className='w-full flex items-center justify-center relative py-2'>
                        <div className='w-full h-[1px] bg-[#C1D1FF]'></div>
                        <p className='text-lg absolute text-black/80 bg-[#FFF9F1]'>Or, Login with</p>
                    </div>

                    <div className='w-full flex flex-col my-4'>
                        <button className='w-full text-black bg-white border border-[#C1D1FF] rounded-md p-4 text-center flex items-center justify-center'>
                            <img src={GOOGLE_IMAGE} className='h-6 mr-2'/>
                            Login with Google
                        </button>
                    </div>

                    <div className='w-full flex items-center justify-center'>
                        <p className='text-sm font-normal text-black'>Don’t have an account ? <Link to="/register" className='font-semibold underline text-[#576CAA]'>Register here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
