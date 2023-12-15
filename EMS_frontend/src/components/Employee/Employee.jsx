import { Link } from "react-router-dom"
const Employee = () => {

  return (
    <div>
      {/* <div className="w-full flex flex-col justify-center items-center">
        <table>
          <thead className="border-b-2 border-slate-400">
            <tr>
              <th className="p-2 md:p-4 font-semibold tracking-wide text-left">Name</th>
            </tr>
          </thead>
        </table>
      </div> */}

      {/* Add Employee */}
      <h1>Employees Information</h1>
      <div className="flex justify-center items-center"
      >
        <Link to='/employees/add_employees'>
          <button className="btn border-none py-2 px-4 mt-[50px]">
            Add Employees
          </button>
        </Link>
      </div>
    </div>

  )
}

export default Employee