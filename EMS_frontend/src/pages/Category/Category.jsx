import Categories from "../../components/Categories/Categories"
import SideBar from "../../components/SideBar/SideBar"

const Category = () => {
  return (
    <section>
      <div className="container flex w-full">
        <SideBar tab='Category' />
        {/* CONTENT */}
        <div className="md:w-3/4 w-full h-[100vh] flex flex-col justify-center items-center bg-slate-300"
        >
          <Categories />
        </div>
      </div>
    </section>
  )
}

export default Category