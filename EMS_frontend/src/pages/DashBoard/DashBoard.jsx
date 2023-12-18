// components
import { useEffect, useState } from "react"
import SideBar from "../../components/SideBar/SideBar"
import { toast } from 'react-toastify'
import { calculateSalary } from "../../utils/calculateSalary"

const DashBoard = () => {
  const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL
  const [adminTotal, setAdminsTotal] = useState([])
  const [employeesTotal, setEmployeesTotal] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch employees
        const resEmployees = await fetch(`${BASE_URL}/employees`)
        const resultEmployee = await resEmployees.json()
        // fetch admins
        const resAdmin = await fetch(`${BASE_URL}/admin`)
        const resultAdmin = await resAdmin.json()
        if (!resAdmin.ok || !resEmployees.ok) {
          toast.error('fail to fetch')
        }
        setEmployeesTotal(resultEmployee.data)
        setAdminsTotal(resultAdmin.data)
      } catch (error) {
        toast.error(error.message)
      }
    }
    fetchData()
  }, [BASE_URL])

  let totalSalary = calculateSalary(employeesTotal)
  return (
    <section>
      <div className="container flex w-full">
        <SideBar />

        {/* CONTENT */}
        <div className="md:w-3/4 w-full h-[100vh] bg-slate-300"
        >
          <h1 className="text-[20px] md:text-[40px] w-full text-center mb-[10rem] text-primaryColor p-4 border-b-2 border-slate-600/20 capitalize">Category List</h1>

          <div className="w-full flex flex-col md:flex-row md:justify-between items-center mt-[8rem]">
            <div className="w-[60%] md:w-[30%] px-4 md:px-10 pt-2 shadow-darkShadow m-8 bg-slate-200 rounded-lg">
              <h1
                className="w-full pt-2 pb-4 border-b-[1px] border-slate-600 text-[28px] md:text-[36px] text-center text-green-700"
              >
                Admin</h1>
              <div className="w-full flex justify-between items-center pt-4 pb-8">
                <h3 >Total:  </h3>
                <h3 className="text-right">{adminTotal.length}</h3>
              </div>
            </div>
            <div className="w-[60%] md:w-[30%] px-4 md:px-10 pt-2 shadow-darkShadow m-8 bg-slate-200 rounded-lg">
              <h1
                className="w-full pt-2 pb-4 border-b-[1px] border-slate-600 text-[28px] md:text-[36px] text-center text-green-700"
              >Employees</h1>
              <div className="w-full flex justify-between items-center pt-4 pb-8">
                <h3 >Total:  </h3>
                <h3 className="text-right">{employeesTotal.length}</h3>
              </div>

            </div>
            <div className="w-[60%] md:w-[30%] px-4 md:px-10 pt-2 shadow-darkShadow m-8 bg-slate-200 rounded-lg">
              <h1
                className="w-full pt-2 pb-4 border-b-[1px] border-slate-600 text-[28px] md:text-[36px] text-center text-green-700"
              >
                Salary</h1>
              <div className="w-full flex justify-between items-center pt-4 pb-8">
                <h3 >Total:  </h3>
                <h3 className="text-right">${totalSalary}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashBoard
