import NavBar from "../../components/NavBar/NavBar"

const LogOut = () => {
  return (
    <section>
      <div className="container flex w-full">
        <NavBar tab='LogOut'/>

        {/* CONTENT */}
        <div className="md:w-3/4 w-full h-[100vh] flex flex-col bg-slate-300"
        >
          This is logout
        </div>
      </div>
    </section>
  )
}

export default LogOut