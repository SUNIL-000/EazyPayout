import React from 'react'
import { skill } from '../assets/data'
const Skill = () => {
    return (
        <section className='py-6 bg-[#f5efee] shadow-lg'>
            <h1 className='text-center text-2xl m-6 md:text-4xl '> My <span className=' text-[#914F1E] '>Skills</span></h1>

            <div className='flex w-full  flex-col md:flex-row  flex-wrap  justify-evenly'>
                {skill.map((data, index) => (
                    <div key={index} className={`mt-2 w-auto  p-6 flex flex-col mx-auto justify-start items-start`}>
                        <h1 className=' text-2xl   text-[#000000d4] '>{data.title}</h1>
                        <div className=' grid grid-cols-2 items-start md:grid-cols-4 gap-2'>
                            {data.skills.map((item, subIndex) => (
                                <span key={subIndex} className='flex gap-1 justify-center items-start rounded-md p-2  text-black '>
                                    <img src={item.url} alt={item?.name} height={30} width={30} />
                                    <span className=' text-[#855531] '>{item?.name}</span></span>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skill