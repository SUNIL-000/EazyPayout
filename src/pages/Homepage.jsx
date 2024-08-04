import React from 'react'
import { IoMdDownload } from "react-icons/io";
const Homepage = () => {
    return (
        <section>
            <div className='w-full h-auto md:h-[70vh] py-8 flex flex-col md:flex-row justify-evenly bg-[#f5efee] items-center '>

                {/* introduction part  */}
                <div className='md:w-1/2 order-2 md:order-1  px-10 '>
                    <h1 className='text-2xl md:text-5xl my-3'>Hi there I'm <span className='text-[#914F1E] '>Sunil Kumar</span></h1>
                    <p className=' text-xl md:text-2xl text-[#322012bc] text-wrap text-justify'>A passionate and versatile full-stack developer with a knack for creating dynamic, responsive,
                        and user-friendly web applications.
                        With experience in both front-end and back-end development,
                        I enjoy bringing ideas to life through code.</p>
                    <a href='/RESUME.pdf' download className='flex justify-center items-center w-auto md:w-[150px]   gap-x-2 bg-[#914F1E] cursor-pointer hover:bg-[#91501ed9] transition-all rounded-full shadow-md text-white py-4 mt-2 '>my resume <span><IoMdDownload /></span></a>
                </div>
 
                {/* images part  */}
                <div className='order-1 md:order-2 ' >
                    <img src="/avatar.jpg" height={300} width={300} className='rounded-full shadow-md' alt="avatar" />
                </div>
            </div>
        </section>
    )
}

export default Homepage