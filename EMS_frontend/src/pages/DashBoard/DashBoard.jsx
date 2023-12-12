// components
import NavBar from "../../components/NavBar/NavBar"
import News from "../../components/News/News"

const DashBoard = () => {

  return (
    <section>
      <div className="container flex w-full">
        <NavBar tab='DashBoard'/>

        {/* CONTENT */}
        <div className="md:w-3/4 w-full h-[100vh] flex flex-col bg-slate-300"
        >
          <News />
        </div>
      </div>
    </section>
  )
}

export default DashBoard
  