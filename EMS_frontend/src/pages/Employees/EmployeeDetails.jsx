import SideBar from "../../components/SideBar/SideBar"
import EmployeeDetail from "../../components/Employee/EmployeeDetail"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const EmployeeDetails = () => {
  let { employeeId } = useParams()
  const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/employees/${employeeId}`
  const [data, setData] = useState({})
  const [joinDate, setJoinDate] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(BASE_URL)
        const result = await res.json()
        if (!res.ok) {
          throw new Error(result.message)
        }
        setData(result.data)
        let joined = await result.data.createdAt
        setJoinDate(joined.slice(0,10))
      } catch (error) {
        toast.error(error.message)
      }
    }
    fetchData()
  }, [BASE_URL])
  return (
    <section>
      <div className="container flex w-full">
        <SideBar />

        {/* CONTENT */}
        <div className="md:w-3/4 w-full h-screen flex flex-col bg-slate-300">
          <h1 className="text-[20px] md:text-[40px] w-full text-center mb-8 md:mb-[8rem] text-primaryColor p-4 border-b-2 border-slate-600/20 capitalize">
            Employees Details
          </h1>
          <EmployeeDetail employee={data} joinDate={joinDate}/>
        </div>
      </div>
    </section>
  )
}

export default EmployeeDetails
