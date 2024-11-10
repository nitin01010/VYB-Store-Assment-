"use client";
import React, { useState } from 'react'
import Logo from '../../public/logo.png';
import manIcon from '../../public/manIcon.png';
import Vector from '../../public/Vector.png';
import { Menu, X, Pen, UserRound, MapPin, Headset, Info } from 'lucide-react';
import LogoNewImage from '../../public/girlimage.jpg'

const MobileMenu = () => {
    return (
        <>
            <div className='backdrop-blur-md bg-black/80 transition-all duration-300 ease-in-out absolute z-50 top-[74px] h-screen w-[80%] right-0 rounded-l-lg  xl:hidden 2xl:hidden p-[24px]'>
                <img src={ LogoNewImage.src } className=' object-cover w-[120px] h-[120px] rounded-[368px]' />
                <div className=' flex gap-3 items-center mt-3 w-[132px]'>
                    <Pen color='#00DC82' size={ 20 } />
                    <p className=' font-semibold text-[#00DC82] leading-[14.52px] text-[12px]'>Change Profile Picture</p>
                </div>
                <div className=' flex flex-col mt-[8px] px-6 '>
                    <b>
                        <p className=' text-[18px] font-semibold text-white'>Samira Hadid</p>
                    </b>
                    <p className=' text-[18px] text-white'>@samirahadid</p>
                </div>
                <div className=' flex text-white gap-3 mt-4 px-4'>
                    <UserRound />
                    <p>Profile</p>
                </div>
                <div className=' flex text-white gap-3 mt-8 px-4'>
                    <MapPin />
                    <p>Address</p>
                </div>
                <div className=' flex text-white gap-3 mt-8 px-4'>
                    <Headset />
                    <p>Contact us</p>
                </div>
                <div className=' flex text-white gap-3 mt-8 px-4'>
                    <Info />
                    <p>About us</p>
                </div>
            </div>

        </>
    )
}

const Header = () => {
    const [status, Setstatus] = useState(false);
    console.log(status);
    return (
        <div className=' flex gap-10 py-2 justify-between '>

            <div className=' flex gap-4 items-center'>
                <img src={ Logo.src } className=' w-[65px] h-[39px]  md:w-[105px] md:h-[63px]' />
                <input type="text" className='  rounded-3xl font-semibold bg-white w-[225px] md:w-[290px] h-[50px] px-10 outline-none' placeholder='Search Creator/Product '>
                </input>
            </div>

            {
                status ? <X color='white' size={ 35 } onClick={ () => Setstatus(!status) } className=' mt-2 mr-3  md:mr-10 xl:hidden 2xl:hidden ' /> : <Menu color='white' onClick={ () => Setstatus(!status) } className=' mt-2 mr-3  md:mr-10 xl:hidden 2xl:hidden ' size={ 35 } />
            }

            {
                status ? <MobileMenu /> : null
            }


            <div className='  gap-10 items-center hidden xl:flex text-white'>
                <ul className=' flex gap-16 xl:text-balance 2xl:text-xl  font-bold'>
                    <li>Fav Creators</li>
                    <li>Merchandise</li>
                    <li>Brand</li>
                    <li>Digital</li>
                </ul>

                <div className=' bg-white w-[100px] h-[41px] rounded-[16px] flex items-center justify-around'>
                    <img src={ manIcon.src } className=' object-contain bg-[#F8F9FB] w-[25px] p-1 h-[25px] rounded-3xl' />
                    <img src={ Vector.src } className=' object-contain bg-[#F8F9FB] w-[25px] p-1 h-[25px] rounded-3xl' />
                </div>
            </div>

        </div>
    )
}

export default Header