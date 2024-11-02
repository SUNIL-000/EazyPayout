import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { avatar } from '../assets/data';
import hero from '../assets/hero.json'
import Lottie from 'lottie-react';
const Homepage = () => {
    return (
        <section>
            <div className='w-full h-auto md:min-h-[85vh] md:relative mb-14 flex flex-col md:flex-row justify-around  items-center '>


                <img src="/graph.png"
                    className="hidden sm:absolute bottom-0 z-0 right-[4rem] ease-linear blur-[50px] md:animate-pulse bg-red-300 "
                    alt="gradient1" />

                <div className="absolute top-2 -left-40 md:top-3 z-0 md:left-1 opacity-[0.6] animate-bounce-once rotate-90 ease-linear blur-3xl  ">
                    <img src="/graph.png" alt="gradient1" />
                </div>

                {/* introduction part  */}
                <div className='md:w-1/2 order-2 md:order-1 px-10 md:px-0  z-10'>
                    <h1 className='text-3xl md:text-7xl my-3 font-bold'>Hi there I'm <span className='bg-gradient-to-r from-[#9e4e20] via-[#f4a272]  to-[#edb07e]  bg-clip-text text-transparent  '>Sunil Kumar</span></h1>
                    <p className=' text-xl md:text-2xl text-[#322012e9] text-wrap text-justify'>A passionate and versatile full-stack developer with a knack for creating dynamic, responsive,
                        and user-friendly web applications.
                        With experience in both front-end and back-end development,
                        I enjoy bringing ideas to life through code.</p>
                    <a href='/RESUME.pdf' download
                        className='flex justify-center items-center w-auto md:w-[150px] 
                     gap-x-2 bg-gradient-to-tr  from-[#FBAB7E]  to-[white]  cursor-pointer  
                     transition-all rounded-full shadow-2xl text-black py-4 mt-2 '>my resume <span><IoMdDownload /></span></a>
                </div>

                {/* images part  */}
                <div className='order-1 md:order-2 relative ' >
                    <Lottie animationData={hero}
                        className='h-[15rem] md:h-[30rem] -mt-18  md:-mt-16' />
                </div>
            </div>
        </section>
    )
}

export default Homepage