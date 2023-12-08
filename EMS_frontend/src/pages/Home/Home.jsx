const Home = () => {
  return (
    <div className="container flex items-center justify-center h-[100vh] overflow-hidden bg-loginBG bg-no-repeat bg-cover bg-center bg-fixed"
    // style={{backgroundImage: `url('images/login-bg.jpg')`}}
    >
      <div className="md:w-1/2 md:mx-0 mx-4 w-full border border-solid border-lightGreenBG rounded-md backdrop-blur-sm bg-white/10">
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
              autoComplete="off"
              required
            />
            {/* password */}
            <label className="text-whiteColor text-[20px]">Password:</label>
            <input
              type="password"
              name="password"
              className="px-4 py-2 text-[20px]"
              placeholder="Enter Email"
              autoComplete="off"
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