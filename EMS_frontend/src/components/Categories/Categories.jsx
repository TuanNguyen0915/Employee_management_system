import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import CreateCategory from "./CreateCategory"

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/categories`

const Categories = () => {
  const [data, setData] = useState([])
  const [addCate, setAddCate] = useState(false)

  // Get all data from category
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(BASE_URL)
        const result = await res.json()

        if (!res.ok) {
          throw new Error(result.message)
        }
        toast.success(res.message)
        setData(result.data)
      } catch (error) {
        toast.error(error.message)
      }
    }
    fetchData()
  },)

  const handleDelete = async (categoryId) => {
    try {
      const res = await fetch(`${BASE_URL}/${categoryId}`, {
        method: 'delete'
      })
      if (!res.ok) {
        throw new Error(res.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        <table >
          <thead className=" border-b-2 border-slate-400">
            <tr>
              <th className="p-2 md:p-4 font-semibold tracking-wide text-left ">Name</th>
              <th className="p-2 md:p-4 font-semibold tracking-wide text-left "></th>
            </tr>
          </thead>

          <tbody>
            {data.map((c, idx) => (
                <tr key={c._id}
                  className={`${(idx % 2 !== 0) ? 'bg-slate-400' :'bg-transparent'}`}
                >
                  <td className="p-2 md:p-4">
                    {c.name}
                  </td>
                  <td className="p-2 md:p-4">
                    <button
                      className="w-8 h-8 bg-red-400 p-1 m-1 rounded-md ml-[50px]"
                      onClick={() => handleDelete(c._id)}
                    >X</button>
                  </td>
                </tr>
            ))}


          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center">
        {!addCate
          ?
          <button className="btn border-none py-2 px-4 mt-[50px]" onClick={() => setAddCate(true)}>
            Add Category
          </button>
          : <CreateCategory setAddCate={setAddCate}/>
        }
      </div>
    </div>
  )
}

export default Categories