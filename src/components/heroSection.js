"use client";
import { ArrowUpRight } from 'lucide-react';
import React, { useState } from 'react';
import Image1 from '../../public/baeasf.png'
import Image2 from '../../public/granola.png'
import Image3 from '../../public/High.png'
import Image4 from '../../public/imag4.png'
import Image5 from '../../public/imag5.png'
import imag6 from '../../public/imag6.png';
import Frame from '../../public/Frame.png';
import City from '../../public/city.jpg';
import aval from '../../public/aval.jpg';
import indiaGate from '../../public/indiaGate.png';
import flowImage from '../../public/flowimage.png';
import Group from '../../public/Group.png';
import Ellipse from '../../public/Ellipse.png';
import manLogo from '../../public/manLogo.jpg';
import Group1215 from '../../public/Group 1215.png';
import Group1220 from '../../public/Group 1220 (1).png';
import Group1 from '../../public/Group (1).png';
import girlimage from '../../public/girlimage.jpg';
import bounewbaby from '../../public/bounewbaby.jpg';
import girnewbaby from '../../public/girnewbaby.png';
import majsjwll from '../../public/f6d52cf5640f8343c99cae7f9c2414c6.jpg';
import jdjdjnwn from '../../public/2100d058ce674748dc15ee3f116bc2af.jpg';
import IconsNew from '../../public/Icon.png';
import Google from '../../public/e0fcee1bc5cde77e98ee1311d1d128b1.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImageArray = [aval, City, indiaGate, indiaGate, indiaGate, indiaGate, indiaGate];

