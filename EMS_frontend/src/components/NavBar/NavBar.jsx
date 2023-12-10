/* eslint-disable react/prop-types */
import { navList } from "../../utils/data/data"
import { Link } from "react-router-dom"
import { AiOutlineDashboard } from "react-icons/ai";
import { FaPeopleRoof } from "react-icons/fa6";
import { BiCategory, BiMenu } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { LuLogOut } from "react-icons/lu";
import { GrClose } from "react-icons/gr";
import { useState } from "react";


const NavBar = ({ tab, setTab }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div
      className="md:w-1/4">
      <div
        className="md:hidden object-contain"
        onClick={() => setToggle(!toggle)}
      >
        {toggle
          ? <GrClose className="text-[40px] text-lightGreenBG cursor-pointer" />
          : <BiMenu className="text-[40px] text-lightGreenBG cursor-pointer" />
        }
      </div>
      <div
        className={`${toggle ? 'block' : 'hidden '} md:block`}
      >
        <h2
          className="w-full mt-[4rem] mb-[5rem] md:mb-[10rem] text-center text-lightGreenBG font-bold text-[20px] md:text-[24px]"
        >
          Hi, user&#39;s name here
        </h2>
        <ul className="pl-0 md:pl-[40px]">
          {navList.map((link, idx) => (
            <li
              key={idx}
              className={`${idx < navList.length - 1 ? 'mb-[20px] md:mb-[40px]' : 'mb-0'} w-full px-[10px]`}
            >
              <Link
                onClick={() => setTab(link.name)}
                to={link.to}
                className={`${tab === link.name ? 'text-greenText md:pl-[60px] backdrop-blur-md bg-white/10 rounded-lg' : 'text-white'} 
              flex gap-2 md:gap-4 text-[14px] md:text-[20px] font-semibold px-4 py-2
              hover:backdrop-blur-md hover:bg-white/40  hover:rounded-lg
              `}
              >
                <div className="w-10 h-10 flex justify-center items-center">
                  {link.name === 'DashBoard' && <AiOutlineDashboard className="md:w-10 md:h-10 w-7 h-7 " />}
                  {link.name === 'Employees' && <FaPeopleRoof className="md:w-10 md:h-10 w-7 h-7 " />}
                  {link.name === 'Category' && <BiCategory className="md:w-10 md:h-10 w-7 h-7 " />}
                  {link.name === 'Profile' && <ImProfile className="md:w-10 md:h-10 w-7 h-7 " />}
                  {link.name === 'LogOut' && <LuLogOut className="md:w-10 md:h-10 w-7 h-7 " />}
                </div>
                <p className="md:translate-y-1 translate-y-3">
                  {link.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div >
    </div>
  )
}

export default NavBar