// mpm modules
import { Routes, Route } from 'react-router-dom'

//pages
import Home from "./pages/Home/Home"


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App