const HeroSection = () => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleClick = (index) => {
        setClickedIndex(clickedIndex === index ? null : index);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email) {
            toast.error("Please enter your email");
            return;
        }
        if (!password) {
            toast.error("Please enter your password");
            return;
        }
        toast.success("Send");
    };

    return (
        <>
            <div className='text-white p-1 flex flex-wrap md:flex-nowrap gap-1 justify-between' >
                <div className='w-[582px] p-1'>
                    <div className='flex gap-2 mb-2'>
                        <p className='bg-white p-1 w-[91px] h-[64px] md:h-[97px] md:w-[140px] rounded-[16px] text-[40px] md:text-[64px] text-black font-bold transition transform '>One</p>
                        <p className='bg-white p-1 w-[102px] h-[64px] md:w-[150px] md:h-[97px] rounded-[16px] text-[40px] md:text-[64px] text-black font-bold transition transform '>Stop</p>
                    </div>
                    <p className='bg-white w-[245px] p-1 mb-2 h-[64px] text-[40px] md:w-[386px] md:h-[97px] rounded-[16px] md:text-[64px] text-black font-bold transition transform '>Marketplace</p>
                    <div className='flex gap-2'>
                        <p className='bg-white p-1 w-[72px] md:w-[140px] md:h-[97px] rounded-[16px] text-[40px] md:text-[64px] text-black font-bold transition transform '>For</p>
                        <p className='bg-[#00DC82] p-1 w-[250px] md:w-[340px] h-[64px] md:h-[97px] rounded-[16px] text-[40px] md:text-[64px] text-black font-bold transition transform '>Influencers</p>
                    </div>
                    <p className='text-[24px] w-[328px] md:text-[40px] md:w-[582px] mb-2 mt-6 font-semibold transition-opacity duration-500 ease-in-out opacity-80 '>
                        "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create Merch, and Share Content – All in One Hub."
                    </p>
                    <br />
                    <div className='flex  gap-3 md:gap-14'>
                        <button className='w-[144px] h-[54px] rounded-[18px] bg-[#00DC82] text-black font-semibold transition transform hover:scale-105'>Demo Store</button>
                        <button className="w-[144px] h-[54px] rounded-[18px] border-2 border-emerald-400 font-semibold transition transform hover:scale-105">
                            Join Waitlist
                        </button>
                    </div>
                </div>

                <div className="flex flex-col p-1 gap-2 w-[582px] ">
                    <div className="grid grid-cols-2 gap-1  md:gap-2">
                        <img src={ Image1.src } />
                        <img src={ Image2.src } />
                    </div>
                    <div className="grid grid-cols-2 gap-1  md:gap-2">
                        <img src={ Image3.src } />
                        <img src={ Image4.src } />
                    </div>
                    <div className="grid grid-cols-2 gap-1  md:gap-2">
                        <img src={ Image5.src } />
                        <img src={ imag6.src } />
                    </div>
                </div>
            </div>

            <br />

            <div className='  bg-[#000000] flex justify-between items-center p-[16px]  md:p-[24px] h-[64px] md:h-[112px] rounded-[24px] w-[95%] md:w-full m-auto'>
                <p className=' text-[20px]  md:text-[34px] text-[#FFFFFF] font-bold px-1  md:px-10 leading-[40.8px]'>Travel</p>
                <p className=' text-[20px]  md:text-[34px] text-[#FFFFFF] font-bold leading-[40.8px]'>Digital</p>
                <p className=' text-[20px]  md:text-[34px] text-[#FFFFFF] font-bold leading-[40.8px]'>Brand</p>
                <p className=' text-[20px]  md:text-[34px] text-[#FFFFFF] font-bold px-1  md:px-10 leading-[40.8px]'>Merch</p>
            </div>

            <br />

            <div>
                <div
                    className=" object-fill md:object-fill h-[155px]  md:h-[540px]  rounded-t-[32px] w-[95%]  md:w-[100%] m-auto"
                    style={ { backgroundImage: `url(${Frame.src})` } }
                >
                    <p className=' text-[40px] md:text-[180px] text-center font-bold text-[#FFFFFF]'>TRAVEL</p>
                    <div className=' w-[280px]  md:w-[700px] m-auto'>
                        <p className=' text-white font-semibold text-center text-[14px]  md:text-[34px]'>Turn your travel experience into itinerary, travel package with VYB Store and share it with your true followers.</p>
                    </div>
                </div>

                <p className=' text-[34px]  mt-10  md:mt-20 mb-10 font-bold text-center py-4 text-white '>Explore Our Curated Travel Itineraries</p>

                <div className="hiddenScroll flex overflow-x-scroll gap-[24px]">
                    { ImageArray.map((item, index) => (
                        <div
                            key={ index }
                            className="w-[270px]  min-w-[270px] h-[480px] mb-10 rounded-[16px] bg-cover bg-center flex flex-col justify-between p-4"

                            style={ { backgroundImage: `url(${item.src})`, marginLeft: index === 0 ? "10px" : null } }
                        >
                            <div className="flex-grow"></div> {/* This pushes content to the bottom */ }
                            <div className="text-center">
                                <p className="text-white text-[22px] font-bold leading-[26.4px]">
                                    Munnar Itinerary <br />
                                    Kerala
                                </p>
                                <div className="w-[200px] flex justify-between items-center h-[41px] rounded-3xl bg-[#FFFFFF] mt-2 m-auto">
                                    <p className="text-[18px] font-bold px-4">Samira Hadid</p>
                                    <img src={ Image4.src } className="border rounded-3xl w-[30px] mr-2 h-[30px]" />
                                </div>
                            </div>
                        </div>
                    )) }
                </div>

                <p className=' text-center text-[34px] text-white font-bold'>How to list?</p>
                <div className=' relative' >
                    <img src={ flowImage.src } className=' w-full rounded-b-lg object-contain' />
                    <img src={ Group.src } className=' object-fill  top-[30px] absolute   ' />
                    <img src={ Ellipse.src } className=' object-fill   right-0 bottom-2 md:bottom-10     absolute  ' />
                </div>

                <div className='flex flex-wrap xl:flex-nowrap items-center justify-between mt-1 md:mt-20   '>
                    <b> <p className=' text-[#00DC82]  w-[100%]  text-center  xl:w-[480px] text-[30px] xl:text-[40px] xl:leading-[48px] font-bold'>From Creation to Monetization: Vyb Store  Has It All</p></b>
                    <div className='grid grid-cols-1  md:grid-cols-2  m-auto    xl:grid-cols-2 gap-6 mt-2 '>
                        <div className=' bg-black shadow-2xl w-[355px] h-[366px] text-white rounded-[24px] p-[24px] gap-[24px]'>
                            <p className=' text-[34px] text-center font-semibold'>Trusted By Influencers</p>
                            <p className=' text-[18px] leading-[21.6px] text-center mt-3 font-semibold h-[44px]'>A trusted platform for influencers to grow and earn.</p>
                            <div className='  relative m-auto w-[190px] mt-2 h-[160px] '>
                                <img src={ manLogo.src } className=' object-cover z-50 -top-[30px] left-2 absolute w-[80px] h-[80px] rounded-[368px]  mt-10 m-auto' />
                                <img src={ girlimage.src } className=' object-cover z-10 right-7 -top-[30px] absolute w-[80px] h-[80px] rounded-[368px]  mt-10 m-auto' />
                                <img src={ bounewbaby.src } className=' object-cover top-[40px]  z-30 left-2 absolute w-[80px] h-[80px] rounded-[368px]  mt-10 m-auto' />
                                <img src={ girnewbaby.src } className=' object-cover z-20 right-7 top-[50px] absolute w-[80px] h-[80px] rounded-[368px]  mt-10 m-auto' />
                            </div>
                        </div>
                        <div className=' bg-black shadow-2xl w-[355px] h-[366px] text-white rounded-[24px] p-[24px] gap-[24px]'>
                            <p className=' text-[34px] text-center font-semibold'>Secured Data</p>
                            <p className=' text-[18px] leading-[21.6px] text-center mt-3 font-semibold h-[44px]'>Advanced security measures to protect your valuable data</p>
                            <img src={ Group1220.src } className=' object-contain w-[190px] h-[160px] mt-10 m-auto' />
                        </div>

                        <div className=' bg-black shadow-2xl w-[355px] h-[366px] text-white rounded-[24px] p-[24px] gap-[24px]'>
                            <p className=' text-[34px] text-center font-semibold'>Authentic Payment Partner</p>
                            <p className=' text-[18px] leading-[21.6px] text-center mb-4  font-semibold h-[44px]'>Reliable, fast, and secure payments you can trust</p>
                            <img src={ Group1.src } className=' object-contain w-[149px] h-[160px] m-auto' />
                        </div>

                        <div className=' bg-black shadow-2xl w-[355px] h-[366px] text-white rounded-[24px] p-[24px] gap-[24px]'>
                            <p className=' text-[34px] text-center font-semibold'>Monetize Your Influence</p>
                            <p className=' text-[18px] leading-[21px] text-center  font-semibold h-[44px]'>Seamlessly turn your influence into consistent revenue</p>
                            <img src={ Group1215.src } className=' object-contain w-[190px] h-[190px] m-auto' />

                        </div>
                    </div>
                </div>

                <div className=' md:py-20'>
                    <p className='text-[34px] font-bold text-[#00DC82] text-center'>Our Influencers</p>
                    <div className="grid lg:xl:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 mt-[5%] gap-5 justify-center items-center">
                        <div className="relative group w-[268px] h-[268px]">
                            <img
                                src={ manLogo.src }
                                className="object-cover grayscale group-hover:grayscale-0 transition-all ease-linear shadow-2xl bg-black w-full h-full rounded-full"
                            />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-lg bg-white mt-40 font-bold z-50 flex items-center justify-around w-[100px] rounded-3xl py-1 text-center">
                                    Nitin <ArrowUpRight className=' cursor-pointer' />
                                </p>
                            </div>
                        </div>

                        <div className="relative group w-[268px] h-[268px]">
                            <img
                                src={ jdjdjnwn.src }
                                className="object-cover grayscale group-hover:grayscale-0 transition-all ease-linear shadow-2xl bg-black w-full h-full rounded-full"
                            />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-lg bg-white mt-40 font-bold z-50 flex items-center justify-around w-[100px] rounded-3xl py-1 text-center">
                                    Nitin <ArrowUpRight className=' cursor-pointer' />
                                </p>
                            </div>
                        </div>

                        <div className="relative group w-[268px] h-[268px]">
                            <img
                                src={ girlimage.src }
                                className="object-cover grayscale group-hover:grayscale-0 transition-all ease-linear shadow-2xl bg-black w-full h-full rounded-full"
                            />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-lg bg-white mt-40 font-bold z-50 flex items-center justify-around w-[100px] rounded-3xl py-1 text-center">
                                    Nitin <ArrowUpRight className=' cursor-pointer' />
                                </p>
                            </div>
                        </div>

                        <div className="relative group w-[268px] h-[268px]">
                            <img
                                src={ majsjwll.src }
                                className="object-cover grayscale group-hover:grayscale-0 transition-all ease-linear shadow-2xl bg-black w-full h-full rounded-full"
                            />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-lg bg-white mt-40 font-bold z-50 flex items-center justify-around w-[100px] rounded-3xl py-1 text-center">
                                    Nitin <ArrowUpRight className=' cursor-pointer' />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=' py-10 md:py-20'>
                    <p className='text-[34px] font-bold text-[#00DC82] text-center'>How to get started?</p>
                    <div className=' flex justify-center items-center py-10'>
                        <div className=' flex justify-around bg-[#A94949] w-[95%] md:w-[840px]  md:h-[377px] max-w-[840px] rounded-[24px]  p-[36px]  flex-wrap md:flex-nowrap'>
                            <div className='  md:w-[340px]  md:h-[145px] max-w-[340px] py-10'>
                                <p className=' text-[27px] font-bold text-white mb-8' >Sign Up and create your own store hassle-free.</p>
                                <p className=' text-[16px] font-semibold  text-white'>Join us via google signin and verify your influencer status by entering you social media Id and unlock your store @ zero cost.</p>
                            </div>
                            <div className=' bg-[#181818] w-[212px] h-[305px] rounded-[16px] p-[16px] '>
                                <div onClick={ () => toast.success("Comming Soon....") } className=' flex w-[180px] h-[33px] rounded-[8px] border border-[#D9D9D9] text-white  justify-center items-center gap-4 '>
                                    <img src={ Google.src } className=' w-[15px] h-[15px]' />
                                    <p className=' text-[14px] font-bold'>Login with google</p>
                                </div>
                                <p className=' text-center py-2 mt-2 text-white'>Or</p>
                                {/* <div className=' flex flex-col gap-6 '>
                                    <input type="email" className=' w-[180px] h-[46px] border-b-2 transition-all ease-linear text-white   hover:border hover:border-purple-500 rounded bg-transparent font-[18px] text-center outline-none  ' placeholder='Email' />
                                    <input type="password" className=' w-[180px] h-[46px] border-b-2 transition-all ease-linear text-white   hover:border hover:border-purple-500 rounded bg-transparent font-[18px] text-center outline-none  ' placeholder='Password' />
                                    <button className=' w-[80px] h-[38px] max-w-[142px] rounded-[12px] border border-[#00DC82] shadow-2xl m-auto text-[#00DC82] '>Login</button>
                                </div> */}

                                <div className='flex flex-col gap-6'>
                                    <input
                                        type="email"
                                        className='w-[180px] h-[46px] border-b-2 transition-all ease-linear text-white hover:border hover:border-purple-500 rounded bg-transparent font-[18px] text-center outline-none'
                                        placeholder='Email'
                                        value={ email }
                                        onChange={ (e) => setEmail(e.target.value) }
                                    />
                                    <input
                                        type="password"
                                        className='w-[180px] h-[46px] border-b-2 transition-all ease-linear text-white hover:border hover:border-purple-500 rounded bg-transparent font-[18px] text-center outline-none'
                                        placeholder='Password'
                                        value={ password }
                                        onChange={ (e) => setPassword(e.target.value) }
                                    />
                                    <button
                                        onClick={ handleLogin }
                                        className='w-[80px] h-[38px] max-w-[142px] rounded-[12px] border border-[#00DC82] shadow-2xl m-auto text-[#00DC82]'
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="flex justify-between items-start flex-wrap md:flex-nowrap px-1  md:px-10 py-8">
                    <div className="py-10 w-[516px] flex flex-col gap-[16px]">
                        <p className="text-[#00DC82] text-[34px] font-semibold">FREQUENTLY ASKED QUESTIONS</p>
                        <p className="text-white text-[18px]">
                            Quick answers to questions you may have. Can’t find what you're looking for?
                            Check out our full documentation.
                        </p>
                    </div>

                    <div className=" flex flex-col gap-5 py-2 p-2 w-full  md:max-w-[619px]">
                        { ([...Array(4)]).map((_, index) => (
                            <div key={ index }>
                                <div className="flex justify-around border-b-4 rounded-t-lg w-full xl:w-[619px] items-center shadow-2xl bg-white  h-[48px]">
                                    <p className="text-center font-bold text-[16px]">How much does it cost to set up a store?</p>
                                    <img src={ IconsNew.src } alt="Icon" className="w-[20px] h-[20px] cursor-pointer" onClick={ () => handleClick(index) } />
                                </div>
                                { clickedIndex === index && (
                                    <div className="-mt-1 p-4 bg-white shadow-xl w-full xl:w-[619px] ">
                                        <p className="text-center font-semibold text-[16px]">
                                            The cost to set up a store depends on various factors like location, product type, and scale. It can range
                                            from a few hundred dollars for small online stores to several thousand dollars for physical retail spaces.
                                        </p>
                                    </div>
                                ) }
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
