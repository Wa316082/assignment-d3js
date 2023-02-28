import React, { useState } from "react";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";

const Topbar = () => {
    const [isToggled, setToggled] = useState(false)

    const toggleMenu = ()=>{
        setToggled(!isToggled)
        console.log(isToggled);
    }
  return (
    <div className="w-full h-16 bg-white px-4 flex items-center justify-between shadow-md ">
      <ul className="flex items-center justify-between gap-3">
        <li className="py-2 px-3 text-slate-500 hover:text-sidebar  cursor-pointer">
          Home
        </li>

        <li className="py-2 px-3 text-slate-500 hover:text-sidebar  cursor-pointer">
          About
        </li>
      </ul>

      <div className="flex items-center justify-between gap-3 relative">
        <span onClick={toggleMenu} className="w-12 h-12 bg-gray-500 cursor-pointer rounded-full"></span>
        <span>Username</span>
         
         
         <ul className={`${isToggled ? ' translate-y-2 transition-all duration-200 disabled:collapse ':'collapse '} w-44 bg-white p-2 rounded-md absolute right-0 shadow-md top-14`}>
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
