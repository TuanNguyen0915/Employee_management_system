import { useState } from "react"
import NavBar from "../../components/NavBar/NavBar"

const DashBoard = () => {
  const [tab, setTab] = useState('DashBoard')
  
  return (
    <section>
      <div className="container flex w-full">
          <NavBar tab={tab} setTab={setTab}/>

        {/* CONTENT */}
        <div className="md:w-3/4 w-full h-[100vh] flex flex-col bg-slate-300">
          DASHBOARD CONTENT
        </div>
      </div>
    </section>
  )
}

export default DashBoard
