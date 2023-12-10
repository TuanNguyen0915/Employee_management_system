import { useState } from "react"
import NavBar from "../../components/NavBar/NavBar"
// components
import Home from "../../components/Home/Home"
import Employees from "../../components/Employees/Employees"
import Category from "../../components/Category/Category"
import Profile from "../../components/Profile/Profile"
import LogOut from "../../components/LogOut/LogOut"



const DashBoard = () => {
  const [tab, setTab] = useState('DashBoard')
  const [toggle, setToggle] = useState(false)

  return (
    <section>
      <div className="container flex w-full">
        <NavBar tab={tab} setTab={setTab} toggle={toggle} setToggle={setToggle} />

        {/* CONTENT */}
        <div className="md:w-3/4 w-full h-[100vh] flex flex-col bg-slate-300"
          onClick={() => setToggle(false)}>
          {tab === 'DashBoard' && <Home />}
          {tab === 'Employees' && <Employees />}
          {tab === 'Category' && <Category />}
          {tab === 'Profile' && <Profile />}
          {tab === 'LogOut' && <LogOut />}
        </div>
      </div>
    </section>
  )
}

export default DashBoard
