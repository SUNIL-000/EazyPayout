import { useRef, useState } from 'react'
import { ImCross } from "react-icons/im";
import { Link } from 'react-scroll';
import { avatar, tags } from '../assets/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Navbar = () => {
    const [isOn, setisOn] = useState(false)
    const navbar = useRef()
    const mobileNav = useRef()

    const { contextSafe } = useGSAP();
    useGSAP(() => {
        gsap.set(navbar.current, { y: '-100%' });

        gsap.to(navbar.current, {
            y: 0,
            duration: 1,
            delay: 0.4,
            ease: 'power3.out'
        });
    })

   


    return (
        <>
            <nav >
                <div ref={navbar} className='flex bg-[#f5efee] w-auto shadow-md rounded-md m-1 p-3 md:px-32 justify-between items-center'>

                    {/* logo div */}
                    <div className='flex justify-center items-center '>
                        <img src={avatar} height={50} width={50} alt="name" className='rounded-full object-cover' />
                    </div>
                    {/* menu items  */}
                    <div className=' md:flex hidden  md:visible  justify-center items-center gap-5 '>
                        {tags.map((item, index) => {
                            return <Link to={item.link} smooth={500} key={index} className='uppercase  hover:text-[#91501ecd] hover:border-b-2  transition hover:border-[#914F1E]  cursor-pointer list-none font-bold text-[#914F1E] '>
                                {item?.name}
                            </Link>
                        })}

                    </div>
                    <div className='visible md:hidden cursor-pointer'>
                        <img src="/menu.png" width={30} height={30} alt="hamburger" onClick={() => { setisOn(!isOn) }} />
                    </div>
                </div>

                {/* mobile menu  */}
                <div  className={`bg-[#f5efee] md:hidden rounded-md w-full ${isOn ? "visible" : "hidden"}  flex flex-col relative  `}>

                    {tags.map((item, index) => {
                        return <Link to={item.link} smooth={400} key={index} className='uppercase list-none text-[#914F1E] hover:text-[#91501ecd] hover:border-b-2 cursor-pointer transition hover:border-[#914F1E]   font-bold mx-auto p-4'>
                            {item?.name}
                        </Link>
                    })}
                    <h1 className='absolute right-10 font-bold cursor-pointer text-[#914F1E] ' onClick={() => { setisOn(!isOn) }}>
                        <ImCross />
                    </h1>
                </div>
            </nav>
        </>
    )
}

export default Navbar 
