import { useState } from "react"

const Home = () => {

  const [user, setUser] = useState({
    email: '',
    password: '',
    role: 'user'
  })

  const handleOnChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

  }

  return (
    <div className="container flex items-center justify-center h-[100vh] bg-loginBG bg-cover bg-no-repeat bg-center bg-fixed overflow-hidden">
      <div className="md:w-1/2 w-full md:mx-0 mx-4 p-4 md:p-8 backdrop-blur-md bg-white/5 flex flex-col border border-greenBorder rounded-lg">
        <div className="w-full border-b border-white/40">
          <h2
            className="text-[30px] md:text-[40px] leading-[35px] md:leading-[50px] text-whiteColor text-center font-bold pb-[20px]"
          >Login Page
          </h2>
        </div>

        <form className="flex flex-col md:gap-4 gap-3 mt-[50px]" onSubmit={handleSubmit}>
          {/* EMAIL */}
          <label className="text-white text-[16px] md:text-[20px]" >Email:</label>
          <input
            type="text" className="w-full md:py-4 md:px-6 py-2 px-4 backdrop-blur-sm bg-white/10 rounded-lg text-[16px] md:text-[20px] text-white focus:outline outline-greenBorder"
            placeholder="Enter your email"
            value={user.email} name="email"
            onChange={handleOnChange}
          />
          {/* PASSWORD */}
          <label className="text-white text-[16px] md:text-[20px]" >Password:</label>
          <input
            type="password" className="w-full md:py-4 md:px-6 py-2 px-4 backdrop-blur-sm bg-white/10 rounded-lg text-[16px] md:text-[20px] text-white focus:outline outline-greenBorder"
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
            <input type="checkbox" className="w-8 h-8 rounded-full shadow checked:shadow-xl accent-lightGreenBG mr-6" />
            <p className="text-[20px] text-white">You are Agree with <span className="text-linkText hover:text-greenText cursor-pointer">Terms & Conditions</span></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
