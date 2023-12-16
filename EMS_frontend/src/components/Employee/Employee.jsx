import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { RxAvatar } from "react-icons/rx"

const Employee = () => {
  const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/employees`
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(BASE_URL)
        const result = await res.json()
        setEmployees(result.data)
      } catch (error) {
        toast.error(error.message)
      }
    }
    fetchData()
  }, [BASE_URL])
  console.log(employees)

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <table className="table-auto">
          <thead className="border-b-2 border-slate-400">
            <tr>
              <th className="pr-2 md:pr-4 font-semibold tracking-wide text-center hidden md:block"></th>
              <th className="pr-2 md:pr-4 font-semibold tracking-wide text-center ">Name</th>
              <th className="pr-2 md:pr-4 font-semibold tracking-wide text-center ">Email</th>
              <th className="pr-2 md:pr-4 font-semibold tracking-wide text-center ">Category</th>
              <th className="pr-2 md:pr-4 font-semibold tracking-wide text-center "></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e, idx) => (
              <tr key={e._id} className={`${idx % 2 !== 0 ? "bg-slate-400" : "bg-transparent"}`}>
                <td className="p-2 md:p-4 hidden md:block">
                  <div className="w-14 h-14 flex justify-center items-center">
                    {e.photo ? (
                      <img src={e.photo} alt="" className="w-full rounded-full" />
                    ) : (
                      <RxAvatar style={{ scale: "2" }} />
                    )}
                  </div>
                </td>
                <td className="p-2 md:p-4">
                  {e.firstName} {e.lastName}
                </td>
                <td className="p-2 md:p-4">{e.email}</td>
                <td className="p-2 md:p-4">{e.category}</td>
                <td className="p-2 md:p-4">
                  <Link to={`/employees/${e._id}`}>
                    <button className="btn border-none p-1 text-[16px]">Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center">
        <Link to="/employees/add_employees">
          <button className="btn border-none py-2 px-4 mt-[50px]">Add Employees</button>
        </Link>
      </div>
    </>
  )
}

export default Employee
