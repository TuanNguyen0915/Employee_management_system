const Home = () => {
  return (
      <div className="container flex items-center justify-center h-[100vh] bg-primaryColor">
        <div className="w-1/2 border border-solid border-lightGreenBG rounded-md">
          <div className="px-4 py-2">
              <h1 className="text-whiteColor text-center text-[40px] font-bold leading-[50px]">Login Page</h1>
              <form className="flex flex-col  gap-4">
                {/* email */}
                <label className="text-whiteColor text-[20px]">Email:</label>
                <input 
                type="text"
                name="email"
                className="px-4 py-2 text-[20px]"
                placeholder="Enter Email"
                required
                />
                {/* password */}
                <label className="text-whiteColor text-[20px]">Password:</label>
                <input 
                type="password"
                name="password"
                className="px-4 py-2 text-[20px]"
                placeholder="Enter Email"
                required
                />

                <button className="btn">Login</button>
              </form>
          </div>
        </div>
      </div>
  )
}

export default Home