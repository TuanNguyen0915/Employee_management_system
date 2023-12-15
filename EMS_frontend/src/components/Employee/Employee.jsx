import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

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
    <div>
      {employees?.map((emp) => (
        <h1 key={emp._id}>{emp.email}</h1>
      ))}

      <div className="flex justify-center items-center">
        <Link to="/employees/add_employees">
          <button className="btn border-none py-2 px-4 mt-[50px]">Add Employees</button>
        </Link>
      </div>
    </div>
  )
}

export default Employee
