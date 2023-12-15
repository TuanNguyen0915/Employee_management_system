import { useNavigate } from "react-router-dom"
import SideBar from "../../components/SideBar/SideBar"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import UploadImgToCloudinary from "../../utils/uploadCloudinary"

const AddEmployees = () => {
  const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    category: "",
    password: "",
    salary: "",
    address: "",
    imageUrl: "",
  })

  const [previewImg, setPreviewImg] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/categories`)
        const result = await res.json()
        const { message } = result.message
        if (!res.ok) {
          throw new Error(message)
        }
        setCategories(result.data)
      } catch (error) {
        toast.error(error.message)
      }
    }
    fetchData()
  })

  const handleImgInputChange = async (e) => {
    const file = await e.target.files[0]
    const data = await UploadImgToCloudinary(file)
    setPreviewImg(data.url)
    setFormData({ ...formData, imageUrl: data.url })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${BASE_URL}/employees`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const { message } = await res.json()
      if (!res.ok) {
        throw new Error(message)
      }
      toast.success(message)
      navigate("/employees")
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <section>
      <div className="container flex w-full">
        <SideBar />
        <div className="md:w-3/4 w-full min-h-screen flex flex-col bg-slate-300">
          <div className="w-4/5 md:w-2/3 mx-auto border border-slate-600/40 rounded-lg mt-4 md:mt-8">
            <h1 className="text-[20px] md:text-[40px] text-center mb-8 text-white bg-primaryColor rounded-t-lg border-b-2 border-slate-600/20 capitalize">
              Add New Employee
            </h1>
            <form className="w-full flex flex-col px-4 md:px-8 py-2 gap-2" onSubmit={handleSubmit}>
              {/* NAME */}
              <label>First Name</label>
              <input
                className="w-full py-1 px-2 border border-slate-600/40 bg-slate-200  focus:outline outline-primaryColor placeholder-black/50"
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="Enter First Name"
                autoComplete="off"
                required
                onChange={handleChange}
              />
              <label>Last Name</label>
              <input
                className="w-full py-1 px-2 border border-slate-600/40 bg-slate-200  focus:outline outline-primaryColor placeholder-black/50"
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Enter Last Name"
                autoComplete="off"
                required
                onChange={handleChange}
              />
              {/* DOB */}
              <label>Day Of Birth</label>
              <input
                className="w-full py-1 px-2 border border-slate-600/40 bg-slate-200  focus:outline outline-primaryColor placeholder-black/50"
                type="date"
                name="dob"
                value={formData.dob}
                placeholder="Enter mm/dd/yyyy"
                autoComplete="off"
                required
                onChange={handleChange}
              />
              {/* EMAIL */}
              <label>Email</label>
              <input
                className="w-full py-1 px-2 border border-slate-600/40 bg-slate-200  focus:outline outline-primaryColor placeholder-black/50"
                type="email"
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
              {/* CATEGORY */}
              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full py-1 px-2 border border-slate-600/40 bg-slate-200 focus:outline outline-primaryColor placeholder-black/50"
                required
              >
                {/* <option value="">Select ...</option> */}
                {categories.map((c) => (
                  <option key={c._id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              {/* SALARY */}
              <label>Salary</label>
              <input
                className="w-full py-1 px-2 border border-slate-600/40 bg-slate-200 focus:outline outline-primaryColor placeholder-black/50"
                type="number"
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
                onChange={handleImgInputChange}
              />
              {previewImg && (
                <div className="md:w-1/5 w-1/3">
                  <img className="w-full h-full rounded-full" src={previewImg} />
                </div>
              )}
              <button className="min-w-[50%] mx-auto btn border-none text-[16px]">Add Employee</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddEmployees
