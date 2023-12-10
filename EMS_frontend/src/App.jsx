// mpm modules
import { Routes, Route } from 'react-router-dom'

//pages
import Home from "./pages/Home/Home"
import DashBoard from './pages/DashBoard/DashBoard'

// css
import './App.css'
import Employees from './components/Employees/Employees'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashBoard />} ></Route>
        <Route path='/dashboard/employees' element={<Employees />} />
      </Routes>
    </>
  )
}

export default App