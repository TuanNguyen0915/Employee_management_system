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
  }, [data])

  const handleDelete = async (categoryId) => {
    try {
      const res = await fetch(`${BASE_URL}/${categoryId}`, {
        method: 'delete'
      })
      console.log(`${BASE_URL}/${categoryId}`)

      if (!res.ok) {
        throw new Error(res.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div>
      <div>
        <table className="w-full">
          <thead>
            <tr className="text-left border-b-2 border-b-slate-500">
              <th>Name</th>
              <th>ID</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {data.map((c, idx) => (
              <div key={c._id}>
                <tr
                  className={`${(idx % 2 === 0) ? 'bg-slate-400' : 'bg-slate-300'} w-full flex justify-between items-center text-left`}
                >
                  <th>
                    {c.name}
                  </th>
                  <th>{c._id}</th>
                  <th>
                    <button
                      className="w-8 h-8 bg-red-400 p-1 m-1 rounded-md ml-[50px]"
                      onClick={() => handleDelete(c._id)}
                    >X</button>
                  </th>
                </tr>
              </div>
            ))}


          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center">
        {!addCate
          ?
          <button className="btn py-2 px-4 mt-[50px]" onClick={() => setAddCate(true)}>
            Add Category
          </button>
          : <CreateCategory />
        }
      </div>
    </div>
  )
}

export default Categories