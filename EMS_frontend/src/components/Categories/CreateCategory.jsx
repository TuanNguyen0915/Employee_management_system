import { useState } from "react"
import { toast } from "react-toastify"
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/categories/create`


const CreateCategory = () => {
  const [formData, setFormData] = useState({
    name: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async () => {
    try {
      const result = await fetch(BASE_URL, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const {message} = await result.json()
      if(!result.ok) {
        throw new Error(message)
      }
      toast.success(message)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div className="w-full flex justify-center items-center">
      <form 
      className="flex flex-col mt-[10rem] border border-solid border-primaryColor rounded-lg px-10 py-5 bg-primaryColor"
      onSubmit={handleSubmit}
      >
        <input
          type="text" name='name' value={formData.value} placeholder="Enter category ..."
          onChange={handleChange}
          className="p-3 text-[16px] rounded-md"
          required
        />
        <button className="btn p-1">Submit</button>
      </form>
    </div>
  )
}

export default CreateCategory