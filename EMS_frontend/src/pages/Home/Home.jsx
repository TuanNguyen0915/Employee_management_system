import { useState } from "react"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL

const Home = () => {
  const navigate = useNavigate()
  const [errMessage, setErrMessage] = useState('')
  const [user, setUser] = useState({
    email: '',
    password: ''
  })


  const handleOnChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    setErrMessage('')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const result = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(user)
      })
      const res = await result.json()
      console.log(res)
      if (!result.ok) {
        setErrMessage(res.message)
      }
      if (res.success) {
        toast.success(res.message)
        navigate('/dashboard')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="container flex items-center justify-center h-[100vh] bg-loginBG bg-cover bg-no-repeat bg-center bg-fixed overflow-hidden">
      <div className="md:w-[40%] w-full md:mx-0 mx-4 p-4 md:p-8 backdrop-blur-md bg-white/5 flex flex-col border border-greenBorder rounded-lg">
        <div className="w-full border-b border-white/40">
          <h2
            className="text-[30px] md:text-[40px] leading-[35px] md:leading-[50px] text-whiteColor text-center font-bold pb-[20px]"
          >Login Page
          </h2>
        </div>
        {/* ERROR MESSAGE */}
        <div className="w-full mt-6">
          {errMessage && <h2 className="text-red-400 text-[16px] text-center">{errMessage}</h2>}
        </div>
        <form className="flex flex-col md:gap-4 gap-3 mt-[50px]" onSubmit={handleSubmit}>
          {/* EMAIL */}
          <label className="text-white text-[16px] md:text-[20px]" >Email:</label>
          <input
            type="text"
            className="w-full md:py-4 md:px-6 py-2 px-4 backdrop-blur-sm bg-white/10 rounded-lg text-[16px] md:text-[20px] text-white focus:outline outline-greenBorder"
            placeholder="Enter your email"
            value={user.email} name="email"
            onChange={handleOnChange}
          />
          {/* PASSWORD */}
          <label className="text-white text-[16px] md:text-[20px]" >Password:</label>
          <input
            type="password"
            className="w-full md:py-4 md:px-6 py-2 px-4 backdrop-blur-sm bg-white/10 rounded-lg text-[16px] md:text-[20px] text-white focus:outline outline-greenBorder"
            placeholder="Enter your password"
            value={user.password} name='password'
            onChange={handleOnChange}
          />
          {/* BUTTON AND TERMS */}
          <div className="w-full flex justify-center items-center">
            <div className="w-1/2 flex justify-center items-center">
              <button className="w-1/2 btn px-4 py-2">Login</button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <input type="checkbox" className="w-6 h-6 rounded-full shadow checked:shadow-xl accent-lightGreenBG mr-4" />
            <p className="text-[16px] text-white">You are Agree with <span className="text-linkText hover:text-greenText cursor-pointer">Terms & Conditions</span></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
