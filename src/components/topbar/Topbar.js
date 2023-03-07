import React, { useState } from "react";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { BiBell, BiLogOutCircle } from "react-icons/bi";
import { HiBars4 } from "react-icons/hi2";
import profile from "../../assets/images/images.jpeg";


const Topbar = () => {
    const [isToggled, setToggled] = useState(false)

    const toggleMenu = ()=>{
        setToggled(!isToggled)
        console.log(isToggled);
    }
  return (
    <div className="fixed w-4/5 h-16 bg-white px-4 flex items-center justify-between shadow-md ">
      <ul className="flex items-center justify-between gap-3">
      <li className="py-3 px-3 text-slate-500 hover:text-sidebar  hover:bg-gray-100 rounded-full  cursor-pointer ">
          <span className="text-xl"><HiBars4 /></span>
        </li>
        <li className="py-2 px-3 text-slate-500 hover:text-sidebar cursor-pointer">
          Home
        </li>

        <li className="py-2 px-3 text-slate-500 hover:text-sidebar  cursor-pointer">
          About
        </li>
      </ul>

      <div className="flex items-center justify-between gap-3 relative">
      <span className="w-12 h-12 cursor-pointer rounded-full hover:bg-gray-100 flex items-center justify-center text-2xl relative "> {<BiBell />} <span className="absolute -top-1 -right-2 text-sm px-2 py-1 font-medium rounded-full bg-red-500 text-white ">12</span> </span>
        <span onClick={toggleMenu} className="w-12 h-12 bg-gray-500 cursor-pointer rounded-full"> <img className="rounded-full" src={profile} alt='User'/> </span>
        <span>Username</span>
         
         
        <ul className={`${isToggled ? '   scale-100 opacity-100 transition-all duration-200 disabled:collapse ' : 'collapse saturate-50 opacity-0 n scale-75'} w-44 bg-white p-2 rounded-md absolute right-20 shadow-md top-16`}>
          <li className="p-2 hover:bg-slate-400 rounded-md flex items-center justify-start gap-3 cursor-pointer transition-all duration-300">
            <span className="text-lg pt-1">{<AiOutlineSetting />}</span>  Settings
          </li>
          <li className="p-2 hover:bg-slate-400 rounded-md flex items-center justify-start gap-3 cursor-pointer transition-all duration-300">
            <span className="text-lg pt-1">{<AiOutlineUser />}</span> Profile
          </li>
          <li className="p-2 hover:bg-slate-400 rounded-md flex items-center justify-start gap-3 cursor-pointer transition-all duration-300">
            <span className="text-lg pt-1">{<BiLogOutCircle />}</span> Sign Out
          </li>
        </ul>
     
      </div>
    </div>
  );
};

export default Topbar;
