import SideBar from "../../components/SideBar/SideBar"
import { useState } from "react"

const AddEmployees = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    imageUrl: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <section>
      <div className="container flex w-full">
        <SideBar />
        <div className="md:w-3/4 w-full h-screen flex flex-col bg-slate-300">
          <h1 className="text-[20px] md:text-[40px] w-full text-center mb-[6rem] text-primaryColor p-4 border-b-2 border-slate-600/20 capitalize">
            Add New Employee
          </h1>
          <div className="w-4/5 md:w-2/3 mx-auto border border-slate-600/40 rounded-lg">
            <form className="w-full flex flex-col px-2 py-4 gap-2 md:gap-4">
              {/* NAME */}
              <label>Name</label>
              <input
                className="w-full py-1 px-2 border border-slate-600/40 bg-slate-200  focus:outline outline-primaryColor placeholder-black/50"
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter Name"
                autoComplete="off"
                required
                onChange={handleChange}
              />
              {/* EMAIL */}
              <label>Email</label>
              <input
                className="w-full py-1 px-2 border border-slate-600/40 bg-slate-200  focus:outline outline-primaryColor placeholder-black/50"
                type="text"
                name="email"
                value={formData.email}
                placeholder="Enter Email"
                autoComplete="off"
                required
                onChange={handleChange}
              />
              {/* PASSWORD */}
              <label>Password</label>
              <input
                className="w-full py-1 px-2 border border-slate-600/40 bg-slate-200  focus:outline outline-primaryColor placeholder-black/50"
                type="text"
                name="password"
                value={formData.password}
                placeholder="Enter Password"
                autoComplete="off"
                required
                onChange={handleChange}
              />
              {/* SALARY */}
              <label>Salary</label>
              <input
                className="w-full py-1 px-2 border border-slate-600/40 bg-slate-200 focus:outline outline-primaryColor placeholder-black/50"
                type="text"
                name="salary"
                value={formData.salary}
                placeholder="Enter Salary"
                autoComplete="off"
                required
                onChange={handleChange}
              />
              {/* ADDRESS */}
              <label>Address</label>
              <input
                className="w-full py-1 px-2 border border-slate-600/40 bg-slate-200  focus:outline outline-primaryColor placeholder-black/50"
                type="text"
                name="address"
                value={formData.address}
                placeholder="Enter Address"
                autoComplete="off"
                required
                onChange={handleChange}
              />
              {/* IMAGE */}
              <label>Image</label>
              <input
                className="w-full py-1 px-2 border border-slate-600/40 bg-slate-200 focus:outline 
                outline-primaryColor placeholder-black/50"
                type="file"
                name="imageUrl"
                accept=".jpg, .png"
              />
              
                <button className="min-w-[50%] mx-auto btn border-none text-[16px]">Add Employee</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddEmployees
