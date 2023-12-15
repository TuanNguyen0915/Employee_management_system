import SideBar from "../../components/SideBar/SideBar"


const Profile = () => {
  return (
    <section>
      <div className="container flex w-full">
        <SideBar />

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