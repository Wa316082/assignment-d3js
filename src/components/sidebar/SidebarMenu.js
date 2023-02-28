import React, { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";
import { FiChevronRight } from 'react-icons/fi';

const SidebarMenu = ({ logo, text, submenuItems }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <div onClick={toggleExpand} className={`${isExpanded ? 'bg-cyan-300 text-sidebar' : 'bg-sidebar text-bodytextColor'} flex items-center justify-start py-2 px-4 gap-4 font-semibold text-base    hover:bg-cyan-300 cursor-pointer hover:text-sidebar transition-all duration-200 rounded-lg select-none`}> <span className='text-xl'>{logo} </span> <span className='w-full flex items-center justify-between'> {text} </span> <span className='text-lg'>{isExpanded ? <BiChevronDown /> : <FiChevronRight />}</span>
            </div>

            {isExpanded && (
                <ul className='mx-2 rounded-md bg-black flex flex-col items-start justify-center gap-1 border-b'>
                    {submenuItems && submenuItems.map((e, i) => (
                        <li key={i} className='text-bodytextColor py-2 px-6  cursor-pointer w-full flex items-center gap-4 hover:bg-cyan-900 rounded-md transition-all duration-200'>
                            <span className='p-1 border border-t-bodytextColor rounded-full '>{e.logo}</span>   {e.name}
                        </li>
                    ))}

                </ul>
            )}
        </>


    )
}

export default SidebarMenu