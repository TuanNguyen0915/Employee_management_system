import Categories from "../../components/Categories/Categories"
import NavBar from "../../components/NavBar/NavBar"

const Category = () => {
  return (
    <section>
      <div className="container flex w-full">
        <NavBar tab='Category' />
        {/* CONTENT */}
        <div className="md:w-3/4 w-full h-[100vh] flex flex-col bg-slate-300"
        >
          <Categories />
        </div>
      </div>
    </section>
  )
}

export default Category