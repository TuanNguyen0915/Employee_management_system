/* eslint-disable react/prop-types */
import { navList } from "../../utils/data/data"
import { Link } from "react-router-dom"
import { AiOutlineDashboard } from "react-icons/ai";
import { FaPeopleRoof } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { LuLogOut } from "react-icons/lu";


const NavBar = ({ tab, setTab }) => {

  return (
    <>
      <h2 className="w-full mt-[4rem] mb-[10rem] text-center text-lightGreenBG font-bold text-[20px] md:text-[24px]">Employees Management</h2>
      <ul className=" pl-[10px] md:pl-[40px]">
        {navList.map((link, idx) => (
          <li
            key={idx}
            className={`${idx < navList.length - 1 ? 'mb-[40px]' : 'mb-0'}`}
          >
            <Link
              onClick={() => setTab(link.name)}
              to={link.to}
              className={`${tab === link.name ? 'text-greenText pl-[20px]' : 'text-white'} flex gap-2 md:gap-4 text-[16px] md:text-[20px] font-semibold`}
            >

              <div className="w-10 h-10 flex justify-center items-center">
                {link.name === 'DashBoard' && <AiOutlineDashboard className="w-10 h-10" />}
                {link.name === 'Manage Employees' && <FaPeopleRoof className="w-10 h-10" />}
                {link.name === 'Category' && <BiCategory className="w-10 h-10" />}
                {link.name === 'Profile' && <ImProfile className="w-10 h-10" />}
                {link.name === 'LogOut' && <LuLogOut className="w-10 h-10" />}
              </div>
              <p className="translate-y-1">
                {link.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavBar