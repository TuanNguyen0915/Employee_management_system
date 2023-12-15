import Categories from "../../components/Categories/Categories"
import SideBar from "../../components/SideBar/SideBar"

const Category = () => {
  return (
    <section>
      <div className="container flex w-full">
        <SideBar />
        {/* CONTENT */}
        <div className="md:w-3/4 w-full h-screen flex flex-col bg-slate-300"
        >
          <h1 className="text-[20px] md:text-[40px] w-full text-center mb-[10rem] text-primaryColor p-4 border-b-2 border-slate-600/20 capitalize">Category List</h1>
          <Categories />
        </div>
      </div>
    </section>
  )
}

export default Category