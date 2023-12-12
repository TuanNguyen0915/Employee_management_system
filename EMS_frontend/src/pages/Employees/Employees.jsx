import NavBar from "../../components/NavBar/NavBar"
import Employee from "../../components/Employee/Employee"

const Employees = () => {
  return (
    <section>
      <div className="container flex w-full">
        {/* <NavBar tab={tab} setTab={setTab} toggle={toggle} setToggle={setToggle} /> */}
        <NavBar tab='Employees'/>

        {/* CONTENT */}
        <div className="md:w-3/4 w-full h-[100vh] flex flex-col bg-slate-300"
        >
          <Employee />
        </div>
      </div>
    </section>
  )
}

export default Employees