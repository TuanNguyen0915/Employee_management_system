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
  }, [])

  return (
    <div>
      <form >
        <label className="mr-4 md:mr-8 text-[16px] md:text-[24px]">Chose a Category: </label>
        <select name="" id="" className="py-2 px-4 rounded-md">
          {data.map((cate) => (
            <option value={cate.name} key={cate._id}>{cate.name}</option>
          ))}
        </select>
      </form>
      <div className="flex justify-center items-center">
        {!addCate
          ?
          <button className="btn py-2 px-4 mt-[50px]" onClick={() => setAddCate(true)}>
            Add Cate
          </button>
          : <CreateCategory />
        }
      </div>
    </div>
  )
}

export default Categories