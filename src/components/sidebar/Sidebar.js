import React from 'react'
import { AiOutlineUser, AiTwotoneHome } from "react-icons/ai";
import { FiAirplay } from "react-icons/fi";
import { FaWpforms } from "react-icons/fa";
import SidebarMenu from './SidebarMenu';
import { BsBarChartSteps } from "react-icons/bs";
const Sidebar = () => {
    return (

        <div className='m-auto '>
            <div className='w-full py-1 bg-cyan-300'>
                <ul className='text-center text-sidebar p-3'>
                    <li className='text-xl font-semibold'><span className='font-medium text-emerald-800'>LOGO</span> Dashbord</li>
                </ul>

            </div>
            <div className='mt-4 p-3'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-start py-2 px-4 gap-4 font-semibold text-xl  text-textColor bg-cyan-300 text-sidebar rounded-lg'> <span className='text-xl'><FiAirplay /> </span> Dashbord</div>
                    <SidebarMenu logo={<AiTwotoneHome />} text="Home" submenuItems={[{ logo: <AiOutlineUser />, name: 'Contacts' }, { logo: <AiOutlineUser />, name: 'User' }]} />
                    <SidebarMenu logo={<BsBarChartSteps />} text="Charts" submenuItems={[{ logo: <FaWpforms />, name: 'Froms' }, { logo: <AiOutlineUser />, name: 'User' }]} />
                </div>
            </div>
        </div>

    )
}

export default Sidebar

