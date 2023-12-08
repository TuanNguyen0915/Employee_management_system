// mpm modules
import { Routes, Route } from 'react-router-dom'

//pages
import Home from "./pages/Home/Home"
import DashBoard from './pages/DashBoard/DashBoard'

// css
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </>
  )
}

export default App