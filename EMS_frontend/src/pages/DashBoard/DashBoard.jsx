import { useState } from "react"
import NavBar from "../../components/NavBar/NavBar"
// components
import Home from "../../components/Home/Home"
import Employees from "../../components/Employees/Employees"
import Category from "../../components/Category/Category"
import Profile from "../../components/Profile/Profile"



const DashBoard = () => {
  const [tab, setTab] = useState('DashBoard')

  return (
    <section>
      <div className="container flex w-full">
        <NavBar tab={tab} setTab={setTab} />

        {/* CONTENT */}
        <div className="md:w-3/4 w-full h-[100vh] flex flex-col bg-slate-300">
          {tab === 'DashBoard' && <Home />}
          {tab === 'Employees' && <Employees />}
          {tab === 'Category' && <Category />}
          {tab === 'Profile' && <Profile />}
        </div>
      </div>
    </section>
  )
}

export default DashBoard
