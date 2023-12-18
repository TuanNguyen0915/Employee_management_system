/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import ConfirmBox from "../ConfirmBox/ConfirmBox"
import { useState } from "react"

const EmployeeDetail = ({ employee, joinDate, BASE_URL }) => {
  const navigate = useNavigate()
  const [openConfirmBox, setOpenConfirmBox] = useState(false)

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
        <div className="w-1/2 xl:w-1/3 flex items-center justify-center ml-0 md:ml-8">
          <img src={employee.photo} alt="" className="w-full rounded-full" />
        </div>
      ) : (
        <div className="w-1/2 xl:w-1/3 flex items-center justify-center ml-0 md:ml-8">
          <img
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=6hQNACQQjktni8CxSS_QSPqJv2tycskYmpFGzxv3FNs="
            alt=""
            className="w-full rounded-full"
          />
        </div>
      )}
      {/* INFO */}
      <div className="w-full md:w-1/2 flex flex-col items-center gap-4 px-8 text-[16px] md:text-[20px]">
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
          <h1>Address: </h1>
          <span>{employee.address}</span>
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
          <Link to={`/employees/${employee._id}/edit`} state={employee}>
            <button className="btn border-none text-[16px]">Edit</button>
          </Link>

          <button className="btn border-none text-[16px] bg-red-700" onClick={() => setOpenConfirmBox(true)}>
            Delete
          </button>
        </div>
        {openConfirmBox && (
          <ConfirmBox
            setOpenConfirmBox={setOpenConfirmBox}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  )
}

export default EmployeeDetail
