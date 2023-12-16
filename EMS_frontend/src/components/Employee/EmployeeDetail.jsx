import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
/* eslint-disable react/prop-types */
const EmployeeDetail = ({ employee, joinDate }) => {
  const navigate = useNavigate()
  const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/${employee._id}`

  const handleDelete = async () => {
    try {
      const res = await fetch(BASE_URL, {
        method: "delete",
      })
      const result = await res.json()
      if (!res.ok) {
        throw new Error(result.message)
      }
      navigate("/employees")
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-2">
      {/* PHOTO */}
      {employee.photo ? (
        <div className="w-1/2 md:w-1/3 md:ml-[10rem]">
          <img src={employee.photo} alt="" className="w-full rounded-full" />
        </div>
      ) : (
        <div className="w-1/2 md:w-1/3 md:ml-[10rem]">
          <img
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=6hQNACQQjktni8CxSS_QSPqJv2tycskYmpFGzxv3FNs="
            alt=""
            className="w-full rounded-full"
          />
        </div>
      )}
      {/* INFO */}
      <div className="flex flex-col items-center gap-4 mt-[4rem] md:mt-0 ml-0 md:ml-[4rem] w-4/5 md:w-1/2 md:pr-[20rem]">
        <div className="w-full flex justify-between items-center ">
          <h1>Full Name: </h1>
          <span>
            {employee.firstName} {employee.lastName}
          </span>
        </div>
        <div className="w-full flex justify-between items-center">
          <h1>Email: </h1>
          <span>{employee.email}</span>
        </div>
        <div className="w-full flex justify-between items-center">
          <h1>DOB: </h1>
          <span>{employee.dob}</span>
        </div>
        <div className="w-full flex justify-between items-center">
          <h1>Category: </h1>
          <span>{employee.category}</span>
        </div>
        <div className="w-full flex justify-between items-center">
          <h1>Pay Rate: </h1>
          <span>${employee.salary}/hrs</span>
        </div>
        <div className="w-full flex justify-between items-center">
          <h1>Joined at: </h1>
          <span>{joinDate}</span>
        </div>
        {/* BUTTON */}
        <div className="w-full flex justify-between items-center">
          <button className="btn border-none text-[16px]">Edit</button>
          <button className="btn border-none text-[16px] bg-red-700" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetail
