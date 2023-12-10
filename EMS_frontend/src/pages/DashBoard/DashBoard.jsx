import { useState } from "react"
import NavBar from "../../components/NavBar/NavBar"

const DashBoard = () => {
  const [tab,setTab] = useState('DashBoard')
  return (
    <section>
      <div className="container flex">
        <div className="md:w-1/4 w-1/2 h-[100vh] flex flex-col items-start bg-secondColor ">
          <NavBar tab={tab} setTab={setTab}/>
        </div>
        {/* CONTENT */}
        <div className="w-3/4 flex flex-col bg-slate-300">
          DASHBOARD CONTENT
        </div>
      </div>
    </section>
  )
}

export default DashBoard
