import React from 'react';
import { Link } from 'react-router-dom';

import COVER_IMAGE from '../assets/cover2.png';
import LOGO_IMAGE from '../assets/logo.png';
import GOOGLE_IMAGE from '../assets/google.png';

const color = {
    primary: "#060606",
    background: "#FFF9F1",
    disabled: "#D9D9D9"
}

const Register = () => {
    return (
        <div className="h-screen mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full overflow-hidden">
            <img 
                src={COVER_IMAGE} 
                className="w-full h-full object-cover" 
                alt="Cover" 
            />
        </div>
            <div className="w-full md:w-1/2 h-2/3 md:h-full bg-white flex flex-col justify-center items-center p-10">
                <div className="w-2/3">
                    <img 
                        src={LOGO_IMAGE} 
                        className="w-10 h-auto mb-4" 
                        alt="Logo" 
                    />
                     <h3 className="text-3xl text-[#425180] font-bold mb-4">Register</h3>
                    <p className='text-sm mb-5 font-roboto '> Enter to get unlimited access to data & information.</p>
                    <form autoComplete="off">
                        <p className=' w-full flex items-start justify-between '> Nama</p>
                        <input 
                            type="text"
                            placeholder='Enter Your name'
                            className='w-full text-black py-4 my-4 bg-white border border-[#C1D1FF] rounded-md p-2.5 '
                            autoComplete="off"
                        />
                    <p className='w-full flex items-start justify-between'>Email</p>
                    <input 
                        type="email"
                        placeholder='Enter Your email'
                        className='w-full text-black py-4 my-4 bg-white border border-[#C1D1FF] rounded-md p-2.5' 
                        autoComplete="off"
                    />
                    <p className='w-full flex items-start justify-between'>Address</p>
                    <input 
                        name="address-input"
                        type="text"
                        placeholder='Enter Your address'
                        className='w-full text-black py-4 my-4 bg-white border border-[#C1D1FF] rounded-md p-2.5' 
                        autoComplete="off"
                    />
                    <p className='w-full flex items-start justify-between'>Password</p>
                    <input 
                        name="password-input"
                        type="password"
                        placeholder='Enter Your password'
                        className='w-full text-black py-4 my-4 bg-white border border-[#C1D1FF] rounded-md p-2.5' 
                        autoComplete="off"
                    />
                    </form>

                    <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center'>
                            <input type='checkbox' className='w-4 h-4 mr-2'/>
                            <p className='text-sm'> Remember me </p>
                        </div>
                        <p className='text-sm font-semibold text-[#576CAA]'>Forgot your password ?</p>
                    </div>

                    <div className='w-full flex flex-col my-4'>
                        <button className='w-full text-white bg-[#576CAA] rounded-md p-4 text-center flex items-center justify-center'>
                            Register Now
                        </button>
                    </div>

                    <div className='w-full flex items-center justify-center relative py-2'>
                        <div className='w-full h-[1px] bg-[#C1D1FF]'></div>
                        <p className='text-lg absolute text-grey bg-white'>Or, Register with</p>
                    </div>

                    <div className='w-full flex flex-col my-4'>
                        <button className='w-full text-black bg-white border border-[#C1D1FF] rounded-md p-4 text-center flex items-center justify-center'>
                            <img src={GOOGLE_IMAGE} className='h-6 mr-2'/>
                            Register with Google
                        </button>
                    </div>

                    <div className='w-full flex items-center justify-center'>
                    <p className='text-sm font-normal text-black'>Already have an account ? <Link to="/" className='font-semibold underline text-[#576CAA]'>Login here</Link></p>

                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Register;
