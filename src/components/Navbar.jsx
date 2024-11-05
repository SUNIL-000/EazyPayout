import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-scroll';
import { avatar, tags } from '../assets/data';

const Navbar = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <nav className="relative w-full">
            {/* Navbar header with avatar and hamburger menu */}
            <div className="flex justify-between  px-3 md:px-10 items-center p-3 bg-[#f5efee] shadow-md rounded-md m-1">
                {/* Avatar */}
                <div className="flex items-center">
                    <img src={avatar} alt="Avatar" className="w-12 h-12 rounded-full object-cover" />
                </div>

                {/* Desktop Menu */}
                <ul className="flex gap-5 items-center">
                    {tags.map((item, index) => (
                        <li key={index} className="font-bold uppercase text-[#914F1E] hover:text-[#91501ecd] cursor-pointer transition hover:border-b-2 hover:border-[#914F1E]">
                            <Link to={item.link} smooth={500} duration={500}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>


                {/* Hamburger Icon for Mobile */}
                {/* <div className="block md:hidden cursor-pointer" onClick={() => setIsOn(!isOn)}>
                    <img src="/menu.png" alt="Menu" width="30" height="30" />
                </div>
            </div>

            {/* Mobile Menu */}
            {/* {isOn && (
                <div className="absolute top-full left-0 w-full bg-[#f5efee] min-h-screen z-50 flex flex-col items-center gap-5 py-5">
                    {tags.map((item, index) => (
                        <Link
                            key={index}
                            to={item.link}
                            smooth={400}
                            onClick={() => setIsOn(false)}
                            className="uppercase text-[#914F1E] font-bold cursor-pointer transition hover:text-[#91501ecd] hover:border-b-2 hover:border-[#914F1E] py-2"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ImCross className="absolute top-3 right-3 cursor-pointer text-[#914F1E]" onClick={() => setIsOn(false)} />
            )} */} 
                </div>
        </nav>
    );
};

export default Navbar;
