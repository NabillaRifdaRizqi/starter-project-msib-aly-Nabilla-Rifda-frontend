import React from 'react';
import LOGO_IMAGE from '../assets/logo.png';
import PROFILE_IMAGE from '../assets/profile.jpg';

const Profile = () => {
    return (
        <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931] ">
            <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
    <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12 border-none">
        <div className="flex items-center mb-4">
            <img 
                src={LOGO_IMAGE} 
                className="w-10 h-auto mr-4" 
                alt="Logo" 
            />
            <h2 className="text-2xl font-semibold">Bilcodemy</h2>
        </div>
        <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-md w-44  transition-all duration-300 hover:bg-indigo-100">
            Home
        </a>
        <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-md w-44 transition-all duration-300 hover:bg-indigo-100">
            Kursus
        </a>
        <a href="#" className="flex items-center px-3 py-2.5 font-bold text-indigo-900 border rounded-md w-44 bg-indigo-100">
            Profile
        </a>
        <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-md w-44 transition-all duration-300 hover:bg-indigo-100">
            Contact
        </a>
    </div>
</aside>

<main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
    <div className="p-1 md:p-2 bg-white flex-1 border-[2px] radius-15px mx-auto sm:max-w-md rounded-md ">
        <div className="w-full px-6 pb-8 mt-8 sm:rounded-lg">
            
            <div className="grid max-w-2xl mx-auto mt-8">
                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                    <img
                        className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                        src={PROFILE_IMAGE}
                        alt="Profile"
                    />
                    <div className="flex flex-col space-y-5 sm:ml-8">
                        <button
                            type="button"
                            className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#576CAA] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200"
                        >
                            Change picture
                        </button>
                        <button
                            type="button"
                            className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200"
                        >
                            Delete picture
                        </button>
                    </div>
                </div>
                <div className="items-center mt-8 sm:mt-14 text-[#202142] flex flex-col sm:flex-row">
                    <div className="w-40 mr-4">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white items-center text-left">Your first name</label>
                        <input
                            type="text"
                            id="first_name"
                            className="bg-indigo-100 border border-[#C1D1FF] text-indigo-900 text-sm rounded-md  focus:ring-indigo-500 focus:border-indigo-500 block w-40 p-2.5"
                            placeholder="Your first name"
                            defaultValue="Nabilla"
                            required
                        />

                    </div>
                    <div className="w-40">
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white items-center text-left">Your last name</label>
                        <input type="text" 
                        id="last_name" 
                        className="bg-indigo-100 border border-[#C1D1FF] text-indigo-900 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-52 p-2.5" 
                        placeholder="Your last name" 
                        value="Rifda" 
                        required
                         />
                    </div>
                </div>

                <div className="mb-2 sm:mb-6 mt-4">
                    <label htmlFor="kursus" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white items-center text-left">Your kursus</label>
                    <input type="text" id="kursus" className="bg-indigo-100 border border-[#C1D1FF] text-indigo-900 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-96 p-2.5" required />
                </div>
                <div className="mb-2 sm:mb-6">
                    <label htmlFor="profession" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white items-center text-left">Your email</label>
                    <input type="email" id="profession" className="bg-indigo-100 border border-[#C1D1FF] text-indigo-900 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-96 p-2.5" placeholder="your.email@mail.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="nohp" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white items-center text-left">no Hp</label>
                    <input type="text" id="nohp" className="bg-indigo-100 border border-[#C1D1FF] text-indigo-900 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-96 p-2.5"  required />
                </div>
                <div className="flex justify-start w-full">
                    <button type="submit" className="text-white bg-[#576CAA] hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
                </div>

            </div>
        </div>
    </div>
</main>

<div className="flex justify-end">
    <div className="p-1 md:p-2 bg-white flex-1 border-[2px] radius-15px mx-auto sm:max-w-md h-96 rounded-md ">
        <div className="items-center mt-8 sm:mt-14 text-[#202142]">
            <div className="flex flex-col w-full space-y-2">
                <div className="w-full  items-center text-[#202142] text-left">
                    <label htmlFor="old_password" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Password Lama</label>
                    <input
                        type="password"
                        id="old_password"
                        className="bg-indigo-100 border border-[#C1D1FF] text-indigo-900 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-80 p-2.5"
                        required
                    />
                </div>
                <div className="w-full mb-8 sm:mb-8 items-center text-[#202142] text-left">
                <label htmlFor="new_password" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Password Baru</label>
                <input
                    type="password"
                    id="new_password"
                    className="bg-indigo-100 border border-[#C1D1FF] text-indigo-900 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-80 p-2.5"
                    required
                />
            </div>

                <div className="w-full mb-4 sm:mb-8 items-center text-[#202142] text-left">
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Masukkan Lagi</label>
                    <input
                        type="password"
                        id="confirm_password"
                        className="bg-indigo-100 border border-[#C1D1FF] text-indigo-900 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-80 p-2.5"
                        required
                    />
                </div>
                <div className="flex justify-start w-full mb-4 sm:mb-4">
                    <button type="submit" className="text-white bg-[#576CAA] hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
                </div>
            </div>
        </div>
    </div>
</div>




        </div>
    );
}

export default Profile;
