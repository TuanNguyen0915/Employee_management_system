const Home = () => {
  return (
    <div className="container flex items-center justify-center h-[100vh] overflow-hidden bg-loginBG bg-no-repeat bg-cover bg-center bg-fixed"
    // style={{backgroundImage: `url('images/login-bg.jpg')`}}
    >
      <div className="md:w-1/2 md:mx-0 mx-4 w-full border border-solid border-lightGreenBG rounded-md backdrop-blur-md bg-white/10">
        <div className="p-[40px]">
          <h1 className="text-whiteColor text-center text-[40px] font-bold leading-[50px]">Login Page</h1>
          <form className="flex flex-col gap-4 mt-[40px]">
            {/* email */}
            <label className="text-whiteColor text-[20px]">Email:</label>
            <input
              type="text"
              name="email"
              className="px-4 py-2 text-[20px] rounded-lg border border-solid border-white focus:outline-2 outline-green-600 "
              placeholder="Enter Email"
              autoComplete="off"
              required
            />
            {/* password */}
            <label className="text-whiteColor text-[20px]">Password:</label>
            <input
              type="password"
              name="password"
              className="px-4 py-2 text-[20px] rounded-lg border border-solid border-white focus:outline-2 outline-green-600 "
              placeholder="Enter Email"
              autoComplete="off"
              required
            />
            <button className="btn">Login</button>
            <div className="flex items-center justify-center">
              <input type="checkbox"  className="h-6 w-6 bg-gray-500 rounded-full accent-green-700 focus:ring-green-400 shadow checked:shadow-xl mr-5"/>
              <p className="text-[20px] text-white">You are Agree with <span className="text-linkText hover:text-greenText cursor-pointer">Terms & Conditions</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home