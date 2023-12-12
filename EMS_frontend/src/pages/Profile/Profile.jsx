import NavBar from "../../components/NavBar/NavBar"


const Profile = () => {
  return (
    <section>
      <div className="container flex w-full">
        <NavBar tab='Profile'/>

        {/* CONTENT */}
        <div className="md:w-3/4 w-full h-[100vh] flex flex-col bg-slate-300"
        >
          This is profile
        </div>
      </div>
    </section>
  )
}

export default Profile